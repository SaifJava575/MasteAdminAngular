// JavaScript Document

$(document)
	.ready(
		function () {

			$('.font-sizing span.font-med').addClass('active');
			$('.font-sizing span').click(function () {
				$('.font-sizing span').removeClass('active');
				$(this).addClass('active');
			});

			$('body .container:contains("$theme.include($content_include)")').each(function () {
				$(this).html($(this).html().split("$theme.include($content_include)").join(""));
			});

			var fontSizeClass = sessionStorage.getItem("FONT_SIZE_CLASS");
			if (fontSizeClass === "fontlarge") {
				$('body').addClass('fontlarge');
				$('body').removeClass('sizesmall');
				sessionStorage.setItem("FONT_SIZE_CLASS", "fontlarge");

				$('.font-sizing span.font-large').addClass('active');
				$('.font-sizing span.font-small').removeClass('active');
				$('.font-sizing span.font-med').removeClass('active');

			} else if (fontSizeClass === "sizesmall") {
				$('body').addClass('sizesmall');
				$('body').removeClass('fontlarge');
				sessionStorage.setItem("FONT_SIZE_CLASS", "sizesmall");

				$('.font-sizing span.font-small').addClass('active');
				$('.font-sizing span.font-large').removeClass('active');
				$('.font-sizing span.font-med').removeClass('active');

			} else {
				$('body').removeClass('sizesmall');
				$('body').removeClass('fontlarge');
				sessionStorage.setItem("FONT_SIZE_CLASS", "medium");

				$('.font-sizing span.font-med').addClass('active');
				$('.font-sizing span.font-large').removeClass('active');
				$('.font-sizing span.font-small').removeClass('active');
			}

			$('#divViewApplicationForm iframe').addClass("iframe-body");

			var iframebody = $('.iframe-body');
			iframebody.load(function () {
				iframebody.contents().find("body").addClass("view-application");

			});

			$('iframe').each(function () {
				function injectCSS() {
					$iframe.contents().find('head').append(
						$('<link/>', { rel: 'stylesheet', href: '/frontier-mobile-theme/css/afterlogin.css', type: 'text/css' })
					);
				}

				var $iframe = $(this);
				$iframe.on('load', injectCSS);
				injectCSS();
			});

			$('.close-collasable').click(function () {
				$('.navbar-collapse.collasable').removeClass('active');

			});

			$('.navbar-toggle').click(function () {
				$('.navbar-collapse.collasable').toggleClass('active');

			});

			$('#myCarousel').carousel({
				interval: 5000,
				pause: "false"
			});

			$('#playButton').click(function () {
				$('#myCarousel').carousel('cycle');
			});
			$('#pauseButton').click(function () {
				$('#myCarousel').carousel('pause');
			});
			$('#carouselButtons button').click(function () {
				$('#carouselButtons button').removeClass('active');
				$(this).addClass('active');
			});
			$('.login .login-drop').click(function () {
				$('.login').addClass('active');
				$('.login-overlay').addClass('active');
			});
			$('.login-overlay, .close-login').click(function () {
				$('.login').removeClass('active');
				$('.login-overlay').removeClass('active');
				$('.foreigners-login').fadeOut();
			});
			$('.via-licence-id').click(function () {
				$('.foreigners-login').slideToggle();
			});
			/*$('.close-notification').click(function() {
				popupClosedFunction();
				$('.notification-banner').hide('slow');
			});*/
			$('.mobile-search').click(function () {
				$('.header-search').toggle();
				$(this).children('i').toggleClass('fa-times');
			});

			$('.close-search').click(function () {
				$('.header-search').hide();
				$('.mobile-search').children('i').removeClass('fa-times');
			});


			$('.font-med').click(function () {
				$('body').removeClass('sizesmall');
				$('body').removeClass('fontlarge');
				sessionStorage.setItem('FONT_SIZE_CLASS', 'medium')

			});

			$('.font-small').click(function () {
				$('body').addClass('sizesmall');
				sessionStorage.setItem("FONT_SIZE_CLASS", "sizesmall");
				$('body').removeClass('fontlarge');

			});

			$('.font-large').click(function () {
				$('body').addClass('fontlarge');
				sessionStorage.setItem("FONT_SIZE_CLASS", "fontlarge");
				$('body').removeClass('sizesmall');

			});

			$('textarea').parent('.controls').parent('.control-group').children('.control-label').addClass('label-fixed');
			$('textarea').parent('.controls').parent('.control-group').children('.controls').addClass('control-fixed');
			$('.btn-mini').parent('td').addClass('test');

			$(window).scroll(function () {
				var scroll = $(window).scrollTop();

				if (scroll >= 157) {
					$(".accordionroot").addClass("below-nav");
				} else {
					$(".accordionroot").removeClass("below-nav");
				}
			});

			/*$('.form-control.required').parent('div').parent('.required').addClass('has_error');*/

			/*$(".search-result-details .selection").click(function() {
				var $this = $(this);

				$this.toggleClass("active");
				if ($this.hasClass("active")) {
					$this.html("Selected");
				} else {
					$this.html("Add to Selection");
				}
			});*/

			/*$(".search-result-details .selection").click(
					function() {
						var $this = $(this);
						if ($('.search-result-details .selection')
								.hasClass("active")) {
							$(".licence-cart").addClass("active");

						} else {
							$(".licence-cart").removeClass("active");
							$('.licence-cart-container').slideUp();
						}
					});*/

			/*$('.search-result-details .selection').click(function() {
				var $this = $(this);
				if ($this.hasClass("active")) {
					$('.licence-cart span').html(function(i, val) {
						return val * 1 + 1
					});
				} else {
					$('.licence-cart span').html(function(i, val) {
						return val * 1 - 1
					});
				}

			});*/

			$('.remove-items').click(function () {
				$(this).parent('li').hide();

			});

			/*$('.licence-cart').click(function() {
				var $that = $(this);
				if ($that.hasClass("active")) {
					$('.licence-cart-container').slideToggle();
				} else {
					$('.licence-cart-container').slideUp();
				}

			});*/

			$('.show-hidden').click(function () {
				//$('.hidden-in-selection').slideToggle();
				//$(this).children('.fa').toggleClass('fa-angle-down');

			});

			$('[data-toggle="tooltip"]').tooltip();

			$('.help-hide-show').click(function () {
				$(this).toggleClass('active');
				$('.help-points').toggleClass('active');
				$('.help-details').toggleClass('active');

			});

			$('.help-hide-show-mobile').click(function () {
				$(this).toggleClass('active');
				$('.help-container').slideToggle();

			});

			$(".header-search .dropdown-menu li a")
				.click(
					function () {
						$(this)
							.parents(".dropdown")
							.find('.select-search')
							.html(
								$(this).text()
								+ ' <span class="caret"></span>');
						$(this).parents(".dropdown").find(
							'.select-search').val(
								$(this).data('value'));
					});

			function toggleIcon(e) {
				$(e.target).prev('.panel-heading').find(".more-less")
					.toggleClass(
						'fa fa-plus-circle fa fa-minus-circle');

			}
			$('.panel-group').on('hidden.bs.collapse', toggleIcon);
			$('.panel-group').on('shown.bs.collapse', toggleIcon);

		});

//Search Functionality code
var searchType = "internal";

function internalsearch() {
	searchType = "internal";
}

function externalsearch() {
	searchType = "external";
}

function search() {
	var searchedKeyword = document.getElementById("keyword").value;
	if (searchedKeyword != "" && searchedKeyword != undefined) {
		if (searchType === "external") {
			var externalSiteSearchURL = "http://www.google.com/search?q=site:*.gov.sg " + searchedKeyword;
			window.open(externalSiteSearchURL);
		}
		else {
			var internalSiteSearchURL = "http://www.google.com/search?q=site:licence1.business.gov.sg " + searchedKeyword;
			window.open(internalSiteSearchURL);
		}
	}
}

// Old Theme Code

$(function () {
	$(".lowercase").change(function () {
		this.value = this.value.toLowerCase();
	});
});

$(function () {
	$(".uppercase").change(function () {
		this.value = this.value.toUpperCase();
	});
});

if (!window.console) {
	var console = {
		log: function () {
		},
		warn: function () {
		},
		error: function () {
		},
		time: function () {
		},
		timeEnd: function () {
		}
	}
}

$.ajaxSetup({
	cache: false
});


if ($('.help-details').children().children().children().children().children().children().children().children().hasClass("search-results")) {
	$('.help-points').find('.search-help').addClass("hide-search")
}
