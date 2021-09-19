$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 5) {
            $(".header").addClass("active");
            $("i.fas.fa-bars").addClass("active");
            $("a.hamburger").addClass("active");
            $("a.connecth").addClass("active");
            $("a.resumeh").addClass("active");
        } else {
           $(".header").removeClass("active");
           $("i.fas.fa-bars").removeClass("active");
           $("a.hamburger").removeClass("active");
           $("a.connecth").removeClass("active");
           $("a.resumeh").removeClass("active");
        }
    });
});
