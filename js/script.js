
$(document) .ready(function(){
    $(".owl-carousel") .owlCarousel({
        items:4,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        loop: true,
        margin:50,
        nav: true,
        navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
    });
});