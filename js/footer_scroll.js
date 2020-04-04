$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 5) {
            $(".footer").addClass("active");
        } else {
           $(".footer").removeClass("active");
        }
    });
});
