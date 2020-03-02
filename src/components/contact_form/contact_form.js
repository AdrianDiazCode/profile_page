import React, { Component } from 'react';
import { connect } from 'react-redux';
import './contact_form.css';
import TranslatableLabel from '../translatable_label/translatable_label';

const placeholders_dict = {
    eng: {
        name: "Your Name *",
        email: "Your Email *",
        message: "Your Message *",
        submit: "Send",
    },
    ger: {
        name: "Dein Name *",
        email: "Deine EMail *",
        message: "Deine Nachricht *",
        submit: "Senden",
    },
    spa: {
        name: "Tu nombre *",
        email: "Tu correo *",
        message: "Tu email *",
        submit: "Enviar",
    },

}


class ContactForm extends Component {
    state = {}
    render() {
        return (
            // <div className="container p-5">
            //     <div className="container p-5 bg-dark">

            <div className="container contact-form">
                <div className="contact-image">
                    <img src={require('./letter.png')} alt="rocket_contact" />
                </div>
                <form method="post">
                    <h3><TranslatableLabel is_typed={true} spa="Déjame un mensaje" eng="Drop me a message" ger="Schreib mir eine Nachricht" /></h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" name="txtName" className="form-control" placeholder={placeholders_dict[this.props.lang].name} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="txtEmail" className="form-control" placeholder={placeholders_dict[this.props.lang].email} />
                            </div>
                            {/* <div className="form-group">
                                        <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" />
                                    </div> */}
                            <div className="form-group">
                                <input type="submit" name="btnSubmit" className="btnContact" value={placeholders_dict[this.props.lang].submit} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea name="txtMsg" className="form-control" placeholder={placeholders_dict[this.props.lang].message} style={{ width: "100%", height: "150px" }}></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="email-address-message">
                        <TranslatableLabel is_typed={true} spa="También me puedesescribir a eidiazcas@gmail.com" eng="You can also email me at eidiazcas@gmail.com" ger="Sie können mir auch eine E-Mail an eidiazcas@gmail.com senden" />
                    </div>
                </form>
            </div>
            //     </div>
            // </div>
        );
    }
}

const mapStateToProps = (state) => {
    const lang = state.globals_reducer.language
    return {
        lang
    }
}

export default connect(mapStateToProps, null)(ContactForm);