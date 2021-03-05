$(document).ready(function(){
    $(this).scrollTop(0);
    });
    $(".home_works").click(function() {
          
        $("body,html").animate({
            scrollTop: $(".work").offset().top
        -125}, 800);
    });

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero"
    }
});

tl.from(".hero", { opacity: 0, duration: .65});
tl.from(".work", { opacity: 0, duration: .65});

