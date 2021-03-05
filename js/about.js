$(document).ready(function(){
    $(this).scrollTop(0);
    });

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero"
    }
});

tl.from(".hero", { y: 100, opacity: 0, duration: .65});