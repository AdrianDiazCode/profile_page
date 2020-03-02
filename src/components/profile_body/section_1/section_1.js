import React, { Component } from 'react';
// import Parallax from 'parallax-js';
// import ScrollMagic from 'scrollmagic';
// import { TimelineMax, TweenMax } from 'gsap';
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
// ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

import "./section_1.css";
import ParallaxImage from 'components/parallax_image/parallax_image';

class Section1 extends Component {

    componentDidMount() {
    }

    render() {

        return (


            <div className="section" id={this.props.id}>

                {/* <div className="image-wrapper" >
                        <div className={imageclass1}>
                            <img className="parallax-image" data-depth="0.01" src={require("./imgs/backend_fl.png")} />
                        </div>
                    </div> */}
                <ParallaxImage
                    id="first-img"
                    trigger_id={this.props.id}
                    max_height_vh={100}
                    speed_perc={0}
                    src={require("./imgs/backend_sl.png")}
                />
                <ParallaxImage
                    id="second-img"
                    trigger_id={this.props.id}
                    max_height_vh={100}
                    speed_perc={20}
                    src={require("./imgs/backend_sl.png")}
                />
            </div>

        );
    }
}

export default Section1;