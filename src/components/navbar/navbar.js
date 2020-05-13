import React, { Component } from 'react';
import "./navbar.css";
import { connect } from 'react-redux'
// import store from '../../redux/store';
import change_language from '../../redux/actions/change_language';
import TranslatableLabel from '../translatable_label/translatable_label';
import $ from 'jquery';

const eng_img = require('./imgs/eng.png');
const spa_img = require('./imgs/spa.png');
const ger_img = require('./imgs/ger.png');

const imgs_dict = {
    eng: eng_img,
    spa: spa_img,
    ger: ger_img
}

class NavBar extends Component {
    state = {};
    componentDidMount() {

        $(document).ready(function () {
            $(document).click(function (event) {
                var clickover = $(event.target);
                var _opened = $(".navbar-collapse").hasClass("show");
                console.log("opened:",_opened);
                console.log("has_class:", clickover.hasClass("navbar-toggle"));
                
                if (_opened === true && !clickover.hasClass("navbar-toggle")) {
                    // alert();
                    $(".navbar-collapse").removeClass('show');
                }
            });
        });

        const change_language = this.props.change_language;
        const lang_select_emt = document.getElementById('language-select')
        const langs = ['eng', 'spa', 'ger'];
        const me = this;
        langs.forEach(lang => {
            this.refs[lang+"lang"].addEventListener('click', ()=>{
                me.props.change_language(lang);
            });
        });
    }

    render() {
        const current_lang_img = imgs_dict[this.props.lang]
        return (
            <nav className="navbar navbar-expand-md navbar-dark ">
                <a className="navbar-brand" href="#">
                    <div id="title">
                        Adrian Diaz
                    </div>
                    <div id="sub-title">
                        <TranslatableLabel is_typed={true} spa="Desarrollador" eng="Developer" ger="Entwickler"></TranslatableLabel>
                    </div>
                </a>
                
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" ref="selectedlang" id="lang-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img id="current-lang-img" src={current_lang_img}></img>
                            <span className="lang-text">
                                        {this.props.lang.toUpperCase()}
                                </span>
                        </a>
                        <div id="lang-dropdown-container" className="dropdown-menu text-light bg-transparent" aria-labelledby="lang-dropdown">
                            <div id="langs-container">
                                <a className="dropdown-item text-light" ref="englang">
                                    <span>
                                        <img className="lang-img" src={eng_img}></img>
                                    </span>
                                    <span className="lang-text">
                                        English
                                </span>
                                </a>
                                <a className="dropdown-item text-light" ref="spalang">
                                    <span>
                                        <img className="lang-img" src={spa_img}></img>
                                    </span>
                                    <span className="lang-text">
                                        Spanish
                                </span>
                                </a>
                                <a className="dropdown-item text-light" ref="gerlang">
                                    <span>
                                        <img className="lang-img" src={ger_img}></img>
                                    </span>
                                    <span className="lang-text">
                                        German
                                </span>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        {/* <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                         */}
                        <li className="nav-item" id="nav-home">
                            <a className="nav-link" href="#home">
                                <TranslatableLabel is_typed={true} spa="Inicio" eng="Home" ger="Home"></TranslatableLabel>
                            </a>
                        </li>
                        <li className="nav-item" id="nav-about">
                            <a className="nav-link" href="#about">
                                <TranslatableLabel is_typed={true} spa="Info" eng="About" ger="Uber"></TranslatableLabel>
                            </a>
                        </li>
                        <li className="nav-item" id="nav-skills">
                            <a className="nav-link" href="#skills">
                                <TranslatableLabel is_typed={true} spa="Habilidades" eng="Skills" ger="Kompetenzen"></TranslatableLabel>
                            </a>
                        </li>
                        <li className="nav-item" id="nav-experience">
                            <a className="nav-link" href="#experience">
                                <TranslatableLabel is_typed={true} spa="Experiencia" eng="Experience" ger="Erfahrung"></TranslatableLabel>
                            </a>
                        </li>
                        <li className="nav-item" id="nav-contact">
                            <a className="nav-link" href="#contact">
                                <TranslatableLabel is_typed={true} spa="Contacto" eng="Contact" ger="Kontakt"></TranslatableLabel>
                            </a>
                        </li>
                    </ul>

                    <form className="form-inline my-2 my-md-0">
                    </form>
                </div>

            </nav>
        );
    }
}


const map_state_to_props = state => ({
    lang: state.globals_reducer.language
})

const map_dispatch_to_props = dispatch => ({
    change_language: (lang) => {
        dispatch(change_language(lang))
    }
});

const add_maps = connect(map_state_to_props, map_dispatch_to_props);
export default add_maps(NavBar);