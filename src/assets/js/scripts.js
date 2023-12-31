/**
 * @file Fire callbacks for Scripts IMPORTANT: do not rename or move this file,
 *       or change the directory name!
 */

/**
 * @file Fire callbacks for Scripts IMPORTANT: do not rename or move this file,
 *       or change the directory name!
 */

jQuery(document).ready(function() {
	jQuery('#mega-container').css("display","none");
	if (jQuery('#views-exposed-form-catalogs-page .form-item-sort-by select').val() == "") {
      jQuery('#views-exposed-form-catalogs-page .form-item-sort-by select option[value="created"]').attr("selected", true);
    }  
	document.getElementById('noscriptStyle').parentNode.removeChild(document.getElementById('noscriptStyle'));
	
	
	jQuery(".flexslider_indicator, .indicator-home").each(function(index) {
	  jQuery(this).addClass("indicator-home-row-"+index);
	  jQuery(this).addClass(jQuery(this).find('li').attr('class'));
	  jQuery(this).removeClass("views-row views-row-1 views-row-odd views-row-first active");
	});

	jQuery(".indicator-home").hover(    
		function () {
			var $this = jQuery(this),
			timer = $this.data("timer") || 0;
			clearTimeout(timer);
			timer = setTimeout(function() {
				$this.find('ul').addClass("indicator-home-list-hover");
				var cls = $this.find('h3').text().split(' ').join('_')+'_hlist';
				if ($this.find('li:first').attr("class") != cls) {
				  $this.find('ul').prepend("<li class= '"+$this.find('h3').text().split(' ').join('_')+"_hlist'>"+$this.find('h3').text()+"</li>");
				}
			}, 500);
			$this.data("timer", timer);
		},
		function () {
			var $this = jQuery(this),
			timer = $this.data("timer") || 0;
			clearTimeout(timer);
			timer = setTimeout(function() {
				$this.find('ul').removeClass("indicator-home-list-hover");
			    //$this.find('li:first').remove();
			}, 1500);
			$this.data("timer", timer);
		}
	);	

	jQuery("#select_jurisdiction_scheme").change(function() {
        var nid = jQuery('option:selected', jQuery(this)).val();
        if(typeof nid != 'undefined') {
        	window.location.href = '/node/'+ nid;
		}
    });
});

var mouseOverActiveElement = false;

function closeModal(obj) {
	jQuery(obj).parent().parent().find('h2.block-title').click();
}

/* Function for Sidebar toggle in catalog page - Code Starts */

function setCatalogSideBarToggle(addToggle, settings) {
	
	var catalogtab = '<a title="Hide Sidebar" class="catalogtab" id="catalogtab"></a>';
	jQuery( ".catalogtab" ).remove();
	
	/*
	if (addToggle) {
	jQuery('.page-catalogs #columns').append(catalogtab);
	
	jQuery('.page-catalog #columns').append(catalogtab);

		var colpblock = '<span class="collapse-block"></span>';
		jQuery('.page-catalogs #columns .region-sidebar-first section.block-web-catalog h2.block-title')
				.append(colpblock);
		
		jQuery('.page-catalog #columns .region-sidebar-first section.block-web-catalog h2.block-title')
		.append(colpblock);

		var clear = '<div class="clear"></div>';
		jQuery('.page-catalogs #columns .region-sidebar-first section.block-web-catalog h2.block-title')
				.append(clear);
		
		jQuery('.page-catalog #columns .region-sidebar-first section.block-web-catalog h2.block-title')
		.append(colpblock);
	}

	jQuery('.catalogtab').click( function() {
		if (jQuery(this).hasClass('close-sidebar')) {
			jQuery(this).addClass('open-sidebar');
			jQuery(this).removeClass('close-sidebar');
			jQuery(this).attr('title', 'Hide Sidebar');
			jQuery(this).parent().find('.region-sidebar-first').show();
			jQuery(this).parent().find('.region-sidebar-first').stop()
					.animate({
						width : settings.sideBarWidthOpen
					}, 300);
			jQuery(this).stop().animate({
				'marginLeft' : settings.toggleMarginOpen
			}, 300);
			jQuery(this).parent()
					.find('.content-column .content-inner').stop()
					.animate({
						marginLeft : settings.contentMarginOpen
					}, 300);
			jQuery(this).parent().find('.content-column .content-inner .views-exposed-form #edit-query').css('width','100%');
			jQuery('.view-id-catalogs .view-header .item-list').css('width', settings.searchTagOpen);
			jQuery('.search-result-tags-label').css('width', settings.searchTagLabOpen);
		} else {
			jQuery(this).addClass('close-sidebar');
			jQuery(this).removeClass('open-sidebar');
			jQuery(this).attr('title', 'Show Sidebar');
			jQuery(this).parent().find('.region-sidebar-first').stop()
					.animate({
						width : settings.sideBarWidthClose
					}, 300, function() {
						jQuery(this).hide();
					});
			jQuery(this).stop().animate({
				'marginLeft' : settings.toggleMarginClose
			}, 300);
			jQuery(this).parent()
					.find('.content-column .content-inner').stop()
					.animate({
						marginLeft : settings.contentMarginClose
					}, 300);
			jQuery(this).parent().find('.content-column .content-inner .views-exposed-form #edit-query').css('width','100%');
			jQuery('.view-id-catalogs .view-header .item-list').css('width', settings.searchTagClose);
			jQuery('.search-result-tags-label').css('width', settings.searchTagLabClose);
		}
	});
	*/
	
	if(typeof jQuery(".view-id-catalogs #edit-query").attr('id')  != 'undefined' 
    	&& jQuery(".view-id-catalogs #edit-query").val() !='') {
    	jQuery('#catalogtab').delay(2000).trigger('click');
    }
}
/* Function for Sidebar toggle in catalog page - Code Starts */

/* 
 * Function for Sidebar toggle in Search page - Code Starts
 */

function setSearchSideBarToggle(addToggle, settings) {
		
	var Searchtab = '<a title="Hide Sidebar" class="catalogtab" id="Searchtab"></a>';
	jQuery( "#Searchtab" ).remove();
	
	if (addToggle) {
		
		jQuery('.page-search #columns').append(Searchtab);

		var colpblock = '<span class="collapse-block"></span>';
		jQuery('.page-search #columns .region-sidebar-first .block h2')
				.append(colpblock);

		var clear = '<div class="clear"></div>';
		jQuery('.page-search #columns .region-sidebar-first .block h2')
				.append(clear);
	}

	jQuery('#Searchtab').click( function() {
		if (jQuery(this).hasClass('close-sidebar')) {
			jQuery(this).addClass('open-sidebar');
			jQuery(this).removeClass('close-sidebar');
			jQuery(this).attr('title', 'Hide Sidebar');
			jQuery(this).parent().find('.region-sidebar-first').show();
			jQuery(this).parent().find('.region-sidebar-first').stop()
					.animate({
						width : settings.sideBarWidthOpen
					}, 300);
			jQuery(this).stop().animate({
				'marginLeft' : settings.toggleMarginOpen
			}, 300);
			jQuery(this).parent()
					.find('.content-column .content-inner').stop()
					.animate({
						marginLeft : settings.contentMarginOpen
					}, 300);
			
		} else {
			jQuery(this).addClass('close-sidebar');
			jQuery(this).removeClass('open-sidebar');
			jQuery(this).attr('title', 'Show Sidebar');
			jQuery(this).parent().find('.region-sidebar-first').stop()
					.animate({
						width : settings.sideBarWidthClose
					}, 300, function() {
						jQuery(this).hide();
					});
			jQuery(this).stop().animate({
				'marginLeft' : settings.toggleMarginClose
			}, 300);
			jQuery(this).parent()
					.find('.content-column .content-inner').stop()
					.animate({
						marginLeft : settings.contentMarginClose
					}, 300);
			
		}
		
	});
	
	if(typeof jQuery("#edit-keys").attr('id')  != 'undefined' 
    	&& jQuery("#edit-keys").val() !='') {
    	jQuery('#Searchtab').delay(2000).trigger('click');
    }
}
/* 
 * Function for Sidebar toggle in Search page - Code Ends
 */
/*
 * Cookies Set Get Delete Definations
 */
var today = new Date();
var expiry = new Date(today.getTime() + 365 * 24 * 60 * 60 * 1000);

function _getCookieVal(offset) {
	var endstr = document.cookie.indexOf(";", offset);
	if (endstr == -1) {
		endstr = document.cookie.length;
	}
	return unescape(document.cookie.substring(offset, endstr));
}

function _getCookie(name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg) {
			return _getCookieVal(j);
		}
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0)
			break;
	}
	return null;
}

function deleteCookie(name, path, domain) {
	if (_getCookie(name)) {
		document.cookie = name + "=" + ((path) ? "; path=" + path : "")
				+ ((domain) ? "; domain=" + domain : "")
				+ "; expires=Thu, 01-Jan-70 00:00:01 GMT";
	}
}

function _setCookie(name, value, expires, path, domain, secure) {
	document.cookie = name + "=" + escape(value)
			+ ((expires) ? "; expires=" + expires.toGMTString() : "")
			+ ((path) ? "; path=" + path : "")
			+ ((domain) ? "; domain=" + domain : "")
			+ ((secure) ? "; secure" : "");
}

/* Footable for Responsive Table */
jQuery(function(){
	jQuery('table').footable();
});

jQuery(function(){
	jQuery('.region-floating-right h2').addClass('block-title recent_suggestion');
	jQuery('.region-floating-right h2.recent_suggestion')
	.on( "click", function() {
		jQuery( this ).find("a").trigger("click");
	});
});
/** trigger for contact us page***/
jQuery(function(){
	jQuery('.contactus-page .dataset_from').addClass('recent_suggestion');
	jQuery('.contactus-page .dataset_from.recent_suggestion')
	.on( "click", function() {
		jQuery( this ).find("a").trigger("click");
	});
});
/** trigger for contact us page ends***/
jQuery(function(){
	jQuery('#quicktabs-tabpage-feedback_and_suggestion_footer-0 .more-link a').attr('title','More Recent Suggestions');
});

/* Closing Window while pressing ESC Key */
jQuery(function(){
	jQuery(document).keyup(function(e) {
		// ESCAPE key pressed
	    if (e.keyCode == 27) {
	    	/* For MegaMenu  */
	    	jQuery('#mega-container').css("display","none");
	    	jQuery("#mega-menu-selector").removeClass('mega-menu-open');
			jQuery("#mega-menu-selector").addClass('mega-menu-close').attr("title", "Open Menu");
			/* For Share Widget Popup of Catalog Page */
			jQuery('#share-wgt-popup-outer').css("display","none");
			jQuery('#share-wgt-popup').css("display","none");
			/* For Suggest Dataset Right Form */
			jQuery('#block-dms-customizations-suggest-dataset').animate({right: "-402px"}, 500 );
			jQuery('.comutil-usr-info-content').hide( "slow" );
	    }
	});	
});

/* Title of Home Content Slider has been remove on mouse hover */

jQuery(function(){
    jQuery(".view-home-content-slider .flex-control-paging li a").hover(function(){
    jQuery(this).attr("tooltip-data", jQuery(this).attr("title"));
    jQuery(this).removeAttr("title");
  }, function(){
    jQuery(this).attr("title", jQuery(this).attr("tooltip-data"));
    jQuery(this).removeAttr("tooltip-data");
  });

});

/*
 * Cookies Set Get Delete Definations end
 */
/*
 * $('#textbox').keydown(function(event){ $('#msg-keydown').html('keydown() is
 * triggered!, keyCode = ' + event.keyCode + ' which = ' + event.which) });
 * 
 */

(function($) {
	/* For Right Side Slider Start*/
	jQuery.fn.dms_customizations_block_suggest_dataset_slider = function() {
		if (jQuery(this).parent().css('right') == '-4px') {
			jQuery(this).parent().animate({
				right : '-420px'
			}, 300, function() {
				jQuery(this).animate({
					right : '-402px'
				}, 100);
			});
		} else {
			jQuery(this).parent().animate({
				right : '4px'
			}, 300, function() {
				jQuery(this).animate({
					right : '-4px'
				}, 100);
			});
		}
	};
	
	jQuery.fn.suggest_dataset_slider_add_trigger  = function() {
		jQuery(this).not('.ogpl-processed')
			.addClass('ogpl-processed')
			.bind('click', jQuery.fn.dms_customizations_block_suggest_dataset_slider);
	};
	Drupal.behaviors.ogplCustom = {
		attach : function(context) {
			
			jQuery("body").removeClass('not-js');
			jQuery(".slider").each(function(index) {
				var className = jQuery(this).find('span').attr('class');
				jQuery(this).css("background-color", "#" + className);
			});
			jQuery("#menu-bar").slideDown(400);
			
			jQuery("body.page-home #columns").animate({
				'padding-top' : '0px'
			}, 400);
			
			jQuery("body.page-home #columns").addClass('pulldown');
			
			 /* jQuery("#block-dms-customizations-suggest-dataset").addClass('pulldown'); */
			jQuery(".front #primary-menu-bar li.menu-path-search-site a").not('.ogpl-processed')
			.addClass('ogpl-processed')
				.click(
						function() {
							jQuery("#menu-bar").slideToggle(400);
							if (!jQuery("body.page-home #columns")
									.hasClass('pulldown')) {
							jQuery("body.page-home #columns").animate({
									'padding-top' : '0px'
								}, 400);
								jQuery("body.page-home #columns").addClass(
										'pulldown');

							} else {
								jQuery("body.page-home #columns").animate({
									'padding-top' : '109px'
								}, 400);
								jQuery("body.page-home #columns")
										.removeClass('pulldown');
							}
							return false;
						});
			/* Clent Validation div inside the login popup container - starts */
			
			/* Catalog Filter Section Starts  */

			filtertab = '<a title="Hide Filter" class="filtertab" id="filtertab">X</a>';
			openfiltertab = '<a title="Open Filter" class="openfiltertab" id="openfiltertab">^</a>';

			
			filtertitle = '<h3 class="filtertitle">FILTER BY</h3>';
			jQuery('.filtertab').remove();
			jQuery('#catalog-filter-content').append(filtertab);
			jQuery('.filtertitle').remove();
			jQuery('#catalog-filter-content .region-sidebar-first').prepend(filtertitle);
			jQuery('.openfiltertab').remove();
			jQuery(".catalog-filter-header").append(openfiltertab);

			
			jQuery(".catalog-filter-header").not('.ogpl-processed').addClass('ogpl-processed').click(function() {
				if (jQuery(this).hasClass('close-filter')) {
					jQuery(this).addClass('open-filter');
					jQuery(this).removeClass('close-filter');
					jQuery(this).parent().find('#catalog-filter-content').show();
					jQuery('.filtertitle').remove();
					jQuery(this).parent().find('#catalog-filter-content .region-sidebar-first').prepend(filtertitle);
					jQuery(this).hide();
				} else {
					jQuery(this).removeClass('open-filter');
					jQuery(this).addClass('close-filter');
					jQuery(this).show();
					jQuery(this).parent().find('#catalog-filter-content').hide();
					jQuery('.filtertitle').remove();
				}
				return false;
			});
			
			/* GIGW insert table head on grid view of cdo pages -Starts*/
			
			jQuery( "<thead><tr><th>Grid1</th><th>Grid2</th></tr></thead>" )
					.hide()
					.insertBefore( 
							jQuery(".grid-table-cdo .view-content table tbody")
							.first()
							); 
			
			jQuery( "<thead><tr><th>Contributor</th></tr></thead>" )
					.hide()
					.insertBefore( 
							jQuery(".grid-table-cdo table.phone tbody")
							);
			
			/* GIGW insert table head on grid view of cdo pages -Ends*/
			
			jQuery("#catalog-filter-container .filtertab").not('.ogpl-processed').addClass('ogpl-processed').click(function() {
				jQuery('#catalog-filter-container .catalog-filter-header').addClass('close-filter');
				jQuery('#catalog-filter-container .catalog-filter-header').removeClass('open-filter');
				jQuery('.filtertitle').remove();
				jQuery('#catalog-filter-content').hide();
				jQuery('#catalog-filter-container .catalog-filter-header').show();
				return false;
			});
			
			//adding value on button for empty value for colorbox module - GIGW
			if(jQuery('#cboxSlideshow').html()==""){jQuery('#cboxSlideshow').html('SlideShow');}
			if(jQuery('#cboxPrevious').html()==""){jQuery('#cboxPrevious').html('Previous');}
			if(jQuery('#cboxNext').html()==""){jQuery('#cboxNext').html('Next');}
			
			
			/* Block Facet Api ul in jScrollpane */
			
			

			/* Facet API collapse Blok */
			jQuery("#catalog-filter-container .block-facetapi h2").not('.ogpl-processed').addClass('ogpl-processed').click(function() {
				$header = $(this);
				//getting the next element
				$content = $header.parent().find('.item-list ul.facetapi-facetapi-checkbox-links');
				//open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
				$content.slideToggle(200);
				$header.parent().find('.list-find').toggle();
			});
			
			/* Block Facet API clicking on h2 show only one content */
			jQuery('.block-facetapi h2').not('.ogpl-collapsed').addClass('ogpl-collapsed').click(function(){
				var clickedclass ;
				clickedclass = jQuery(this).parent().find('.item-list ul').attr('class');
				jQuery('ul.facetapi-facetapi-checkbox-links').each(function(){
					if(jQuery(this).css('display') == 'block' && jQuery(this).attr('class') != clickedclass){
						jQuery(this).css('display','none');
						jQuery(this).parent().parent().parent().find('.list-find').css('display','none');
					}
				});
			});

			/* Add Grid and List class to Catalog Page */
			jQuery('#display_type_changer a.grid').addClass('active');
			jQuery('#content').addClass('grid-view');

			jQuery('#display_type_changer a.grid').not('.ogpl-processed').addClass('ogpl-processed').click(function(event) {
				event.preventDefault();
				
				jQuery.cookie('ogpl_grid_list', 'grid');

				$griddata = jQuery(this).attr('grid-data');

				jQuery('#content').addClass('grid-view');
				jQuery('#content').removeClass('list-view');
				jQuery('#display_type_changer a.grid').addClass('active');
				jQuery('#display_type_changer a.list').removeClass('active');
				
				jQuery('.view.ogpl-grid-list').not('.column-'+$griddata).addClass('column-'+$griddata);
				
				jQuery('.view.ogpl-grid-list').each(function(){
					if($griddata == '3' || $griddata == '2') {
						if (typeof jQuery(this).find('.view-grid-right').attr('class') == 'undefined'
							&& jQuery(this).find('.view-grid-right').attr('class') != 'view-grid-right')
							jQuery('<div class="view-grid-right"></div>').insertAfter(jQuery(this).find('.view-content').first());
					}	
					
					if($griddata == '3'){
						if (typeof jQuery(this).find('.view-grid-mid').attr('class') == 'undefined'
							&& jQuery(this).find('.view-grid-mid').attr('class') != 'view-grid-mid')
							jQuery('<div class="view-grid-mid"></div>').insertAfter(jQuery(this).find('.view-content').first());
					}
					
					if($griddata == '3' || $griddata == '2') {
						if (typeof jQuery(this).find('.view-grid-left').attr('class') == 'undefined'
							&& jQuery(this).find('.view-grid-left').attr('class') != 'view-grid-left')
							jQuery('<div class="view-grid-left"></div>').insertAfter(jQuery(this).find('.view-content').first());
					}
					
					
					if($griddata == '3') {

						jQuery(this).find(".view-content .views-row-1.ogpl-grid-list").appendTo(jQuery(this).find(".view-grid-left"));
						jQuery(this).find(".view-content .views-row-4.ogpl-grid-list").appendTo(jQuery(this).find(".view-grid-left"));
						jQuery(this).find(".view-content .views-row-7.ogpl-grid-list").appendTo(jQuery(this).find(".view-grid-left"));

						jQuery(this).find(".view-content .views-row-2.ogpl-grid-list").appendTo(jQuery(this).find(".view-grid-mid"));
						jQuery(this).find(".view-content .views-row-5.ogpl-grid-list").appendTo(jQuery(this).find(".view-grid-mid"));
						jQuery(this).find(".view-content .views-row-8.ogpl-grid-list").appendTo(jQuery(this).find(".view-grid-mid"));

						jQuery(this).find(".view-content .views-row-3.ogpl-grid-list").appendTo(jQuery(this).find(".view-grid-right"));
						jQuery(this).find(".view-content .views-row-6.ogpl-grid-list").appendTo(jQuery(this).find(".view-grid-right"));
						jQuery(this).find(".view-content .views-row-9.ogpl-grid-list").appendTo(jQuery(this).find(".view-grid-right"));
					}
					else if($griddata == '2') {
						jQuery(this).find(".view-content .views-row-1.ogpl-grid-list").appendTo(jQuery(this).find(".view-grid-left"));
						jQuery(this).find(".view-content .views-row-3.ogpl-grid-list").appendTo(jQuery(this).find(".view-grid-left"));
						jQuery(this).find(".view-content .views-row-5.ogpl-grid-list").appendTo(jQuery(this).find(".view-grid-left"));
						jQuery(this).find(".view-content .views-row-7.ogpl-grid-list").appendTo(jQuery(this).find(".view-grid-left"));
						jQuery(this).find(".view-content .views-row-9.ogpl-grid-list").appendTo(jQuery(this).find(".view-grid-left"));

						jQuery(this).find(".view-content .views-row-2.ogpl-grid-list").appendTo(jQuery(this).find(".view-grid-right"));
						jQuery(this).find(".view-content .views-row-4.ogpl-grid-list").appendTo(jQuery(this).find(".view-grid-right"));
						jQuery(this).find(".view-content .views-row-6.ogpl-grid-list").appendTo(jQuery(this).find(".view-grid-right"));
						jQuery(this).find(".view-content .views-row-8.ogpl-grid-list").appendTo(jQuery(this).find(".view-grid-right"));
						jQuery(this).find(".view-content .views-row-10.ogpl-grid-list").appendTo(jQuery(this).find(".view-grid-right"));
					}
				});
			});
			
			jQuery('#display_type_changer a.list').not('.ogpl-processed').addClass('ogpl-processed').click(function(event) {
				event.preventDefault();
				
				jQuery.cookie('ogpl_grid_list', 'list');

				$listdata = jQuery(this).attr('list-data');

				jQuery('#content').addClass('list-view');
				jQuery('#content').removeClass('grid-view');
				jQuery('#display_type_changer a.grid').removeClass('active');
				jQuery('#display_type_changer a.list').addClass('active');
				
				jQuery('.view.ogpl-grid-list').each(function(){
				
					if($listdata == '3') {
						if (typeof jQuery(this).find('.view-grid-left').attr('class') != 'undefined'
							&& jQuery(this).find('.view-grid-left').attr('class') == 'view-grid-left') {
							jQuery(this).find(".view-grid-left .views-row-1.ogpl-grid-list").appendTo(jQuery(this).find(".view-content").first());
						}
						if (typeof jQuery(this).find('.view-grid-mid').attr('class') != 'undefined'
							&& jQuery(this).find('.view-grid-mid').attr('class') == 'view-grid-mid') {
							jQuery(this).find(".view-grid-mid .views-row-2.ogpl-grid-list").appendTo(jQuery(this).find(".view-content").first());
						}
						if (typeof jQuery(this).find('.view-grid-right').attr('class') != 'undefined'
							&& jQuery(this).find('.view-grid-right').attr('class') == 'view-grid-right') {
							jQuery(this).find(".view-grid-right .views-row-3.ogpl-grid-list").appendTo(jQuery(this).find(".view-content").first());
						}
						if (typeof jQuery(this).find('.view-grid-left').attr('class') != 'undefined'
							&& jQuery(this).find('.view-grid-left').attr('class') == 'view-grid-left') {
							jQuery(this).find(".view-grid-left .views-row-4.ogpl-grid-list").appendTo(jQuery(this).find(".view-content").first());
						}
						if (typeof jQuery(this).find('.view-grid-mid').attr('class') != 'undefined'
							&& jQuery(this).find('.view-grid-mid').attr('class') == 'view-grid-mid') {
							jQuery(this).find(".view-grid-mid .views-row-5.ogpl-grid-list").appendTo(jQuery(this).find(".view-content").first());
						}
						if (typeof jQuery(this).find('.view-grid-right').attr('class') != 'undefined'
							&& jQuery(this).find('.view-grid-right').attr('class') == 'view-grid-right') {
							jQuery(this).find(".view-grid-right .views-row-6.ogpl-grid-list").appendTo(jQuery(this).find(".view-content").first());
						}
						if (typeof jQuery(this).find('.view-grid-left').attr('class') != 'undefined'
							&& jQuery(this).find('.view-grid-left').attr('class') == 'view-grid-left') {
							jQuery(this).find(".view-grid-left .views-row-7.ogpl-grid-list").appendTo(jQuery(this).find(".view-content").first());
						}
						if (typeof jQuery(this).find('.view-grid-mid').attr('class') != 'undefined'
							&& jQuery(this).find('.view-grid-mid').attr('class') == 'view-grid-mid') {
							jQuery(this).find(".view-grid-mid .views-row-8.ogpl-grid-list").appendTo(jQuery(this).find(".view-content").first());
						}
						if (typeof jQuery(this).find('.view-grid-right').attr('class') != 'undefined'
							&& jQuery(this).find('.view-grid-right').attr('class') == 'view-grid-right') {
							jQuery(this).find(".view-grid-right .views-row-9.ogpl-grid-list").appendTo(jQuery(this).find(".view-content").first());
						}
					}
					else if($listdata == '2') {
	
						if (typeof jQuery(this).find('.view-grid-left').attr('class') != 'undefined'
							&& jQuery(this).find('.view-grid-left').attr('class') == 'view-grid-left') {
							jQuery(this).find(".view-grid-left .views-row-1.ogpl-grid-list").appendTo(jQuery(this).find(".view-content").first());
							jQuery(this).find(".view-grid-left .views-row-3.ogpl-grid-list").appendTo(jQuery(this).find(".view-content").first());
							jQuery(this).find(".view-grid-left .views-row-5.ogpl-grid-list").appendTo(jQuery(this).find(".view-content").first());
							jQuery(this).find(".view-grid-left .views-row-7.ogpl-grid-list").appendTo(jQuery(this).find("..view-content").first());
							jQuery(this).find(".view-grid-left .views-row-9.ogpl-grid-list").appendTo(jQuery(this).find(".view-content").first());
						}
	
						if (typeof jQuery(this).find('.view-grid-right').attr('class') != 'undefined'
							&& jQuery(this).find('.view-grid-right').attr('class') == 'view-grid-right') {
							jQuery(this).find(".view-grid-right .views-row-2.ogpl-grid-list").appendTo(jQuery(this).find(".view-content").first());
							jQuery(this).find(".view-grid-right .views-row-4.ogpl-grid-list").appendTo(jQuery(this).find(".view-content").first());
							jQuery(this).find(".view-grid-right .views-row-6.ogpl-grid-list").appendTo(jQuery(this).find(".view-content").first());
							jQuery(this).find(".view-grid-right .views-row-8.ogpl-grid-list").appendTo(jQuery(this).find(".view-content").first());
							jQuery(this).find(".view-grid-right .views-row-10.ogpl-grid-list").appendTo(jQuery(this).find(".view-content").first());
						}
					}
				});

			});
			
			var ogpl_grid_list_cookie = jQuery.cookie('ogpl_grid_list');
			
			switch(ogpl_grid_list_cookie) {
				case 'list':
					jQuery('#display_type_changer a.list').trigger('click');
					break;
				case 'grid':
				default:
					jQuery('#display_type_changer a.grid').trigger('click');
					break;
					
			}
			
			/* Catalog Filter Section Ends  */
			
			var error_html = '<div class="messages error clientside-error" id="clientsidevalidation-user-login-form-errors" style="display: none;"><ul><li><label for="edit-name" generated="true" class="error" style="display: block;">Username or e-mail field is required.</label></li><li><label for="edit-pass" generated="true" class="error" style="display: block;">Password field is required.</label></li></ul></div>';
			jQuery('#clientsidevalidation-user-login-form-errors').remove();
			jQuery('#toboggan-login').prepend(error_html);

			var loginarrow = '<div class="login-arrow"></div>';
			jQuery('#toboggan-login').prepend(loginarrow);

			/* Clent Validation div inside the login popup container - Ends */

			/* FAQ toggle effect - code starts */
			
			jQuery(".faq-answer").hide();
			jQuery(".views-row-first").find(".faq-answer").show();
			jQuery(".views-row-first").addClass("active");

			jQuery(".faq-questions a").focus(
					function() {
						jQuery(".faq-answer").hide();
						jQuery(this).parent().parent().parent().find(
								".faq-answer").show();
						jQuery(".view-view-faq-list .view-content > div")
								.removeClass("active");
						jQuery(this).parent().parent().parent().addClass(
								"active");
					});

			jQuery('.faq-questions a').click(function() {
				jQuery(this).focus();
				return false;
			});
			
			/* FAQ toggle effect - code Ends */
		
			/* Link to us Page - Download Image Toggle - Starts */
			
			var img = jQuery('<img class="dynamic-image">');
			jQuery(".preview-container-text").show();
			jQuery(".dynamic-image-container").hide();
			
			jQuery(".popup-container a")
			.mouseout(function() {
				jQuery(".preview-container .dynamic-image-container").empty();
				jQuery(".preview-container-text").show();
				jQuery(".dynamic-image-container").hide();
			})
			.mouseenter(function() {
				jQuery(".preview-container .dynamic-image-container").hide();
				jQuery(".preview-container-text").hide();
				
				jQuery(".preview-container .dynamic-image-container").empty();
				var a_href = jQuery(this).attr('href');
				img.attr('src', a_href);
				img.appendTo('.preview-container .dynamic-image-container');
				jQuery(".preview-container .dynamic-image-container").show();
			});
			 
			 /* Link to us Page - Download Image Toggle - Ends */
			 
			/*
			 * *** Add even and odd rows for Alternate rows for Usre Profile
			 * Section - Code Starts ***
			 */

			jQuery(".profile2-main section").each(function(i) {
				jQuery(this).addClass((i % 2 ? 'even' : 'odd'));
			});

			/*
			 * *** Add even and odd rows for Alternate rows for Usre Profile
			 * Section - Code Ends ***
			 */

			jQuery("body").click(function(e) {
				if (!jQuery(e.target).hasClass('web_catalog_ico')) {
					jQuery('.web_catalog_ico.qr').removeClass('ico-open');
					jQuery('.web_catalog_ico.qr').addClass('ico-close');
					jQuery('.web_catalog_ico.qr').parent().find('.web_catalog_qr_wrap').hide();
				}
			});
			
			jQuery(".web_catalog_ico.print").not('.processed').addClass('processed').click(function(){
			  		window.print();
			});
			
			jQuery('#search-js-trigger').click(function() {
				if (jQuery(this).hasClass('active')) {
					jQuery('#search-js-triggered-box').stop().animate({
						'width' : 0,
						'marginLeft' : 950
					}, 200);
					jQuery(this).removeClass('active');
				} else {
					jQuery('#search-js-triggered-box').stop().animate({
						'width' : 950,
						'marginLeft' : 0
					}, 200);
					jQuery(this).addClass('active');
				}
				return false;
			});
			
			/* Skip to Main content Starts */
			
			 if(!jQuery('.not-front #skip-link a.skip-content').hasClass('ogpl-processed')) {
				jQuery('.not-front #skip-link a.skip-content').click(function () {
					jQuery('html, body').animate({ scrollTop: 0 }, 'slow');
			    });
			 jQuery('.not-front #skip-link a.skip-content').addClass('ogpl-processed');
		 	} 
			
			 if(!jQuery('.front #skip-link a.skip-content').hasClass('ogpl-processed')) {
				jQuery('.front #skip-link a.skip-content').click(function () {
					jQuery('html, body').animate({ scrollTop: 300 }, 'slow');
			    });
			 jQuery('.front #skip-link a.skip-content').addClass('ogpl-processed');
			 }
			
			
			/* Skip to Main content Ends */
			
			jQuery('#views-exposed-form-catalog-page-1 #edit-keys-wrapper .form-item').prepend(jQuery("#views-exposed-form-catalog-page-1 #edit-keys-wrapper > label"));
			
			if(typeof jQuery('#views-exposed-form-catalog-page-1 #edit-keys-wrapper').attr('id') != 'undefined') {
				jQuery('#views-exposed-form-catalog-page-1 #edit-keys-wrapper > label').inFieldLabels();
			}
			
			if(typeof jQuery('#feedback-node-form').attr('id') != 'undefined') {
				jQuery('#feedback-node-form .form-wrapper label').inFieldLabels();
			}
			
			
			
			/* ********* Page Style Toggele Code Starts ********* */

			var themecookie = jQuery.cookie('mycookie');

			switch (themecookie) {
			case 'color-white-to-black':
				jQuery("body").removeClass('color-standard').addClass("color-white-to-black");
				jQuery('#pagestyle').css("marginLeft", '-30px');
				break;
			default:
				jQuery("body").removeClass('color-white-to-black').addClass("color-standard");
				jQuery('#pagestyle').css("marginLeft", '8px');
				break;
			}

			jQuery(".cp_white_to_black a").click(function() {
				jQuery("body").removeClass('color-standard').addClass("color-white-to-black");
				jQuery.cookie('mycookie', 'color-white-to-black');
				return false;
			});
			
			jQuery(".cp_standard a").click(function() {
				jQuery("body").removeClass('color-white-to-black').addClass("color-standard");
				jQuery.cookie('mycookie', 'color-standard');
				return false;
			});
			
			if(!jQuery("#pagestyle").hasClass('ogpl-processed')) {
				jQuery('#pagestyle a').click(function() {
					if (jQuery("#pagestyle").css("marginLeft") == '8px') {
						jQuery('#pagestyle').stop().animate({
							marginLeft : '-30px'
						}, 0);
					} else {
						jQuery('#pagestyle').stop().animate({
							marginLeft : '8px'
						}, 0);
					}
				});
				
				jQuery("#pagestyle").addClass('ogpl-processed');
			}
			
			/* ********* Page Style Toggele Code Ends ********* */

			/*
			 * Data Controller Grid View - Contact. Coordinator block efect on
			 * Onclick - Code Starts
			 */
		 
			var Coordinato_info__link = function() {
				if (jQuery(this).find('.coordinator').css('display') == 'none') {
					jQuery('.contact').hide();
					jQuery('.coordinator').hide();
					jQuery(this).find('.coordinator').css("display", "block");
				} else {
					jQuery(this).find('.coordinator').css("display", "none");
				}
				return false;
			}
	
			$('.coordinatorinfo:not(.ogpl-processed)').addClass('ogpl-processed')
			.bind('click', Coordinato_info__link);
			
			var Contact_info__link = function() {
					if (jQuery(this).find('.contact').css('display') == 'none') {
						
						jQuery('.contact').hide();
						jQuery('.coordinator').hide();
						jQuery(this).find('.contact').css("display", "block");
					} else {
									
						jQuery(this).find('.contact').css("display", "none");
					}
					return false;
			};
				
			$('.contactinfo:not(.ogpl-processed)').addClass('ogpl-processed')
			.bind('click', Contact_info__link);
					
			/*
			 * Data Controller Grid View - Contact. Coordinator block efect on
			 * Onclick - Code Ends
			 */

			/*
			 * Data Controller List View - Coordinator Container efect on
			 * Onclick - Code STarts
			 */
			
				jQuery('.coordinator-icon', context).click(function() {
					if (jQuery(this).parent().find('.coordinator-container-list').css('display') == 'none') {
						jQuery('.coordinator-container-list').hide();
						jQuery(this).parent().find('.coordinator-container-list').css("display", "block");
					} else {
						jQuery(this).parent().find('.coordinator-container-list').css("display", "none");
					}
					return false;
				});
			/*
			 * Data Controller List View - Coordinator Container efect on
			 * Onclick - Code Ends
			 */
			
			jQuery(document).mouseup(function(e) {
				var container = jQuery("#toboggan-login");

				if (!container.is(e.target) // if the target of the click isn't
											// the container...
						&& container.has(e.target).length === 0) // ... nor a
																	// descendant
																	// of the
																	// container
				{
					// container.slideUp(100);
					if (jQuery('#toboggan-login').css('display') == 'block') {
						jQuery('#toboggan-login-link').trigger('click');

					}
				}
			});

			var user_info_content_link = function() {
				$(this).parent().find('.comutil-usr-info-content').slideToggle(100);
				$(this).toggleClass( "dropdown" );
				
				/* if ($('.content-list-block-content').css('display') == 'block') {
					$('.content-list-block-content').slideUp(100);
				} */
				
				return false;
			};
			
			$('.profile-img-thumb:not(.ogpl-processed)').addClass('ogpl-processed')
				.bind('click', user_info_content_link);

			/*
			var create_content_link = function() {
				$(this).parent().find('.content-list-block-content').slideToggle(100);
				
				if ($('.comutil-usr-info-content').css('display') == 'block') {
					$('.comutil-usr-info-content').slideUp(100);
				}
				
				return false;
			};
			
			
			$('.create-content-link:not(.ogpl-processed)').addClass('ogpl-processed')
				.bind('click', create_content_link);
				*/
				
			
			$('#toboggan-login-link').click(function() {
				if ($(this).parent().parent()
						.find('#toboggan-login').css('display') == 'block') {
					if ($(this).parent().parent().find('captcha')) {
						$(this).parent()
							.parent()
							.find('#encrypt_submissions_encrypt_msg_user-login-form')
							.css('top', '379px');
					} else {
						$(this).parent()
							.parent()
							.find('#encrypt_submissions_encrypt_msg_user-login-form')
							.css('top', '184px');
					}
				}
			});
			

			$('.resource-toggle.down', context).click(function() {
				$(this).hide();
				$(this).parent().parent().parent().find('.resource-toggle.up').show();
				$(this).parent().parent().parent().find('.collapsible').show();
				$(this).parent().parent().parent().find('.hide-collapsible').hide();
			});

			$('.resource-toggle.up', context).click(function() {
				$(this).hide();
				$(this).parent().parent().parent().find('.resource-toggle.down').show();
				$(this).parent().parent().parent().find('.collapsible').hide();
				$(this).parent().parent().parent().find('.hide-collapsible').show();
			});

			var $cs = $('#views-exposed-form-catalog-page-1,#views-exposed-form-catalog-block-2,#views-exposed-form-recent-suggestion-page-1',context).find('.form-select:not([multiple])').customSelect();

			$('.vote_request_data_api .fivestar-thumb div.fivestar-widget .star a').attr('title', 'Endorse for Data API');

			
			var fivestar_vote_gritter_popup = function(e) {
				jQuery.gritter.removeAll();				
				gritter_notify('Thanks for your response. Voting count will be reflected after 1 Hour','status');
			};
			

			$('.logged-in .fivestar-thumb div.fivestar-widget .star a:not(.ogpl-processed), .logged-in div.fivestar-widget .star a:not(.ogpl-processed)').addClass('ogpl-processed')
					.bind('click', fivestar_vote_gritter_popup);
			
			// $('.not-logged-in .fivestar-thumb div.fivestar-widget .star,
			// .not-logged-in div.fivestar-widget .star').html('Login to Vote');

			var fivestar_gritter_popup = function() {
				jQuery.gritter.removeAll();
				gritter_notify('Please <a href="/user/login" title="Login" target="_parent">Login</a> to Vote','warning');
				return false;
			};
			
			var fivestar_gritter_rating_popup = function() {
				jQuery.gritter.removeAll();	
				gritter_notify('Please <a href="/user/login" title="Login" target="_parent">Login</a> to rate this Resource','warning');
				return false;
			};
			
			var fivestar_gritter_request_api_popup = function() {
				jQuery.gritter.removeAll();
				gritter_notify('Please <a href="/user/login" title="Login" target="_parent">Login</a> to Request API for this Resource','warning');
				return false;
			};
			var myPopUpvalue = false;
			var fivestar_gritter_vrm_endorse_popup = function(e) {
				if (myPopUpvalue)
					{return false;}
				myPopUpvalue = true; 
			    setTimeout(function () { myPopUpvalue = false; }, 7000);
			    e.preventDefault();
				gritter_notify('Please <a href="/user/login" title="Login" target="_parent">Login</a> to like this Suggestion','warning');
				return false;
			};
			
			var subscribe_gritter_popup = function() {
				jQuery.gritter.removeAll();	
				gritter_notify('Please <a href="/user/login" title="Login" target="_parent">Login</a> to Subscribe','warning');
				return false;
			};
			
			$('.not-logged-in .views-field-field-rating-quality .fivestar-widget .star:not(.ogpl-processed)').addClass('ogpl-processed')
				.bind('click', fivestar_gritter_rating_popup);
			
			$('.not-logged-in .views-field-field-rating-accessibility div.fivestar-widget .star:not(.ogpl-processed)').addClass('ogpl-processed')
				.bind('click', fivestar_gritter_rating_popup);
			
			$('.not-logged-in .views-field-field-rating-usability div.fivestar-widget .star:not(.ogpl-processed)').addClass('ogpl-processed')
				.bind('click', fivestar_gritter_rating_popup);
			
			$('.not-logged-in .vote_request_data_api div.fivestar-widget .star:not(.ogpl-processed)').addClass('ogpl-processed')
				.bind('click', fivestar_gritter_request_api_popup);
			
			$('.not-logged-in .views-field-field-vrm-endorse div.fivestar-widget .star:not(.ogpl-processed)').addClass('ogpl-processed')
			.bind('click', fivestar_gritter_vrm_endorse_popup);
			
			$('.not-logged-in .fivestar-thumb div.fivestar-widget .star a, .not-logged-in div.fivestar-widget .star a')
				.unbind('click');
			
			/*
			$('.not-logged-in .catalog-subscribe a').not('.ogpl-processed').addClass('ogpl-processed')
			.bind('click', subscribe_gritter_popup);
			*/
			
			/* For Collapsiblocks */
			
			/* For Right Side Slider End */
			
			if (jQuery(
					".view-featured-app-gallery .views-exposed-widgets #edit-platform")
					.val() != ''
					|| jQuery(
							".view-featured-app-gallery .views-exposed-widgets #edit-sector")
							.val() != '') {
				jQuery(".view-featured-app-gallery .views-exposed-widget")
						.show();
				jQuery(".view-featured-app-gallery #edit-reset").show();
				jQuery(".view-featured-app-gallery #edit-sector-wrapper")
						.hide();
				jQuery(".view-featured-app-gallery #edit-platform-wrapper")
						.hide();
				jQuery(
						".view-featured-app-gallery #edit-submit-featured-app-gallery")
						.hide();
				var v = jQuery(
						".view-featured-app-gallery .views-exposed-widgets #edit-platform")
						.val();
				if (!v) {
					v = jQuery(
							".view-featured-app-gallery .views-exposed-widgets #edit-sector")
							.val();
				}
				if (typeof v != 'undefined') {
					jQuery(
							".view-featured-app-gallery .views-exposed-widget.views-reset-button")
							.prepend(
									'<span class="filtered-text">'
											+ v.replace(/"/gi, '') + '</span>');
				}
			}
			/*
			$('.view-resource-popup-unpublish  .views-row, .view-resource-detail-popup .views-row').hover(function() {
				if(typeof $(this).find('.views-field-title a.edit-link').attr('class') != 'undefined') {
					$(this).find('.views-field-title .title-content').stop().animate({width: '63%'}, 150, function() {
						$(this).parent().find('a.edit-link, a.clone-link').stop().animate({opacity: 1}, 150);
					});
				}
			}, function() {
				if(typeof $(this).find('.views-field-title a.edit-link').attr('class') != 'undefined') {
					$(this).find('.views-field-title a.edit-link, a.clone-link').stop().animate({opacity: 0}, 150, function() {
						$(this).parent().find('.title-content').stop().animate({width: '100%'}, 150);
					});
				}
			});
			*/
		}
	};

	Drupal.behaviors.ogplEmbed = {
		attach : function(context, settings) {
			var height = $('.popup #web_catalog_title').height();

			if (typeof height != 'undefined') {
				$('.popup #web_catalog_body').css('padding-top', height + 20);
			}

			var em_height = $('.embed #web_catalog_title').height();

			if (typeof em_height != 'undefined') {
				$('.embed #web_catalog_body')
						.css('padding-top', em_height + 20);
			}

			if (typeof embed_code != 'undefined') {
				Drupal.behaviors.ogplEmbed.updateCode();
			}

			$('.web_catalog_fixed_size').bind(
					'click',
					function() {
						$('.web_catalog_fixed_size').css('background-color',
								'#ffffff');
						$(this).css('background-color', '#000000');

						var size = $(this).attr('size');
						switch (size) {
						case '950x808':
							embed_width = 950;
							embed_height = 808;
							break;
						case '760x646':
							embed_width = 760;
							embed_height = 646;
							break;
						case '500x425':
							embed_width = 500;
							embed_height = 425;
							break;
						}
						Drupal.behaviors.ogplEmbed.updateCode();
					});

			$('#web_catalog_width').keyup(
					function() {
						if (!isNaN($(this).val())) {
							embed_width = $(this).val();
							Drupal.behaviors.ogplEmbed.updateCode();
						}
						$('.web_catalog_fixed_size').css('background-color',
								'#ffffff');
					});

			$('#web_catalog_height').keyup(
					function() {
						if (!isNaN($(this).val())) {
							embed_height = $(this).val();
							Drupal.behaviors.ogplEmbed.updateCode();
						}
						$('.web_catalog_fixed_size').css('background-color',
								'#ffffff');
					});
		},
		updateCode : function() {
			if (typeof embed_code != 'undefined') {
				var html1 = embed_code.replace("{embed_width}", embed_width
						+ 'px');
				var html = html1.replace("{embed_height}", embed_height + 'px');
				$('#web_catalog_embed_code').val(html);
				$('#web_catalog_width').val(embed_width);
				$('#web_catalog_height').val(embed_height);
			}
		}
	};
	
	/* Share Container Hover and Focus Effect */
	
	Drupal.behaviors.ogplShareHover = {	
		attach : function(context, settings) {
		jQuery('.sharecontr:not(.ogpl-processed)').addClass('ogpl-processed').each(function() {
			jQuery(".sharecontr, .share-container-content").hover(function () {
		    	jQuery(this).find(".share-container-content").animate({
		            opacity: "1"
		        }, {
		            queue: false
		        });
		    }, function () {
		    	jQuery(this).find(".share-container-content").animate({
		            opacity: "0"
		        }, {
		            queue: false
		        });
		    });
		
		    jQuery(".share-container-content").focus(function () {
		    	jQuery(this).find(".share-container-content").animate({
		            opacity: "1"
		        }, {
		            queue: false
		        });
		    });
		    jQuery(".sharecontr, .share-container-content").blur(function () {
		    	jQuery(this).find(".share-container-content").animate({
		            opacity: "0"
		        }, {
		            queue: false
		        });
		    });
		    jQuery(".sharecontr a.share").click(function( event ) {
		    	  event.preventDefault();
		    	});
		    
		});
		
	
	}
 };
	
	Drupal.behaviors.ogplMoreLess = {
		attach : function(context, settings) {
		
			var ellipsestext = "...";
			var moretext = " <&nbsp;Show&nbsp;more&nbsp;>";
			var lesstext = " <&nbsp;Show&nbsp;less&nbsp;>";

			$('.ogpl-more:not(.ogpl-processed)').addClass('ogpl-processed').each(function() {
				var _content = $(this).html();
				var content = _content.split(',').join(', ');
				
				var reg = /<span[^<]* class=\"[^"]+[^>]*>[\*s\S]+<\/span>/g;
				var textRuns = content.split(reg);
				var arr = [];
				var span_len = 0;
				for(var i = 0; i < textRuns.length; i++) {
				  var lenarr = [];
				  $(this).find('.highlight').each(function() { 
				    lenarr.push($(this).text().length);
				  });
				  var _span_len=0;
				  if (i < lenarr.length) {
				    span_len += lenarr[i]+31;
					_span_len = lenarr[i]+31;
				  } 
				  arr.push(textRuns[i].length+_span_len);
				  lenarr = [];
				}
				
				var x = 170+span_len,
				index,
				sum = 0,span_len=0;
				arr.some(function (a, i) {
				index = i;
				if (sum + a > x) {
				  return true;
				}
				sum += a;
				});
                var def_length = 220;
				if ($(this).hasClass("length_check")) {
				  def_length = 140;
				} else if ($(this).hasClass("lengthcheck")) {
				  def_length = 40;
				}
				var showChar =  (sum > 0 && arr.length > 2) ? sum : ((sum > 140 && arr.length <= 2) ? sum :def_length);

				arr = [];
			

				if(content.length > showChar) {

					var c = content.substr(0, showChar);
					var h = content.substr(showChar, content.length - showChar);
					var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="#" class="ogpl-morelink">' + moretext + '</a></span>';

					$(this).html(html);
				}

			});

			$(".ogpl-morelink:not(.ogpl-processed)").addClass('ogpl-processed').click(function(){
				if($(this).hasClass("less")) {
					$(this).removeClass("less");
					$(this).html(moretext);
				} else {
					$(this).addClass("less");
					$(this).html(lesstext);
				}
				$(this).parent().prev().toggle();
				$(this).prev().toggle();
				return false;
			});
			
			$('#keywordogplmore:not(.ogpl-processed)').addClass('ogpl-processed').each(function() {
			    size_li = $("#keywordogplmore li").size();
			    x=12;
			    
			    if(size_li > x) {
				    $('#keywordogplmore li').hide();
				    $('#keywordogplmore li:lt('+x+')').show();
				    $('#showLess').hide();
			    } else {
					$('#loadMore').hide();
					$('#showLess').hide();
			    }
			    
			    $('#loadMore').click(function () {			    	
			        $('#keywordogplmore li').show();
			        		
			        		
			        $('#showLess').show();
					$('#loadMore').hide();
			    });
			    
			    $('#showLess').click(function () {
			    	$('#keywordogplmore li').not(':lt('+x+')').hide();
			        $('#loadMore').show("");
			        $('#showLess').hide();
			    });
			    
			    $("a#loadMore, a#showLess").click(function( event ) {
			    	  event.preventDefault();
			    	});
			});
		}
	};
	
	Drupal.behaviors.ogplSearchText = {
			attach : function(context, settings) {
				if($('#block-current-search-catalog').attr('id') != 'undefined' 
					&& !$('#block-current-search-catalog').hasClass('ogpl-processed') && window.location.href.indexOf("catalogs") > -1) {
					var form_html = $('.view-id-catalogs .view-filters').html();
					
					if(form_html != null && form_html != '' ) {
						$('.view-id-catalogs .view-filters').hide();
						
						$('#search-result-container .search-result').html(form_html);
						
						jQuery('#views-exposed-form-catalogs-page label').inFieldLabels();
                                                jQuery(".page-catalogs #edit-search-api-views-fulltext").not('.ogpl-processed').addClass('ogpl-processed').keyup(function() {                                                                   jQuery(".page-catalogs #edit-sort-by").val('search_api_relevance');
                                                 });

					}
					
					var html = $(".current-search-item.current-search-item-active.current-search-item-active").html();
					if(html != null && html != '' ) {
						$('#search-result-container .filtered-item').html('');
						//$('#search-result-container .filtered-item').css('margin-top', '-33px');
						$('#search-result-container .filtered-item').append('<div class="search-result-tags"><div class="search-result-tags-label">Searched Item: </div> '  + html + '<span class="catalog-reset-all"><a href="/catalogs" title="Clear All Filters">Clear All Filters</a></span></div>');
						$('#block-current-search-catalog').hide();
						$('#block-current-search-resources-from-webservices').hide();
						$('.catalog-reset-all a').click(function() {
							if(history.pushState) {
    							history.pushState(null, null, $(this).attr('href'));
  							}
						});
					} else {
						$('#search-result-container .filtered-item').html('');
					}
					
					if($('#edit-query-wrapper .in-field-labels-processed').css('display') == 'none'  && $('#edit-query').val() == '') {
						$('#edit-query-wrapper .in-field-labels-processed').css('display', 'block');
					}
					
					$('#block-current-search-catalog:not(.ogpl-processed)').addClass('ogpl-processed');
					$('#block-current-search-resources-from-webservices:not(.ogpl-processed)').addClass('ogpl-processed');
				} else if($('#block-current-search-resources-from-webservices').attr('id') != 'undefined' 
					&& !$('#block-current-search-resources-from-webservices').hasClass('ogpl-processed') && window.location.href.indexOf("resources-from-webservices") > -1) {
					
				
					var html = $(".current-search-item.current-search-item-active").html();
					if(html != null && html != '' ) {
						$('#search-result-container-webservices .filtered-item-webservices').html('');
						$('#search-result-container-webservices .filtered-item-webservices').append('<div class="search-result-tags"><div class="search-result-tags-label">Searched Item: </div> '  + html + '<span class="catalog-reset-all"><a href="/resources-from-webservices" title="Clear All Filters">Clear All Filters</a></span></div>');
						$('#block-current-search-resources-from-webservices').hide();
						$('.catalog-reset-all a').click(function() {
							if(history.pushState) {
    							history.pushState(null, null, $(this).attr('href'));
  							}
						});
					} else {
						$('#search-result-container-webservices .filtered-item-webservices').html('');
					}
					
					if($('#edit-query-wrapper .in-field-labels-processed').css('display') == 'none'  && $('#edit-query').val() == '') {
						$('#edit-query-wrapper .in-field-labels-processed').css('display', 'block');
					}
					
					$('#block-current-search-resources-from-webservices:not(.ogpl-processed)').addClass('ogpl-processed');
				}/*else {
					$('#search-result-container .filtered-item').html('');
				}*/
			}
	    };

	    Drupal.behaviors.ogplCapitalize = {
			attach : function(context, settings) {
				 $('.ogpl-capitalize:not(.ogpl-processed)').addClass('ogpl-processed').each(function() {
					 var exlude_list = ['about', 'above', 'across', 'after', 'against', 
					                    'along', 'among', 'around', 'at', 'before', 
					                    'behind', 'below', 'beneath', 'beside', 
					                    'between', 'by', 'down', 'during', 'except', 
					                    'for', 'from', 'in', 'inside', 'into', 'like', 
					                    'near', 'of', 'off', 'on', 'onto', 'outside', 
					                    'over', 'past', 'since', 'through', 'to', 
					                    'toward', 'under', 'underneath', 'until', 
					                    'up', 'upon', 'with', 'within', 'without', 'and'];
					 
					 var title = $(this).find('a').html();
					 var new_title = '';
					 if(title != '') {
						 var res = title.split(" ");
						 var i = 1;
						 for (x in res) {
							 if(i==1) {
								 res[x] = res[x].charAt(0).toUpperCase() + res[x].slice(1);
							 }else if(res[x] != '' && res[x].trim() != '' && exlude_list.indexOf(res[x]) == -1) {
								 res[x] = res[x].charAt(0).toUpperCase() + res[x].slice(1);
							 }
							 
							 new_title += res[x] + ' ';
							 i++;
						 }
						 
						 if(new_title != '') {
							 $(this).find('a').html(new_title);
						 }
					 }
				 });
			}
	    }
	    Drupal.behaviors.ogdpCustCatalogAPI = {
			attach : function(context, settings) {
				
				jQuery('.ogdp-cust-catalog-api:not(.ogpl-processed)').addClass('ogpl-processed').each(function() {
					var uuid = $(this).attr('nodeuuid');
					
					if(typeof uuid != 'undefined') {
						jQuery.ajax({
					        url: 'https://api.data.gov.in/catalog/' + uuid +'?format=json&limit=0',
					        cache: false
					    }).done(function( data ) {
					    	if(typeof data.status != 'undefined'
					    		&& typeof data.active != 'undefined'
					    		&& data.status == 'ok'
					    		&& data.active == 1) {
					    		var target =  '#ogdp-cust-catalog-api-' + data.index_name;
					    		var data_url = "/node/" + uuid + "/api";
					    		var html = '<span class="label">Catalog API:</span>'+
						    		'<span class="content">'+
						    		' <a href="'+data_url+'">View API</a></span>';
					    		jQuery(target).html(html);
					    		
					    		jQuery(target).show();
					    	}
					    });
					}
				});
			}
	    }
	    
	/* Mega Menu Selector Toggle */
	    jQuery("#mega-menu-selector")
	    	.attr("title", "Open Menu")
	    	.text("Open Menu");
	jQuery("#mega-menu-selector").click(function(){
		
		jQuery("#mega-container").slideToggle( "fast", function() {
			if(jQuery("#mega-container").css('display') === 'block'  ) {
				jQuery("#mega-menu-selector").removeClass('mega-menu-close');
				jQuery("#mega-menu-selector").addClass('mega-menu-open').attr("title", "Close Menu").text("Close Menu");;
			} else {
				jQuery("#mega-menu-selector").removeClass('mega-menu-open');
				jQuery("#mega-menu-selector").addClass('mega-menu-close').attr("title", "Open Menu").text("Open Menu");;
			}
		});
	});
	
	
	jQuery("#skip-link a.skip-navig").click(function(){
		
		jQuery("#mega-container").slideToggle( "fast", function() {
			if(jQuery("#mega-container").css('display') === 'block'  ) {
				jQuery("#mega-menu-selector").removeClass('mega-menu-close');
				jQuery("#mega-menu-selector").addClass('mega-menu-open').attr("title", "Close Menu");
			} else {
				jQuery("#mega-menu-selector").removeClass('mega-menu-open');
				jQuery("#mega-menu-selector").addClass('mega-menu-close').attr("title", "Open Menu");
			}
		});
	});
	
	/* Show other states */
	
	jQuery(".DataGov-states").click(function(){
		
		jQuery(".DataGov-states-inner").slideToggle( "fast", function() {
			if(jQuery(".DataGov-states-inner").css('display') === 'block') {
				jQuery(".DataGov-states").addClass('DataGov-states-open');
			} else {
				jQuery(".DataGov-states").removeClass('DataGov-states-open');
			}
		});
	});
	
	/* Profile Image After Logged In has been set has hidden */
	
	/* 
	 jQuery(".profile-image").attr("title", "Open Menu");
	    jQuery(".profile-image").click(function(){
			jQuery("#mega-container").slideToggle( "fast", function() {
				if(jQuery("#mega-container").css('display') === 'block'  ) {
					jQuery(".profile-image").removeClass('mega-menu-close');
					jQuery(".profile-image").addClass('mega-menu-open').attr("title", "Close Menu");
					jQuery("#mega-menu-selector-logged-in").show();
					jQuery(".profile-image .user_62x62").css("display","none");
				} else {
					jQuery(".profile-image .mega-menu-open img").css("display","none");
					jQuery(".profile-image .user_62x62").css("display","block");
					jQuery("#mega-menu-selector-logged-in").hide();
					jQuery(".profile-image").removeClass('mega-menu-open');
					jQuery(".profile-image").addClass('mega-menu-close').attr("title", "Open Menu");
				}
				
			});
		});	
	    */
	    
	    jQuery('#block-dms-customizations-suggest-dataset .form-submit').click(function() {
			$( "#block-dms-customizations-suggest-dataset .form-actions, #block-dms-customizations-suggest-dataset .form-item" ).animate({
				marginBottom: "0.3em",
				marginTop: "0.3em"
			}, 500 );
		});
	    
	    // Remove role=Navigation from Section blocks Assistive Links As per GIGW.//
	    jQuery("section").removeAttr("role","navigation");
	    
	    //gigw catalog page label add//
	    jQuery("<label for='edit-sort-by' >Short by</label>").insertBefore(".page-catalogs #edit-sort-by").hide();
	    jQuery("<label for='edit-sort-order' >Short order</label>").insertBefore(".page-catalogs #edit-sort-order").hide();
	    jQuery("<label for='edit-items-per-page' >Item per page</label>").insertBefore(".page-catalogs #edit-items-per-page").hide();
	    
	    //gigw add alt on feature image banners//
	    jQuery('.views-field-field-banner-images img[alt=""]').each(function()
	    		{
	    		var val = jQuery(this).parent().parent()
	    					.siblings('.featured-app-item-desc')
	    					.find('.views-field-title')
	    					.text();
	    		    
	    		  jQuery(this).attr('alt', val);

	    		});
	    
	    //gigw add label on suggest datasets //
	    jQuery("<label for='edit-sort-by' >Post Date</label>").insertBefore(".page-suggested-datasets-list .views-widget-sort-by .form-select");
	    jQuery("<label for='edit-sort-order' >Sort by</label>").insertBefore(".page-suggested-datasets-list .views-widget-sort-order .form-select");
	    jQuery("<label>Vote Count</label>").insertBefore(".page-suggested-datasets-list .form-type-select.form-item-vote .form-select").hide();
	    
	    //gigw keyboard Close Megamenu//
	    jQuery('.mega-right .menu li:last-child').keydown(function(e) {
	        var code = e.keyCode || e.which;

	        if (code === 9) {  
	        	jQuery('.mega-container').hide();
	        }
	    });
		
	    // gigw keyboard //
		jQuery("#header-container").on('keydown', '#mega-menu-selector', function(e) { 
			  var keyCode = e.keyCode || e.which; 

			  if (keyCode == 9) { 
				jQuery( "#mega-container" ).show().focus();
			  } 
			});
		
		
		jQuery( ".breadcrumb a " ).focusout(function() {
			jQuery( '.region-floating-right h2.recent_suggestion' )
				.find("a")
				.trigger("click");
			});
		

		
		//facebook focus
		
		jQuery(".sharecontr").focusin(function(){
		  jQuery(this)
		  	.find(".share-container-content")
		  	.css("opacity","1");
		});
		jQuery(".sharecontr")
			.focusout(function(){
				jQuery(this)
					.find(".share-container-content")
					.css("opacity","0");
		});
		
		// focus-helpus to server better block
		jQuery("#mega-menu-selector")
			.focusout(function(){
				jQuery('#home-bottom-floating-wrapper')
					.animate({bottom: '-55px'})
					.addClass('tclose')
					.removeClass('topen');;
		});
		jQuery("#home-bottom-floating-help-us")
			.focusin(function(){
				jQuery('#home-bottom-floating-wrapper')
					.animate({bottom: '0px'})
					.addClass('topen')
					.removeClass('tclose');
		});
		jQuery("#home-bottom-floating-help-us")
			.focusout(function(){
				jQuery('#home-bottom-floating-wrapper')
					.animate({bottom: '-55px'})
					.addClass('tclose')
					.removeClass('topen');;
		});

		/*help page -Starts*/
		
		/*Create Dynamic list on Help page -statrs*/
		var myArrayHelp = new Array();
		var listhelp = '';
		jQuery('.helppage h3').each(function( index ) {
			myArrayHelp.push({
			        value: jQuery( this ).text(),
			        id: jQuery( this ).attr('id')
			    });
			});
		
			jQuery.each( myArrayHelp, function( i, v ){
				listhelp += '<li><a title="'+ v.value +'" href="#'+v.id+'"> '+ v.value +'</a></li>';
			});
			jQuery(".helppage .left .float-left" ).append( listhelp );
			/*Create Dynamic list on Help page -Ends*/
			
		/*Smooth scroll -Starts*/

	    jQuery('.helppage a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = jQuery(this.hash);
					target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
					if (target.length) {
					jQuery('html, body').animate({
					scrollTop: target.offset().top - 140
					}, 500, 'swing');
					if(!jQuery(this).hasClass('active')){
						jQuery('.helppage .left a').removeClass('active');
					}
					jQuery(this).addClass('active');
					
					return false;
				}
			}
			
		});	
	   
	    /*help page -Ends*/

	    /* display no Scriprt message*/
	    jQuery('.no-script-default-msz').hide();
		
})(jQuery);

jQuery(document).scroll(function() {
    checkOffset();
});
/*Smooth scroll -Ends*/
function checkOffset() {
	var idcheck = jQuery("ul").is("#float-left");
	if(idcheck){
    if(jQuery('#float-left').offset().top + jQuery('#float-left').height() >= jQuery('#footer-container').offset().top - 100)
        jQuery('#float-left').hide();
    if(jQuery(document).scrollTop() + window.innerHeight < jQuery('#footer-container').offset().top)
        jQuery('#float-left').css({"position": "fixed", "display": "block"}); // restore when you scroll up
    //jQuery('#float-left').text(jQuery(document).scrollTop() + window.innerHeight);
	}
}


function cancelCreateResource() {
	jQuery('#edit-cancel').click();
}

function feedback_form_close() {
	jQuery('#feedback_node_form_wrapper').hide();
	return false;
}

function feedback_form_open() {
	jQuery('#feedback_node_form_wrapper').show();
	return false;
}
/*BSIC PAGE SCROLL JS*/

// handle links with @href started with '#' only
jQuery(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = jQuery(this).attr('href');

    // target element
    var $id = jQuery(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top - 140;

    // animated top scrolling
    jQuery('body, html').animate({scrollTop: pos});
});	 


jQuery(window).resize(function() {
	if (jQuery(window).width() < 768) {
	  Indicator_responsive_small();
	} else {
		Indicator_responsive_big();
	}
});
if (jQuery(window).width() < 768) {
	Indicator_responsive_small();
}else {
		Indicator_responsive_big();
	}
function Indicator_responsive_small() {
        jQuery(".view-id-indicator .item-list:first h3").addClass('active');
		jQuery(".view-id-indicator .item-list ul").hide();
		jQuery(".view-id-indicator .item-list:first ul").show();
		jQuery(".view-id-indicator .item-list h3").not('.ogpl-processed').addClass('ogpl-processed').click(function() {
					if (jQuery(this).hasClass('active')) {
						jQuery(this).next().hide();
						jQuery(this).removeClass('active');
					} else {
					    jQuery('.view-id-indicator .item-list h3').removeClass('active');
					    jQuery(".view-id-indicator .item-list ul").hide();
						jQuery(this).next().show();
						jQuery(this).next().find('ul').show();
						jQuery(this).addClass('active');
					}
					return false;
		});
}
function Indicator_responsive_big() {
	jQuery('.view-id-indicator .item-list h3').removeClass('active');
	jQuery(".view-id-indicator .item-list ul").show();
	jQuery(".view-id-indicator .item-list ul").css("display", "inline-block");
}
