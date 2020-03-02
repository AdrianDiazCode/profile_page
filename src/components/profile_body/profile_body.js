import React, { Component } from 'react';
// import Parallax from 'parallax-js';
import smooth_scroll from "./js/smooth_scroll"
import "./styles/profile_body.css";
import "./styles/profile_header.css";
import BulbSection from "./bulb_section/bulb_section"
import NavBar from "../navbar/navbar"
import Content from '../content/content'
import { ReactComponent as UpArrowIcon } from './imgs/up_arrow.svg';
import { ReactComponent as DownArrowIcon } from './imgs/down_arrow.svg';
const up_arrow = require('./imgs/up_arrow.svg');
const down_arrow = require('./imgs/down_arrow.svg');
function Arrows() {
    return (
        <div className="body-arrows-container">
            <div id="body-arrow-top" className="body-arrow">
                <UpArrowIcon className="arrow-icon"></UpArrowIcon>
            </div>
            <div id="body-arrow-bottom" className="body-arrow">
                <DownArrowIcon className="arrow-icon"></DownArrowIcon>
            </div>
        </div>
    )
}


export default class ProfileBody extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        smooth_scroll();
        document.body.scrollTo(0, 0)
        document.getElementById("body-arrow-top").addEventListener('click', () => {
            window.scrollBy(0, -Math.floor(window.innerHeight/1.3));
        });
        document.getElementById("body-arrow-bottom").addEventListener('click', () => {
            window.scrollBy(0, Math.floor(window.innerHeight/1.3));
            // alert();
        });
    }

    render() {
        return (
            <div id="main-container">
                {/* <Section1 id="first_section"></Section1> */}
                <NavBar />
                <BulbSection></BulbSection>
                <Content></Content>
                <Arrows></Arrows>
            </div>

        )
    }
}
