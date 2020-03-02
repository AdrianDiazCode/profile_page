import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import TranslatableLabel from '../translatable_label/translatable_label';
import ContactForm from '../contact_form/contact_form';
import Description from '../description/description';
import Services from '../skills/skills';
import { presentation_text } from './content_texts';
import "./content.css";


class Content extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        // console.log(Waypoint);
        // const waypoint = new Waypoint({
        //     element: this.refs.test,
        //     handler: () => {alert();}
        //   });
        // this.refs.st.style.display = "none";
    }

    on_home_visibility(is_visible) {
        var display = "block";
        const nav_emt = document.getElementById('nav-home');
        if (is_visible) {
            display = "none";
            nav_emt.classList.add('active');
        }else{
            nav_emt.classList.remove('active');
        }
        document.getElementById('body-arrow-top').style.display = display;
    }
    on_about_visibility(is_visible) {
        const nav_emt = document.getElementById('nav-about');
        if (is_visible) {
            nav_emt.classList.add('active');
        }else{
            nav_emt.classList.remove('active');
        }
    }
    on_skills_visibility(is_visible) {
        const nav_emt = document.getElementById('nav-skills');
        if (is_visible) {
            nav_emt.classList.add('active');
        }else{
            nav_emt.classList.remove('active');
        }
    }

    on_contact_visibility(is_visible) {
        const nav_emt = document.getElementById('nav-contact');
        var display = "block";
        if (is_visible) {
            display = "none";
            nav_emt.classList.add('active');
        }else{
            nav_emt.classList.remove('active');
        }
        document.getElementById('body-arrow-bottom').style.display = display;
    }

    render() {

        return (
            <div id="content">
                <VisibilitySensor
                    onChange={this.on_home_visibility.bind(this)}
                >
                    <section className="snap-element" id="home">
                        <TranslatableLabel start_delay={2000} is_typed={true} spa={presentation_text.spa} eng={presentation_text.eng} ger={presentation_text.ger}></TranslatableLabel>
                    </section>
                </VisibilitySensor>
                <VisibilitySensor
                    onChange={this.on_about_visibility.bind(this)}
                >
                    <section className="snap-element" id="about">
                        <Description></Description>
                    </section>
                </VisibilitySensor>
                <VisibilitySensor
                    onChange={this.on_skills_visibility.bind(this)}
                >

                    <section className="snap-element track" id="skills">
                        <Services />
                    </section>
                </VisibilitySensor>
                <VisibilitySensor
                    onChange={this.on_contact_visibility.bind(this)}
                >
                    <section className="snap-element" id="contact">
                        <ContactForm></ContactForm>
                    </section>
                </VisibilitySensor>
            </div>

        );
    }
}

export default Content;