$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 200) {
            $(".footer").addClass("active");
        } else {
           $(".footer").removeClass("active");
        }
    });
});
