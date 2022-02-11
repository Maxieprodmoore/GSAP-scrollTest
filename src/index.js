gsap.registerPlugin(MotionPathPlugin);

const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    path: [
            {x:100, y: 40}, 
            {x:450, y: 350},
            {x:200, y: 25},
            {x:700, y: -50},
            {x:1100, y: -200},
            {x:600, y: -500},
            {x: 1400, y: 200},
            {x: window.innerWidth, y: -400}
        ]
};

const tween = gsap.timeline();

tween.to('.paperPlane', 1, {
    motionPath: flightPath,
    ease: "power1.inOut",
});

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration: 3000,
    triggerHook: 0,
})

.setTween(tween)
.addIndicators()
.setPin('.animation') /*Pin to screen while animation plays on screen*/
.addTo(controller);
