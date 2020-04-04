$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 5) {
            $(".header").addClass("active");
        } else {
           $(".header").removeClass("active");
        }
    });
});
