$(document).ready(function() {

    var ctnA = $('#ctnA');
    var ctnB = $('#ctnB');
    var ctnC = $('#ctnC');

    $("#btnA").click(function() {
        ctnA.addClass('visible');
        ctnA.removeClass('visible-xs');

        ctnB.addClass('visible-xs');
        ctnB.removeClass('visible')

        ctnC.addClass('visible-xs');
        ctnC.removeClass('visible')
    });

    $("#btnB").click(function() {
        ctnB.addClass('visible');
        ctnB.removeClass('visible-xs');

        ctnA.addClass('visible-xs');
        ctnA.removeClass('visible')

        ctnC.addClass('visible-xs');
        ctnC.removeClass('visible')
    });

    $("#btnC").click(function() {
        ctnC.addClass('visible');
        ctnC.removeClass('visible-xs');

        ctnB.addClass('visible-xs');
        ctnB.removeClass('visible')

        ctnA.addClass('visible-xs');
        ctnA.removeClass('visible')
    });



});

$(document).scroll(function() {
    console.log("scrolled");
    $('#ctnC').get(0).scrollIntoView();
});
