import $ from 'jquery'
import niceScroll from 'jquery.nicescroll'
import './smooth_scroll.css';
var animating_scroll = false;
var previous_direction = 0;


function handle(delta, event) {
    const current_direction = Math.sign(delta)
    // console.log("pd:",previous_direction," cd:",current_direction, ' as:',animating_scroll);
    if(Math.abs( delta) < 0.1 ){
        // console.log("small delta: ",delta);
        return;
    }
    if((previous_direction == current_direction) && (animating_scroll)){
        // console.log("scroll negated");
        return;
    }
    animating_scroll = true;
    previous_direction = current_direction;
    console.log("delta:", delta);
    const divisor = 1
    var time = 1000/divisor;
    var distance = Math.floor( window.innerHeight-1) ;
    activate_snap_scroll(false)
    var emt = $('html, body').stop();
    emt.animate({
        scrollTop: $(window).scrollTop() - (distance * current_direction)
    }, 
    time, 
    'swing', 
    // 'linear', 
    () => {
        animating_scroll = false;
        activate_snap_scroll();
        document.documentElement.style.scrollBehavior = 'smooth';
        // console.log("scrolling ");
        // document.documentElement.dispatchEvent(new CustomEvent('scroll'));
        // window.scrollBy(0, + current_direction * 1);
        // window.scrollBy(0, - current_direction);
        // console.log(delta);

    });
}

function blink(){
    document.body.style.backgroundColor = "red";
    setTimeout(()=>{document.body.style.backgroundColor="black"},5);
}

function wheel(event) {
    // console.log("wheel");
    // blink()
    if (event.preventDefault) event.preventDefault();
    document.documentElement.style.scrollBehavior = 'auto';
    event.returnValue = false;
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;
    else if (event.deltaY) delta = - event.deltaY/12;
    // console.log({event});
    // console.log("wheel-delta:",event.deltaY);
    handle(delta, event);
}

function scroll(event) {
    
}

function activate_snap_scroll(boolval = true) {
    var snap_elements = document.getElementsByClassName('snap-element');
    for (let i = 0; i < snap_elements.length; i++) {
        const element = snap_elements[i];
        if (boolval) element.style.scrollSnapAlign = 'start';
        else element.style.scrollSnapAlign = 'none';
    }
}

var current_scroll_timer = 0;

function smooth_scroll() {
    if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, { passive: false });
    window.addEventListener('wheel', wheel, { passive: false });
    window.addEventListener('scroll', scroll, { passive: false });
    // window.onmousewheel = document.onmousewheel = wheel;
    // $("body").niceScroll({
    //     scrollspeed: 1000,
    // }).scrollstart(function(){
    //     if (current_scroll_timer){
    //         clearTimeout(current_scroll_timer)
    //     }
    //     activate_snap_scroll(false);
    //     current_scroll_timer = setTimeout(function(){
    //         activate_snap_scroll()
    //     }, 1005)
    // });

}

export default smooth_scroll;
