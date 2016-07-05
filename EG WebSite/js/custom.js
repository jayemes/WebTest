
$(document).ready(function(){
	$(".icon").animate({opacity: 1},1000);
})

var $root = $('html, body');
$('a[href*=#]').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});