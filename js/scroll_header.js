$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 2) {
            $(".header").addClass("active");
        } else {
           $(".header").removeClass("active");
        }
    });
});
