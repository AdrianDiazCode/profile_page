import React, { Component } from 'react';
import TranslatableLabel from '../translatable_label/translatable_label';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import v_chess_thumb from './experience_imgs/vchess/thumb.png';

class VChess extends Component {
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
                        voice-chess
                                        </div>
                </div>
                <div className="experience-container">
                    <img className="exp-thumbnail" src={v_chess_thumb} onClick={this.handleShow.bind(this)}></img>
                </div>

                <Modal
                    size="lg"
                    show={this.state.show}
                    onHide={this.handleClose.bind(this)}
                    centered
                >
                    <Modal.Header closeButton className="bg-dark text-light">
                        <Modal.Title>Voice chess (V-CHESS)</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="bg-dark text-light text-center">
                        <div>
                            <img className="exp-image" src={v_chess_thumb} onClick={this.handleShow.bind(this)}></img>
                        </div>
                        <TranslatableLabel
                            type_speed = {40}
                            start_delay={0}
                            is_typed={true}
                            spa={`este es un juego de ajedrez controlado por voz para personas con discapacidad visual o para jugadores que quieran entrenar su memoria visual, echa un vistazo acá:`}
                            eng= {`this is a voice-controlled chess game for the visually impaired or for players who want to train their visual memory. Take a look here:`}
                            ger={`Dies ist ein sprachgesteuertes Schachspiel für Sehbehinderte oder für Spieler, die ihr visuelles Gedächtnis trainieren möchten 
                            <br> Schauen Sie hier: `}
                        >
                        </TranslatableLabel><br></br>
                        <a href="https://adriandiazcode.github.io/vchess/">V-CHESS</a>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default VChess;