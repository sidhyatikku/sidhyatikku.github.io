$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 2) {
            $(".footer").addClass("active");
        } else {
           $(".footer").removeClass("active");
        }
    });
});
