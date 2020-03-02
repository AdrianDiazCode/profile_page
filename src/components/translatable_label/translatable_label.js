import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typed from 'typed.js';
import './translatable_label.css';
class TranslatableLabel extends Component {

    constructor(props) {
        super(props);
    }
    
    type_label() {
        const emt  = this.refs.label;
        console.log("removing:", emt.firstChild);
        
        emt.firstChild.remove();
        try {
            this.typed.destroy();
        } catch (error) {
            
        }
        var start_delay =20;
        if(typeof this.props.start_delay !='undefined'){
            start_delay = this.props.start_delay;
        }
        var type_speed = 60;
        if(typeof this.props.type_speed !='undefined'){
            type_speed = this.props.type_speed;
        }
        // .innerHTML = this.label;
        var options = {
            strings: [this.label],
            // showCursor: false,
            loop: false,
            typeSpeed: type_speed,
            startDelay:start_delay
        };
        console.log("options for ", this.label, options);
        const new_emt = document.createElement("span");
        emt.appendChild(new_emt);
        this.typed = new Typed(new_emt, options)
    }

    put_label() {
        
        console.log("after destroying:", this.label);
        if (this.props.is_typed) {
            this.type_label();
            // this.refs.label.innerHTML = this.label;
        } else {
            this.refs.label.firstChild.innerHTML = this.label;
        }
        console.log("after typed:", this.label);
    }

    componentDidMount() {
        this.put_label()
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('updating translatable text to :',this.label);
        
        this.put_label()
    }


    render() {
        this.label = ""
        if (typeof this.props[this.props.lang] != 'undefined') {
            this.label = this.props[this.props.lang]
        }
        // console.log("dummy: ", this.props.dummy);
        // console.log("eng: ", this.props.eng);
        // console.log("label: ", this.label);

        return (
            <div className="translatable-label" >
                <span className="labelref" ref="label">
                    <span >

                    </span>
                </span>
            </div>

        );
    }
}

const map_state_to_props = (state) => {
    const lang = state.globals_reducer.language
    return {
        lang
    }
}

const add_maps = connect(map_state_to_props);
export default add_maps(TranslatableLabel);