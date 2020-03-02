import React, { Component } from 'react';
import Parallax from 'parallax-js';
import { TimelineMax, TweenMax, Linear } from 'gsap';
import ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import "./parallax_image.css"
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

class ParallaxImage extends Component {
    componentDidMount() {
        var doc_height = document.body.clientHeight;
        var emt_height = document.getElementById(this.tween_id).offsetHeight;
        var scroll_height = doc_height;
        var emt = document.getElementById(this.props.id);
        var par = new Parallax(emt);
        var percentage = this.props.speed_perc/5;
        
        var perc_string = scroll_height * (100 - percentage) / 100
        let controller = new ScrollMagic.Controller();
        let timeline = new TimelineMax();
        var delay =0;
        if(this.props.delay){
            delay = this.props.delay;
        }

        var delay_tween = TweenMax.to('#' + this.tween_id, delay, {
        });
        var eltween = TweenMax.to('#' + this.tween_id, 100, {
            top: perc_string,
            ease: Linear.easeNone
        });

        timeline.add(delay_tween);
        timeline.add(eltween);
        var trigger_emt = 'body';
        var trigger_hook = 0;
        if (typeof this.props.trigger_id != 'undefined') {
            trigger_emt = '#' + this.props.trigger_id;
        }
        if (typeof this.props.trigger_hook != 'undefined') {
            trigger_hook = this.props.trigger_hook;
        }

        let scene = new ScrollMagic.Scene({
            triggerElement: trigger_emt,
            duration: doc_height,
            triggerHook: trigger_hook
        });

            if(this.props.set_pin){
                scene.setPin('#' + this.props.id);
            }
        scene.setTween(timeline)
            .addTo(controller);


        console.log("tween id:", '#' + this.tween_id);
        console.log("trigger id:", '#' + this.props.trigger_id);
    }

    render() {
        var emt_height = this.props.max_height_vh * window.innerHeight / 100;
        const style = {
            maxHeight: emt_height
        }
        var depth = this.props.speed_perc / 1000;
        this.tween_id = "tween-" + this.props.id;
        const class_name = "parallax-emt";
        return (
            <div className={this.props.className+" paralax-100"}>
                <div id={this.tween_id} className={class_name +" paralax-100"}>

                    <div id={this.props.id} className="parallax-100">
                        <div data-depth={depth*5} className="parallax-100">
                            <img src={this.props.src} style={style} className="parallax-100-img" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ParallaxImage;