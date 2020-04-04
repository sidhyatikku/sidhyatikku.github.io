$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 150) {
            $(".masthead").addClass("active");
        } else {
           $(".masthead").removeClass("active");
        }
    });
});
