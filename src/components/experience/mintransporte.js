import React, { Component } from 'react';
import TranslatableLabel from '../translatable_label/translatable_label';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import mintransporte_thumb from './experience_imgs/superintendencia/1.png';
import mintransporte_thumb_2 from './experience_imgs/superintendencia/2.png';
import mintransporte_thumb_3 from './experience_imgs/superintendencia/3.png';
import mintransporte_thumb_4 from './experience_imgs/superintendencia/4.png';
import mintransporte_thumb_5 from './experience_imgs/superintendencia/5.png';

class Mintransporte extends Component {
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
                            spa={`Rutas de transporte`}
                            eng= {`Transport routes`}
                            ger={`Transportwege`}
                        >
                    </TranslatableLabel>
                    </div>
                </div>
                <div className="experience-container">
                    <img className="exp-thumbnail" src={mintransporte_thumb} onClick={this.handleShow.bind(this)}></img>
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
                                    spa={`Rutas de transporte`}
                                    eng= {`Transport routes`}
                                    ger={`Transportwege`}
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
                                    <img className="exp-image" src={mintransporte_thumb} onClick={this.handleShow.bind(this)}></img>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="height-100">
                                <div className="exp-image-container text-center">
                                    <img className="exp-image" src={mintransporte_thumb_2} onClick={this.handleShow.bind(this)}></img>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="height-100">
                                <div className="exp-image-container text-center">
                                    <img className="exp-image" src={mintransporte_thumb_3} onClick={this.handleShow.bind(this)}></img>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="height-100">
                                <div className="exp-image-container text-center">
                                    <img className="exp-image" src={mintransporte_thumb_4} onClick={this.handleShow.bind(this)}></img>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="height-100">
                                <div className="exp-image-container text-center">
                                    <img className="exp-image" src={mintransporte_thumb_5} onClick={this.handleShow.bind(this)}></img>
                                </div>
                            </Carousel.Item>
                        </Carousel>



                        
                        <TranslatableLabel
                            type_speed = {40}
                            start_delay={0}
                            is_typed={true}
                            spa={`Este fue un proyecto para el control de asignación de rutas en la superintendencia de transporte colombiana`}
                            eng= {`This was a project to control the assignment of routes in the Colombian transport superintendency`}
                            ger={`Dies war ein Projekt zur Kontrolle der Zuweisung von Routen in der kolumbianischen Transportaufsicht`}
                        >
                        </TranslatableLabel><br></br>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default Mintransporte;