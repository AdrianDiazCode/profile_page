import React, { Component } from 'react';
import TranslatableLabel from '../translatable_label/translatable_label';
import VisibilitySensor from 'react-visibility-sensor';
import { connect } from 'react-redux';
import './skills.css';
import { ReactComponent as LeftArrowIcon } from './imgs/left_arrow.svg';
import { ReactComponent as RightArrowIcon } from './imgs/right_arrow.svg';

const django_icon = require('./imgs/django.png');
const laravel_icon = require('./imgs/laravel.svg');
const node_icon = require('./imgs/node.svg');
const postgres_icon = require('./imgs/postgresql.png');
const react_icon = require('./imgs/react.svg');
const redux_icon = require('./imgs/redux.png');
const bootstrap_icon = require('./imgs/bootstrap.png');
const materialui_icon = require('./imgs/materialui.png');
const dthreejs_icon = require('./imgs/d3js.png');
const linux_windows_icon = require('./imgs/linux_windows.png');

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
        this.refs.arrow_left.addEventListener('click', () => {
            this.refs.container.scrollBy(-500, 0);
        });
        this.refs.arrow_right.addEventListener('click', () => {
            this.refs.container.scrollBy(500, 0);
        });
    }
    render() {
        return (
            <div className="skills-section">
                <div className="skills-arrows-container">
                    <div ref="arrow_left" className="skills-arrow-left skills-arrow">
                        <LeftArrowIcon className="arrow-icon"></LeftArrowIcon>
                    </div>
                    <div ref="arrow_right" className="skills-arrow-right skills-arrow">
                        <RightArrowIcon className="arrow-icon"></RightArrowIcon>
                    </div>
                </div>
                <h3 className="skills-section-title">
                    <TranslatableLabel is_typed={true} eng="Some technologies I use" spa="Tecnologías que uso" ger="Technologien, die ich benutze"></TranslatableLabel>

                </h3>
                <div ref="container" className="skills-section-container">
                    <div className="skills-container">
                        <VisibilitySensor
                            onChange={this.on_backend_visibility.bind(this)}
                        >

                            <div className="skill-category">
                                <div className="skill-title">
                                    <div className="skill-title-text">
                                        Backend
                                    </div>
                                </div>
                                <div className="technologies-container">
                                    <div className="tech">
                                        <div className="tech-icon">
                                            <img src={django_icon}></img>
                                        </div>
                                        <div className="tech-name">Django (Python)</div>
                                    </div>
                                    <div className="tech">
                                        <div className="tech-icon">
                                            <img src={laravel_icon}></img>
                                        </div>
                                        <div className="tech-name">Laravel (PHP)</div>
                                    </div>
                                    <div className="tech">
                                        <div className="tech-icon">
                                            <img src={node_icon}></img>
                                        </div>
                                        <div className="tech-name">NodeJs</div>
                                    </div>
                                    <div className="tech">
                                        <div className="tech-icon">
                                            <img src={postgres_icon}></img>
                                        </div>
                                        <div className="tech-name">Postgres, Oracle, MySQL databases</div>
                                    </div>
                                    <div className="tech">
                                        <div className="tech-icon">
                                            <img src={linux_windows_icon}></img>
                                        </div>
                                        <div className="tech-name">Linux/Windows environments</div>
                                    </div>
                                </div>
                            </div>

                        </VisibilitySensor>

                        <VisibilitySensor
                            onChange={this.on_frontend_visibility.bind(this)}
                        >


                            <div className="skill-category">
                                <div className="skill-title">
                                    <div className="skill-title-text">
                                        Frontend
                                    </div>
                                </div>
                                <div className="technologies-container">
                                    <div className="tech">
                                        <div className="tech-icon">
                                            <img src={react_icon}></img>
                                        </div>
                                        <div className="tech-name">React</div>
                                    </div>
                                    <div className="tech">
                                        <div className="tech-icon">
                                            <img src={redux_icon}></img>
                                        </div>
                                        <div className="tech-name">Redux</div>
                                    </div>
                                    <div className="tech">
                                        <div className="tech-icon">
                                            <img src={bootstrap_icon}></img>
                                        </div>
                                        <div className="tech-name">Bootstrap</div>
                                    </div>
                                    <div className="tech">
                                        <div className="tech-icon">
                                            <img src={materialui_icon}></img>
                                        </div>
                                        <div className="tech-name">MaterialUI</div>
                                    </div>
                                    <div className="tech">
                                        <div className="tech-icon">
                                            <img src={dthreejs_icon}></img>
                                        </div>
                                        <div className="tech-name">D3JS</div>
                                    </div>
                                </div>
                            </div>

                        </VisibilitySensor>


                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(Skills);