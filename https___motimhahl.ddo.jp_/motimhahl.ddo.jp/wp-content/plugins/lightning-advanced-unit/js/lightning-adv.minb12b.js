
;(function($){jQuery(document).ready(function(){});jQuery(window).resize(function(){});jQuery(window).scroll(function(){if(!$('body').hasClass('sidebar-fix')){return;}
var sidebar_position_now=jQuery('.sideSection').offset();if(!sidebar_position_now){return}
sideFix_scroll();});function sideFix_reset(){jQuery('.sideSection').css({"margin-top":""});}
function sideFix_scroll(){var wrap_width=$('body').width();var window_height=document.documentElement.clientHeight;if(wrap_width<992){sideFix_reset()}else{var sidebar_position_now=jQuery('.sideSection').offset();var content_position_now=jQuery('.mainSection').offset();var sidebar_height=jQuery('.sideSection').outerHeight();var content_height=jQuery('.mainSection').outerHeight();var height_difference=content_height-sidebar_height;var sidebar_bottom_position_default=content_position_now['top']+sidebar_height;var content_bottom_position_default=content_position_now['top']+content_height;var sidebar_bottom_position_now=sidebar_position_now['top']+sidebar_height;var content_bottom_position_now=content_position_now['top']+content_height;if(window_height<sidebar_bottom_position_default){var sidebar_over_size=sidebar_bottom_position_default-window_height;var sidebar_over_size_start=sidebar_height-window_height;if(sidebar_height>window_height){var move_position_start=content_position_now['top']+sidebar_over_size_start+30;var move_position_end=height_difference+content_position_now['top']+sidebar_over_size_start+30;}else{var move_position_start=content_position_now['top'];var move_position_end=height_difference+content_position_now['top'];}}else{var move_position_start=content_position_now['top'];var move_position_end=height_difference+content_position_now['top'];}
if(sidebar_height>content_height){return;}
var scrollHeight=window.pageYOffset;if(scrollHeight<move_position_start){sideFix_reset();}else{if(scrollHeight<move_position_end){var yohaku=scrollHeight-move_position_start;jQuery('.sideSection').css({"margin-top":yohaku});}else{var yohaku=content_height-sidebar_height;jQuery('.sideSection').css({"margin-top":yohaku});}}}}})(jQuery);