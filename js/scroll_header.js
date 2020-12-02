$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 5) {
            $(".header").addClass("active");
            $("i.fas.fa-bars").addClass("active");
        } else {
           $(".header").removeClass("active");
           $("i.fas.fa-bars").removeClass("active");
        }
    });
});
