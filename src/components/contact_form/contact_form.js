import React, { Component } from 'react';
import { connect } from 'react-redux';
import './contact_form.css';
import TranslatableLabel from '../translatable_label/translatable_label';
import $ from 'jquery';
import Swal from 'sweetalert2'
// const axios = require('axios');

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

    componentDidMount() {

        const name_input = this.refs.name;
        const email_input = this.refs.email;
        const message_input = this.refs.message;
        // let axiosConfig = {
        //     headers: {
        //         'Content-Type': 'application/json;charset=UTF-8',
        //         "Access-Control-Allow-Origin": "*",
        //     }
        //   };
        this.refs.sendbtn.addEventListener('click', function () {
            const name = name_input.value;
            const email = email_input.value;
            const message = message_input.value;
            const url = 'https://adrianmailsender.000webhostapp.com';
            const data = {
                name,
                email,
                message
            };
            console.log("sending:", data);
            if (name != "" && email != "" && message != "") {
                $.ajax({
                    type: "POST",
                    url: url,
                    data: data,
                    success: () => {
                        console.log('mensaje enviado');
                        Swal.fire({
                            // position: 'top-end',
                            icon: 'success',
                            title: 'Message sent!',
                            // showConfirmButton: false,
                            // timer: 1500
                        })
                    },
                    error:()=>{
                        Swal.fire({
                            icon: 'error',
                            title: 'server problem',
                        });
                    }
                    // dataType: "jsonp",
                    // dataType: dataType
                });

                // axios({
                //     method: 'get',
                //     url: 'https://adrianmailsender.000webhostapp.com',
                //     data
                // });

                // axios.post('https://adrianmailsender.000webhostapp.com', data, axiosConfig)
                //     .then(function (response) {
                //         alert('success!');
                //         console.log(response);
                //     })
                //     .catch(function (error) {
                //         console.log(error);
                //     });
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'All fields are required',
                });
            }
        });
    }

    render() {
        return (
            // <div className="container p-5">
            //     <div className="container p-5 bg-dark">

            <div className="container contact-form">
                <div className="contact-image">
                    <img src={require('./letter.png')} alt="rocket_contact" />
                </div>
                <div>
                    <h3><TranslatableLabel is_typed={true} spa="Déjame un mensaje" eng="Drop me a message" ger="Schreib mir eine Nachricht" /></h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" ref="name" name="txtName" className="form-control" placeholder={placeholders_dict[this.props.lang].name} />
                            </div>
                            <div className="form-group">
                                <input type="text" ref="email" name="txtEmail" className="form-control" placeholder={placeholders_dict[this.props.lang].email} />
                            </div>
                            {/* <div className="form-group">
                                        <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" />
                                    </div> */}
                            <div className="form-group">
                                <input type="button" ref="sendbtn" name="btnSubmit" className="btnContact" value={placeholders_dict[this.props.lang].submit} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea name="txtMsg" ref="message" className="form-control" placeholder={placeholders_dict[this.props.lang].message} style={{ width: "100%", height: "150px" }}></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="email-address-message">
                        <TranslatableLabel is_typed={true} spa="También me puedes escribir a eidiazcas@gmail.com" eng="You can also email me at eidiazcas@gmail.com" ger="Sie können mir auch eine E-Mail an eidiazcas@gmail.com senden" />
                    </div>
                </div>
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