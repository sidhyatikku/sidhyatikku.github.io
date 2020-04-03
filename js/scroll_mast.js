$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 300) {
            $(".masthead").addClass("active");
        } else {
           $(".masthead").removeClass("active");
        }
    });
});
