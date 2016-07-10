$(document).load(function() {
    $("#main-container").css("display", "none");

})

$(document).ready(function() {
    $(".fixed-up").css("display", "none");
    $("#main-container").fadeIn(500);
    $(".icon").animate({ opacity: 1 }, 1000);
});

// Smooth scrolling on links within the same page
var $root = $('html, body');

$('a[href*=#]').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function() {
        window.location.hash = href;
    });
    return false;
});

// Up botton appearing when scrolling down

var fixedUp = $(".fixed-up");

$(document).scroll(function () {
    if (window.pageYOffset > 400) {
        fixedUp.fadeIn(250);
    } else {
        fixedUp.fadeOut(250);
    }
});