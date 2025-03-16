gsap.registerPlugin(ScrollTrigger);

// --- SETUP START ---
// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
const locoScroll = new LocomotiveScroll({
el: document.querySelector(".smooth-scroll"),
    smooth: true,
    multiplier: 1
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.defaults({ scroller: ".smooth-scroll" });
// --- SETUP END ---
  

// scroll trigger start

ScrollTrigger.matchMedia({
    // desktop
    "(min-width: 1367px)": function () {
        // first section
        var tl = gsap.timeline({scrollTrigger:{
            trigger: ".second-section",
            start: "0% 100%",
            end: "50% 50%",
            scrub: true,
            // visibility: "visible",
            // markers: true
        }})

        // Animate all circles together
        const circles = ['#circle1', '#circle2', '#circle3', '#circle4', '#circle5', '#circle6', '#circle7'];
        
        // Position circles 1, 3, 6 vertically on the left side
        tl.to('#circle1', {
            top: "150%",
            left: "35%",
            rotate: "180deg",
            scale: 2,
            duration: 1,
            visibility: "visible",
            opacity: 1,
            background: "#FF9999"
        }, 'circles');
        
        tl.to('#circle3', {
            top: "165%",
            left: "25%",
            rotate: "180deg",
            scale: 1.8,
            duration: 1,
            visibility: "visible",
            opacity: 1,
            background: "#D4A5A5"
        }, 'circles');
        
        tl.to('#circle6', {
            top: "177%",
            left: "34%",
            rotate: "180deg",
            scale: 0.8,
            duration: 1,
            visibility: "visible",
            opacity: 1,
            background: "#FFEEAD"
        }, 'circles');

        // Position circle 4 in the middle
        tl.to('#circle4', {
            top: "159%",
            left: "45%",
            rotate: "180deg",
            scale: 0.8,
            duration: 1,
            visibility: "visible",
            opacity: 1,
            background: "#9DE0AD"
        }, 'circles');

        // Position circles 2, 5, 7 vertically on the right side
        tl.to('#circle2', {
            top: "150%",
            left: "63%",
            rotate: "180deg",
            scale: 2,
            duration: 1,
            visibility: "visible",
            opacity: 1,
            background: "#FFEEAD"
        }, 'circles');
        
        tl.to('#circle5', {
            top: "165%",
            left: "72%",
            rotate: "180deg",
            scale: 1.8,
            duration: 1,
            visibility: "visible",
            opacity: 1,
            background: "#45B7D1"
        }, 'circles');
        
        tl.to('#circle7', {
            top: "175%",
            left: "61%",
            rotate: "180deg",
            scale: 0.7,
            duration: 1,
            visibility: "visible",
            opacity: 1,
            background: "#FF9999"
            // transition: "all 2s",
        }, 'circles');

        // second section animation
        var t2 = gsap.timeline({scrollTrigger:{
            trigger: ".third-section",
            start: "0% 100%",
            end: "50% 50%",
            scrub: true
        }})

        const circless = ['#circle1', '#circle2', '#circle3', '#circle4', '#circle5', '#circle6', '#circle7'];
        
        // Position circles 1, 3, 6 vertically on the left side
        t2.to('#circle1', {
            top: "240%",
            left: "4%",
            rotate: "180deg",
            scale: 1.8,
            duration: 1
        }, 'circles');
        
        t2.to('#circle3', {
            top: "270%",
            left: "4%",
            rotate: "180deg",
            scale: 1,
            duration: 1
        }, 'circles');
        
        t2.to('#circle6', {
            top: "300%",
            left: "4%",
            rotate: "180deg",
            scale: 0.8,
            duration: 1
        }, 'circles');

        // Position circle 4 in the middle
        t2.to('#circle4', {
            top: "270%",
            left: "45%",
            rotate: "180deg",
            scale: 1.2,
            duration: 1
        }, 'circles');

        // Position circles 2, 5, 7 vertically on the right side
        t2.to('#circle2', {
            top: "240%",
            left: "90%",
            rotate: "180deg",
            scale: 0.8,
            duration: 1
        }, 'circles');
        
        t2.to('#circle5', {
            top: "270%",
            left: "90%",
            rotate: "180deg",
            scale: 0.8,
            duration: 1
        }, 'circles');
        
        t2.to('#circle7', {
            top: "300%",
            left: "90%",
            rotate: "180deg",
            scale: 0.8,
            duration: 1
        }, 'circles');

        // third section animation
        var t3 = gsap.timeline({scrollTrigger:{
            trigger: ".fourth-section",
            start: "0% 100%",
            end: "50% 50%",
            scrub: true
        }})

        t3.to('#circle1, #circle6', {
            top: "340%",
            left: "4%",
            rotate: "180deg",
            scale: 1.2,
            duration: 1
        }, 'circles3');

        t3.to('#circle3, #circle4, #circle5', {
            top: "340%",
            left: "45%",
            rotate: "180deg",
            scale: 1.2,
            duration: 1
        }, 'circles3');

        t3.to('#circle2, #circle7', {
            top: "340%",
            left: "90%",
            rotate: "180deg",
            scale: 1.2,
            duration: 1
        }, 'circles3');

    }
})
  
// scroll trigger start

// scroll magic - move to next section on mousewheel

// var ctrl = new ScrollMagic.Controller({   
// });

// This each sets the animation
// $('.slide').each(function(index,element) {  
  
//       ////////// scroll up //////////

//       new ScrollMagic.Scene({
//           triggerHook: 0,
//           triggerElement: this,
//           offset:-50 // small offset added to prevent overscrolling accidentally triggering
//       })
//       .on('leave', function () {
//             TweenLite.to(window, .5, {scrollTo:{y:$(window).height() * (index-1), autoKill:false},ease: Linear.easeNone})
//       })
//       .addTo(ctrl);  // scene end

//       //////////scroll down //////////

//        new ScrollMagic.Scene({
//             triggerElement: this,
//             triggerHook: 0,
//             offset:50 // small offset added to prevent overscrolling accidentally triggering
//         })
//         .on('enter', function () {
//              TweenLite.to(window, .5, {scrollTo:{y:$(window).height() * (index+1), autoKill:false},ease: Linear.easeNone});   
//         })
//         .addTo(ctrl); // scene end

// }); 

//slide each

// scroll magic end