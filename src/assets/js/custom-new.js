// JavaScript Document

	
		$(document).ready(function() {
		$('.tab-pills .tab-pills-row > a').click(function() {
			if (!$(this).hasClass('active')){
				$('.tab-pills .tab-pills-row > a').removeClass('active');
				$(this).addClass('active');
			}
			else {
				$('.tab-pills .tab-pills-row > a').removeClass('active');
			}
        });
		$('.ribbon').click(function() {
        $('.ribbon-indicator').hide();
		});
		$('.ribbon').hover(function() {
        $('.ribbon-indicator').hide();
		});
		$('.ribbon').bind('touchstart', function() {
        $('.ribbon-indicator').hide();
		});
		
		
		$('.profile-selection .radio label input').click(function() {
        $('.select-user').removeClass('selected');
        $(this).parent('label').parent('.radio').parent('.select-user').addClass('selected');
		});
		
		$('.profile-selection .radio label input').click(function(){ 
	    var profileSelect = $(this).parent('label').parent('.radio').parent('.company-user');
	   if (profileSelect.hasClass("selected")) {
            $('.company-user  .form-group .form-control').removeClass('disabled');
        } else {
          $('.company-user  .form-group .form-control').addClass('disabled').val('');
        }
	 });	
		$('.result-collapse').click(function() {
		$(this).toggleClass("active");
		$('.result-hidden').slideToggle(500);
		});
		
		
$('.advance-search').click(function() {
		$(this).toggleClass("active");
		$('#search-by-application .input-group').toggle();
		$('.result-hidden').slideToggle(500);
		$('.advance-search-container').toggle();
		});
		
	 
	
		
		$(".amendment-selection label.radio-inline input").click(function () {
			$('.amendment-selected').hide();
         $(this).parent('label').parent('.amendment-selection').parent('td').parent('tr').next('.amendment-selected').show();
 });
 
 $(".user-toggle").click(function () {
	$('.user-profile-details').hide();
	 $('.user-toggle-hidden').show();
	 
	 });
 $(".user-toggle-hidden").click(function () {
	$('.user-profile-details').show();
	 $(this).hide();
	 
	 });
 $('.back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 400);
    });
 
				$(".back-to-top").on( "click", function() {
				  $("html, body").animate({ scrollTop: 0 }, "slow");
				  return false;
			});


			$(document).scroll(function () {
				var y = $(this).scrollTop();
				if (y > 200) {
					$('.back-to-top').fadeIn();
				} else {
					$('.back-to-top').fadeOut();
				}
			});
 
 
		
$(function() {
  $('.otp-screen').on('keydown', '#opt-input', function(e){-1!==$.inArray(e.keyCode,[46,8,9,27,13,110,190])||/65|67|86|88/.test(e.keyCode)&&(!0===e.ctrlKey||!0===e.metaKey)||35<=e.keyCode&&40>=e.keyCode||(e.shiftKey||48>e.keyCode||57<e.keyCode)&&(96>e.keyCode||105<e.keyCode)&&e.preventDefault()});
})
		
		
/*	if($(window).width() <= 767)
{   

   $('#require-attention, #in-progress').insertAfter('.applications-pills');
   $('#draft-due-for-removal, #all-drafts').insertAfter('.drafts-pills');
   $('#licence-due-for-removal, #licence-active').insertAfter('.licences-pills');
   $('#pending-payments').insertAfter('.payments-pills');
   
   $('.dashboard-tab-pills .tab-pane, .tab-pills .tab-pills-row > a').removeClass('active');
   $('.dashboard-tab-pills .tab-pane').removeClass('in');
   
	
} else {
   return false;
}*/


//Commented for drop down values to wrap after 50 characters
/*var maxLength = 50;
$('option').text(function(i, text) {
    if (text.length > maxLength) {
       return text.substr(0, maxLength) + '...';  
    }
});*/
});

	
 
	
