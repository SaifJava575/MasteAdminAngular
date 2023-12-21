/*! multitab.js for disabling multiple tabs in licence application */

var Multitab = (function() {	
	
	var EventEmitter = function() {};
	
	EventEmitter.createInterface = function(space) {
		var methods = {};
		
		methods.on = function(name, fn) {
			if (typeof this[space] === 'undefined') {
				this[space] = {};
			}
			if (!this[space].hasOwnProperty(name)) {
				this[space][name] = [];
			}
			this[space][name].push(fn);
		};
		
		methods.off = function(name, fn) {
			if (typeof this[space] === 'undefined') return;
			if (this[space].hasOwnProperty(name)) {
				util.removeItem(fn, this[space][name]);
			}
		};
		
		methods.trigger = function(name) {
			if (typeof this[space] !== 'undefined' && this[space].hasOwnProperty(name)) {
				var args = Array.prototype.slice.call(arguments, 1);
				for (var i = 0; i < this[space][name].length; i++) {
					this[space][name][i].apply(this[space][name][i], args);
				}
			}
		};
		
		return methods;
	};
	
	var pvt = EventEmitter.createInterface('_handlers');
	EventEmitter.prototype._on = pvt.on;
	EventEmitter.prototype._off = pvt.off;
	EventEmitter.prototype._trigger = pvt.trigger;
	
	var pub = EventEmitter.createInterface('handlers');
	EventEmitter.prototype.on = function() {
		pub.on.apply(this, arguments);
		Array.prototype.unshift.call(arguments, 'on');
		this._trigger.apply(this, arguments);
	};
	EventEmitter.prototype.off = pub.off;
	EventEmitter.prototype.trigger = pub.trigger;
	
	var localStorage = window.localStorage;
	if (typeof localStorage === 'undefined') {
		localStorage = {
			getItem    : function() {},
			setItem    : function() {},
			removeItem : function() {}
		};
	}
	
	var util = {};
	
	util.guid = (function() {
		var S4 = function() {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		};
		return function() {
			return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
		};
	})();
	
	util.throttle = function(delay, fn) {
		var last = 0;
		return function() {
			var now = (new Date()).getTime();
			if (now - last > delay) {
				last = now;
				fn.apply(this, arguments);
			}
		};
	};
	
	util.extend = function(a, b) {
		if (typeof a === 'undefined' || !a) { a = {}; }
		if (typeof b === 'object') {
			for (var key in b) {
				if (b.hasOwnProperty(key)) {
					a[key] = b[key];
				}
			}
		}
		return a;
	};
	
	util.removeItem = function(item, array) {
		for (var i = array.length - 1; i >= 0; i--) {
			if (array[i] === item) {
				array.splice(i, 1);
			}
		}
		return array;
	};
	
	/**
	* A cross-window broadcast service built on top
	* of the HTML5 localStorage API. The interface
	* mimic socket.io in design.
	*
	* @author Srinivasa Rao Katta
	* @constructor
	*/
	
	/**
	 * detect IE
	 * returns true or false, if browser is not Internet Explorer
	 */
	function detectIE() {
		var ms_ie = false;
	    var ua = window.navigator.userAgent;
	    var old_ie = ua.indexOf('MSIE ');
	    var new_ie = ua.indexOf('Trident/');

	    if ((old_ie > -1) || (new_ie > -1)) {
	        ms_ie = true;
	    }
	    
	    return ms_ie;
	}
	
	var Multitab = function() {
		var self = this;
		var now = (new Date()).getTime();
		
		var isIE = detectIE();
	
		this.origin         = util.guid();
		this.lastMessage    = now;
		this.bindings       = [];
		this.receivedIDs    = {};
		this.previousValues = {};
	
		/*var storageHandler = function() { self._onStorageEvent.apply(self, arguments); };
		if (window.attachEvent) { document.attachEvent('onstorage', storageHandler); }
		else { window.addEventListener('storage', storageHandler, false); };*/
		
		if(isIE){
			var storageHandler = function() {
				if(self._onStorageEvent.apply != undefined || self._onStorageEvent.apply != null){
					self._onStorageEvent.apply(self, arguments);
				}else{
					localStorage.setItem(self, arguments);
				}
			};
		}else{
			var storageHandler = function() {
				self._onStorageEvent.apply(self, arguments);
			};
		}
		
		if (window.addEventListener) {
			window.addEventListener('storage', storageHandler, false);
		} else {
			document.attachEvent('onstorage', storageHandler);
		};
	};
	
	Multitab.prototype._transaction = function(fn) {
		var TIMEOUT   = 1000;
		var WAIT      = 20;
	
		var self      = this;
		var executed  = false;
		var listening = false;
		var waitTimer = null;
	
		var lock = function() {
			if (executed) return;
	
			var now = (new Date()).getTime();
			var activeLock = parseInt(localStorage.getItem(INDEX_LOCK) || 0);
			if (activeLock && now - activeLock < TIMEOUT) {
				if (!listening) {
					self._on('storage', lock);
					listening = true;
				}
				waitTimer = window.setTimeout(lock, WAIT);
				return;
			}
			executed = true;
			localStorage.setItem(INDEX_LOCK, now);
	
			fn();
			unlock();
		};
	
		var unlock = function() {
			if (listening) { self._off('storage', lock); }
			if (waitTimer) { window.clearTimeout(waitTimer); }
			localStorage.removeItem(INDEX_LOCK);
		};
	
		lock();
	};
	
	Multitab.prototype._cleanup_emit = util.throttle(100, function() {
		var self = this;
	
		this._transaction(function() {
			var now = (new Date()).getTime();
			var threshold = now - THRESHOLD_TTL_EMIT;
			var changed = 0;
	
			var messages = JSON.parse(localStorage.getItem(INDEX_EMIT) || '[]');
			for (var i = messages.length - 1; i >= 0; i--) {
				if (messages[i].timestamp < threshold) {
					messages.splice(i, 1);
					changed++;
				}
			}
			if (changed > 0) {
				localStorage.setItem(INDEX_EMIT, JSON.stringify(messages));
			}
		});
	});
	
	Multitab.prototype._cleanup_once = util.throttle(100, function() {
		var self = this;
	
		this._transaction(function() {
			var timestamp, ttl, key;
			var table   = JSON.parse(localStorage.getItem(INDEX_ONCE) || '{}');
			var now     = (new Date()).getTime();
			var changed = 0;
	
			for (key in table) {
				if (self._once_expired(key, table)) {
					delete table[key];
					changed++;
				}
			}
	
			if (changed > 0) {
				localStorage.setItem(INDEX_ONCE, JSON.stringify(table));
			}
		});
	});
	
	Multitab.prototype._once_expired = function(key, table) {
		if (!table) return true;
		if (!table.hasOwnProperty(key)) return true;
		if (typeof table[key] !== 'object') return true;
		var ttl = table[key].ttl || THRESHOLD_TTL_ONCE;
		var now = (new Date()).getTime();
		var timestamp = table[key].timestamp;
		return timestamp < now - ttl;
	};
	
	Multitab.prototype._localStorageChanged = function(event, field) {
		if (event && event.key) {
			return event.key === field;
		}
	
		var currentValue = localStorage.getItem(field);
		if (currentValue === this.previousValues[field]) {
			return false;
		}
		this.previousValues[field] = currentValue;
		return true;
	};
	
	Multitab.prototype._onStorageEvent = function(event) {
		event = event || window.event;
		var self = this;
	
		if (this._localStorageChanged(event, INDEX_EMIT)) {
			this._transaction(function() {
				var now = (new Date()).getTime();
				var data = localStorage.getItem(INDEX_EMIT);
				var messages = JSON.parse(data || '[]');
				for (var i = 0; i < messages.length; i++) {
					if (messages[i].origin === self.origin) continue;
					if (messages[i].timestamp < self.lastMessage) continue;
					if (messages[i].id) {
						if (self.receivedIDs.hasOwnProperty(messages[i].id)) continue;
						self.receivedIDs[messages[i].id] = true;
					}
					self.trigger(messages[i].name, messages[i].payload);
				}
				self.lastMessage = now;
			});
		}
	
		this._trigger('storage', event);
	};
	
	Multitab.prototype._emit = function(name, message, id) {
		id = (typeof id === 'string' || typeof id === 'number') ? String(id) : null;
		if (id && id.length) {
			if (this.receivedIDs.hasOwnProperty(id)) return;
			this.receivedIDs[id] = true;
		}
	
		var packet = {
			id        : id,
			name      : name,
			origin    : this.origin,
			timestamp : (new Date()).getTime(),
			payload   : message
		};
	
		var self = this;
		this._transaction(function() {
			var data = localStorage.getItem(INDEX_EMIT) || '[]';
			var delimiter = (data === '[]') ? '' : ',';
			data = [data.substring(0, data.length - 1), delimiter, JSON.stringify(packet), ']'].join('');
			localStorage.setItem(INDEX_EMIT, data);
			self.trigger(name, message);
	
			window.setTimeout(function() { self._cleanup_emit(); }, 50);
		});
	};
	
	Multitab.prototype.bind = function(object, options) {
		for (var i = 0; i < Multitab.bindings.length; i++) {
			var binding = Multitab.bindings[i].factory(object, options || null, this);
			if (binding) { this.bindings.push(binding); }
		}
	};
	
	Multitab.prototype.emit = function(name, message) {
		this._emit.apply(this, arguments);
		this._trigger('emit', name, message);
	};
	
	Multitab.prototype.once = function(key, fn, ttl) {
		if (!Multitab.supported) return;
	
		var self = this;
		this._transaction(function() {
			var data = JSON.parse(localStorage.getItem(INDEX_ONCE) || '{}');
			if (!self._once_expired(key, data)) return;
	
			data[key] = {};
			data[key].timestamp = (new Date()).getTime();
			if (typeof ttl === 'number') {
				data[key].ttl = ttl * 1000;
			}
	
			localStorage.setItem(INDEX_ONCE, JSON.stringify(data));
			fn();
	
			window.setTimeout(function() { self._cleanup_once(); }, 50);
		});
	};
	
	util.extend(Multitab.prototype, EventEmitter.prototype);
	
	Multitab.bindings = [];
	Multitab.supported = (typeof localStorage !== 'undefined');
	
	var INDEX_EMIT = 'multitab';
	var INDEX_ONCE = 'multitab_once';
	var INDEX_LOCK = 'multitab_lock';
	
	var THRESHOLD_TTL_EMIT = 50000;
	var THRESHOLD_TTL_ONCE = 1000 * 3600;
	
	Multitab.destroy = function() {
		localStorage.removeItem(INDEX_LOCK);
		localStorage.removeItem(INDEX_EMIT);
		localStorage.removeItem(INDEX_ONCE);
	};
	
	Multitab.getInstance = (function() {
		var multitab = null;
		return function() {
			if (!multitab) {
				multitab = new Multitab();
			}
			return multitab;
		};
	})();
	
	/**
	* Socket.io binding for multitab.js.
	*
	* - When a message is received on the socket, it's emitted on multitab.
	* - When a message is emitted via multitab, it's sent over the socket.
	* - The messages is been sending from custom js file in main portlet project
	*
	* @author Srinivasa Rao Katta
	*/
	
	var SocketBinding = function(socket, options, multitab) {
		options = util.extend({
			id      : null,
			send    : true,
			receive : true
		}, options);
		
		if (options.receive) {
			var watchedEvents = [];
			var onEventAdded = function(name, fn) {
				if (watchedEvents.indexOf(name) === -1) {
					watchedEvents.push(name);
					socket.on(name, function(data) {
						var id = (typeof options.id === 'function') ? options.id(name, data) : null;
						var emit = (typeof options.receive === 'function') ? options.receive(name, data) : true;
						if (emit || typeof emit !== 'boolean') {
							multitab._emit(name, data, id);
						}
					});
				}
			};
	
			for (var name in multitab.handlers) {
				for (var i = 0; i < multitab.handlers[name].length; i++) {
					onEventAdded(name, multitab.handlers[name][i]);
				}
			}
		
			multitab._on('on', onEventAdded);
		}
		
		if (options.send) {
			multitab._on('emit', function(name, message) {
				var emit = (typeof options.send === 'function') ? options.send(name, message) : true;
				if (emit || typeof emit !== 'boolean') {
					socket.emit(name, message);
				}
			});
		}
	};
	
	SocketBinding.factory = function(object, options, multitab) {
		if (typeof object.socket === 'undefined') { return false };
		return new SocketBinding(object, options, multitab);
	};
	
	Multitab.bindings.push(SocketBinding);
	return Multitab;
})();

function disableAutoComplete() {
	for(var i = 0, l = document.getElementsByTagName('input').length; i < l; i++) {
		if(document.getElementsByTagName('input').item(i).type == 'text') {
			document.getElementsByTagName('input').item(i).setAttribute('autocomplete', 'off');
		};
	};
};