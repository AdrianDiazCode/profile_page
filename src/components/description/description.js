import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import TranslatableLabel from '../translatable_label/translatable_label';
import { description_text } from './description_texts';
import { connect } from 'react-redux';
import change_visibility from '../../redux/actions/change_description_visibility';
import './description.css';
const pensativo_on_img = require('./imgs/pensativo_on.png');
const pensativo_off_img = require('./imgs/pensativo_off.png');

class Description extends Component {
    state = {}

    constructor(props) {
        super(props);
        this.state = {
            description_texts_object: {
                spa: "", eng: "", ger: ""
            }
        }
        this.previous_lang = props.lang;
        this.first_time_render = true;
        console.log(props);
        if (props.is_visible) {
            this.description_texts_object = description_text;
            this.state.description_texts_object = description_text;
        } else {
            this.description_texts_object = {
                spa: "", eng: "", ger: ""
            }
            this.state.description_texts_object = {
                spa: "", eng: "", ger: ""
            }
        }
    }

    handle_visibility_change(is_visible) {
        console.log("is_visible:", is_visible);

        if (is_visible) {
            this.description_texts_object = description_text;
            this.props.show();
            document.getElementById('pensativo-on').classList.add('on');
            // this.setState({
            //     description_texts_object: description_text
            // });
        } else {

            document.getElementById('pensativo-on').classList.remove('on');
        }
    }

    componentDidMount() {

        // console.log("on mount");

    }

    componentDidUpdate(prevProps, prevState) {
        console.log("updating description");

    }

    render() {

        var is_typed = true;
        if (this.props.lang == this.previous_lang) {
            is_typed = false;
            console.log("setting is_typed to false ", this.props.lang, this.previous_lang);
        } else {
            // alert("lang changed");   
            this.previous_lang = this.props.lang;
        }
        return (
            <VisibilitySensor
                onChange={this.handle_visibility_change.bind(this)}
            >
                <div>
                    <div id="description-photo-container" className="show-on-bulb-on">
                        <img className="description-photo" id="pensativo-off" src={pensativo_off_img}></img>
                        <img className="description-photo" id="pensativo-on" src={pensativo_on_img}></img>
                    </div>
                    <h3>
                        <TranslatableLabel is_typed={false} spa="¿Quién Soy?" eng="Who am I?" ger="Wer bin Ich?"></TranslatableLabel>
                    </h3>
                    <div ref="description">
                        <TranslatableLabel
                            type_speed={30}
                            start_delay={1000}
                            is_typed={is_typed}
                            spa={this.description_texts_object.spa}
                            eng={this.description_texts_object.eng}
                            ger={this.description_texts_object.ger}>
                        </TranslatableLabel>
                    </div>
                </div>
            </VisibilitySensor>
        );
    }
}

const mapStateToProps = (state) => ({
    is_visible: state.globals_reducer.is_description_visible,
    lang: state.globals_reducer.language
})

const mapDispatchToProps = (dispatch) => (
    {
        hide: () => {
            alert("visible");
            dispatch(change_visibility(false));
        },
        show: () => { dispatch(change_visibility(true)); }
    });

export default connect(mapStateToProps, mapDispatchToProps)(Description);