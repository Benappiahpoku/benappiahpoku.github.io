$(document).ready(function() {
   $(".header").height($(window).height());
});

$(".nav-link").click(function(evt) {
    evt.preventDefault();
    $("body,html").animate(
        {
            scrollTop: $("#" + $(this).data("value")).offset().top
        },
        1000
    );
});
