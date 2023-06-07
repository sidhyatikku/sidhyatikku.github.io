$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 5) {
            $(".footer").addClass("active");
            $("i.fab").addClass("active");
            $("i.fas").addClass("active");
        } else {
           $(".footer").removeClass("active");
           $("i.fab").removeClass("active");
           $("i.fas").removeClass("active");
        }
    });
});
