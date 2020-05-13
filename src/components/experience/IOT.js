import React, { Component } from 'react';
import TranslatableLabel from '../translatable_label/translatable_label';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import iot_thumb from './experience_imgs/sheraton/sheraton_login.png';
import iot_thumb_2 from './experience_imgs/sheraton/sheraton_view.png';
import iot_thumb_3 from './experience_imgs/sheraton/sheraton_view2.png';


class IOT extends Component {
    state = {
        show: false,
    }

    handleShow() {
        // alert();
        this.setState({
            show: true
        })
    }
    handleClose() {
        this.setState({
            show: false
        })
    }

    render() {
        return (
            <div className="height-100">

                <div className="skill-title">
                    <div className="skill-title-text">
                        <TranslatableLabel
                            is_typed={false}
                            spa={`Aplicaciones IOT`}
                            eng= {`IOT applications`}
                            ger={`IOT Apps`}
                        >
                        </TranslatableLabel>
                    </div>
                </div>
                <div className="experience-container">
                    <img className="exp-thumbnail" src={iot_thumb} onClick={this.handleShow.bind(this)}></img>
                </div>

                <Modal
                    size="lg"
                    show={this.state.show}
                    onHide={this.handleClose.bind(this)}
                    centered
                >
                    <Modal.Header closeButton className="bg-dark text-light">
                        <Modal.Title>
                            <TranslatableLabel
                                is_typed={false}
                                spa={`Aplicaciones IOT`}
                                eng= {`IOT applications`}
                                ger={`IOT Apps`}
                            >
                            </TranslatableLabel>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="bg-dark text-light text-center">

                    <Carousel
                            className="height-100"
                            interval={5000}
                        >
                            <Carousel.Item className="height-100">
                                <div className="exp-image-container text-center">
                                    <img className="exp-image" src={iot_thumb} onClick={this.handleShow.bind(this)}></img>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="height-100">
                                <div className="exp-image-container text-center">
                                    <img className="exp-image" src={iot_thumb_2} onClick={this.handleShow.bind(this)}></img>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="height-100">
                                <div className="exp-image-container text-center">
                                    <img className="exp-image" src={iot_thumb_3} onClick={this.handleShow.bind(this)}></img>
                                </div>
                            </Carousel.Item>
                        </Carousel>

                        <TranslatableLabel
                            type_speed = {40}
                            start_delay={0}
                            is_typed={true}
                            spa = {`Experiencia implementando aplicaciones IOT y en tiempo real`}
                            eng = {`Experience implementing iot and realtime applications`}
                            ger = {`Erfahrung in der Implementierung von IOT- und Echtzeitanwendungen`}
                        >
                        </TranslatableLabel><br></br>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default IOT;