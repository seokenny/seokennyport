let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero"
    }
});

tl.from(".hero", { y: 100, opacity: 0, duration: .65});
tl.from(".work", { y: 100, opacity: 0, duration: .65});