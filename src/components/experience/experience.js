import React, { Component } from 'react';
import TranslatableLabel from '../translatable_label/translatable_label';
import { connect } from 'react-redux';
import './experience.css';
import Carousel from 'react-bootstrap/Carousel';
import VChess from './vchess';
import IOT from './IOT';
import Mintransporte from './mintransporte';


class Skills extends Component {
    state = {}

    on_backend_visibility(is_visible) {

    }

    on_frontend_visibility(is_visible) {
        // if (is_visible) {
        //     this.refs.arrow_left.style.display = "block";
        //     this.refs.arrow_right.style.display = "none";
        // } else {
        //     this.refs.arrow_left.style.display = "none";
        //     this.refs.arrow_right.style.display = "block";
        // }
    }


    componentDidMount() {
        // this.refs.arrow_left.addEventListener('click', () => {
        //     this.refs.container.scrollBy(-500, 0);
        // });
        // this.refs.arrow_right.addEventListener('click', () => {
        //     this.refs.container.scrollBy(500, 0);
        // });
    }
    render() {
        return (
            <div className="skills-section">
                <h3 className="skills-section-title">
                    <TranslatableLabel is_typed={true} eng="Some of my projects" spa="Algunos proyectos" ger="Einige meiner Projekte"></TranslatableLabel>
                </h3>
                <div ref="container" className="skills-section-container">
                    <div
                        className="height-100"
                    >
                        <Carousel
                            className="height-100"
                            interval={5000}
                        >
                            <Carousel.Item className="skill-category height-100">
                                <VChess/>
                            </Carousel.Item>
                            <Carousel.Item className="skill-category height-100">
                                <Mintransporte/>
                            </Carousel.Item>
                            <Carousel.Item className="skill-category height-100">
                                <IOT/>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(Skills);