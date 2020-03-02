import "./bulb_section.css";
import React, { Component } from 'react';
import Parallax from 'parallax-js';
import { TimelineMax, TweenMax, RoughEase, Power0, Bounce } from 'gsap';
import ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import ParallaxImage from 'components/parallax_image/parallax_image';
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

class BulbSection extends Component {
    componentDidMount() {
        var bulb_on_tween = TweenMax.to('.show-on-bulb-on', 10, {
            // top: "100%",
            opacity: 1,
            // ease: Bounce.easeOut,
            ease: Power0.easeNone,
            // ease: RoughEase.ease.config({ template:  Power0.easeOut, strength: 1.5, points: 50, taper: "none", randomize: true, clamp: true}),
            // ease: RoughEase.ease.config({ template: Power0.easeOut, strength: 1, points: 20, taper: "none", randomize: true, clamp: true }),
            // ease: CustomEase.create("custom", "M0,0,C0,0,0.171,0.145,0.296,0.326,0.341,0.392,0.454,0.796,0.506,0.858,0.552,0.914,0.596,0.242,0.64,0.198,0.688,0.149,0.691,0.926,0.74,0.964,0.777,0.992,0.794,0.202,0.836,0.224,0.873,0.243,0.845,0.963,0.886,0.974,0.925,0.984,1,1,1,1"),
            // left:"100%",
        });
        var bulb_off_tween = TweenMax.to('#butter-off-img', 5, {
            // top: "100%",
            opacity: 0,
            // left:"100%",
        });
        var bg_off_tween = TweenMax.to('#flashes-bg', 20, {
            // top: "100%",
            opacity: 0,
            // left:"100%",
        });
        let controller = new ScrollMagic.Controller();
        let timeline = new TimelineMax();
        timeline.add(bulb_on_tween, "first");
        timeline.add(bulb_off_tween, "first");
        timeline.add(bg_off_tween, "second");
        let scene = new ScrollMagic.Scene({
            triggerElement: "body",
            duration: "300%",
            triggerHook: 0
        });
        scene.setTween(timeline)
            .addTo(controller)
            // .setPin("#bulb-section")
            // .setPin("#flashes")
            // .setPin("#bulb-off")
            ;
        // const par_emt = document.getElementById("bulb-parallax");
        // var par = new Parallax(par_emt);
        // const par_emt2 = document.getElementById("photo-container");
        // var par2 = new Parallax(par_emt2);
    }

    render() {

        const spdbg = 10;
        const spd1 = 15;
        const spd2 = 20;
        const spd3 = 30;
        const spd4 = 40;
        const spd5 = 50;
        const spd6 = 60;
        return (
            <div>
                <div id="bulb-scroll">
                    <div id="bulb-section">
                        {/* <div id="bulb-container">
                    <div id="bulb-and-message">
                        <div id="bulb-parallax" >
                            <div id="bulb" data-depth={0.5}>
                                <img id="bulb-off" className="bulb-img" src={require("./bulb_off.png")}></img>
                                <img id="bulb-on" className="bulb-img show-on-bulb-on" src={require("./bulb_on.png")}></img>
                            </div>
                        </div>
                        <div id="presentation-message-container">
                            <img id="presentation-message" className="show-on-bulb-on" src={require("./message.png")}></img>
                        </div>
                    </div>
                    <div id="photo-container">
                        <img id="photo-img" data-depth={0.1} className="show-on-bulb-on" src={require("./pensativo.png")}></img>
                        <img id="photo-img" data-depth={0.1} className="show-on-bulb-on" src={require("./pensativo2.png")}></img>
                        <img id="photo-img" data-depth={0.1} className="show-on-bulb-on" src={require("./fotoRealColor.png")}></img>
                        <img id="photo-img" className="show-on-bulb-on" src={require("./Foto.png")}></img>
                    </div>


                </div>
                 */}


                        <ParallaxImage
                            className="flash-img"
                            id="butter-off-img"
                            // trigger_id={this.props.id}
                            max_height_vh={100}
                            // trigger_hook={1}
                            // set_pin={true}
                            // delay={30}
                            speed_perc={spd3}
                            src={require("./Butterflies_BG/Layout_butterflies_bulb_off.png")}
                        />


                        {/* <div id="flashes-bg" className="show-on-bulb-on">
                            <img id="parallax-bg" className="flash-img"
                                src={require("./Butterflies_BG/Layout_butterflies_bg.png")}
                            />
                        </div> */}

                        <div id="flashes" className="show-on-bulb-on">
                            <ParallaxImage
                                className="flash-img"
                                id="butter-bg-img"
                                // trigger_id={this.props.id}
                                max_height_vh={100}
                                // trigger_hook={1}
                                // set_pin={true}
                                // delay={30}
                                speed_perc={spdbg}
                                src={require("./Butterflies_BG/Layout_butterflies_bg.png")}
                            />
                            <ParallaxImage
                                className="flash-img"
                                id="butter-1-img"
                                // trigger_id={this.props.id}
                                max_height_vh={100}
                                // trigger_hook={1}
                                // set_pin={true}
                                // delay={30}
                                speed_perc={spd1}
                                src={require("./Butterflies_BG/Layout_butterflies_1.png")}
                            />
                            <ParallaxImage
                                className="flash-img"
                                id="butter-2-img"
                                // trigger_id={this.props.id}
                                max_height_vh={100}
                                // trigger_hook={1}
                                // set_pin={true}
                                // delay={30}
                                speed_perc={spd2}
                                src={require("./Butterflies_BG/Layout_butterflies_2.png")}
                            />
                            <ParallaxImage
                                className="flash-img"
                                id="butter-3-img"
                                // trigger_id={this.props.id}
                                max_height_vh={100}
                                // trigger_hook={1}
                                // set_pin={true}
                                // delay={30}
                                speed_perc={spd3}
                                src={require("./Butterflies_BG/Layout_butterflies_3.png")}
                            />

                            <ParallaxImage
                                className="flash-img"
                                id="butter-4-img"
                                // trigger_id={this.props.id}
                                max_height_vh={100}
                                // trigger_hook={1}
                                // set_pin={true}
                                // delay={30}
                                speed_perc={spd4}
                                src={require("./Butterflies_BG/Layout_butterflies_4.png")}
                            />
                            <ParallaxImage
                                className="flash-img"
                                id="butter-5-img"
                                // trigger_id={this.props.id}
                                max_height_vh={100}
                                // trigger_hook={1}
                                // set_pin={true}
                                // delay={30}
                                speed_perc={spd5}
                                src={require("./Butterflies_BG/Layout_butterflies_5.png")}
                            />
                            <ParallaxImage
                                className="flash-img"
                                id="butter-6-img"
                                // trigger_id={this.props.id}
                                max_height_vh={100}
                                // trigger_hook={1}
                                // set_pin={true}
                                // delay={30}
                                speed_perc={spd6}
                                src={require("./Butterflies_BG/Layout_butterflies_6.png")}
                            />

                        </div>


                    </div>


                </div>
            </div>
        );
    }
}

export default BulbSection;