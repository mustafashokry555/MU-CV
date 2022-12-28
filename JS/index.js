$(document).ready(function() {
    /* Progress Bar animation */
    $(".progress-bar").animate({
        width: "100%"
    }, 250 );

    setTimeout(function() {
        $(".Loading").fadeOut('slow');
        $('body').css({overflow: 'scroll'});
    },3000);
});

