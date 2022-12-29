$(document).ready(function() {
    /* Progress Bar animation */
    $(".progress-bar").animate({
        width: "100%"
    }, 250 );

    setTimeout(function() {
        $(".Loading").fadeOut('slow');
        $('body').css({overflow: 'scroll'});
    },2000);
});


$(".side-nav ul li a").click(function () {

    let navLink = $(this).attr("href");//section id
    let sectionOffset = $(navLink).offset().top ;//section start
    $("html,body").animate({ scrollTop: sectionOffset }, 1000);
  });
