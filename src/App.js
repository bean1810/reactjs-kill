import React, {Component} from 'react';
import './App.css';
import Board from './Component/BoardComponent/Board';
import '../node_modules/mdbreact/dist/css/mdb.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Container, Button, Modal, ModalBody, ModalHeader, ModalFooter} from 'mdbreact';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(30).fill(null),
            timeInterval: 800,
            status: "Please help me, my website is dying",
            title: "Urgency",
            modal: true,
            modalFooter: false
        };
        this.randomX = this.randomX.bind(this);
        this.toggle = this.toggle.bind(this);
        this.reset = this.reset.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    reset() {
        this.setState({
            squares: Array(30).fill(null),
            modal: !this.state.modal
        })
    }

    randomX() {
        if (this.state.modal) return;
        const squares = this.state.squares.slice();
        if (squares.every((val) => val === "O")) return;
        let time = this.state.timeInterval;
        (squares[Math.floor(Math.random() * 29)] !== null || squares[Math.floor(Math.random() * 29)] === "X") ? time = 80 : time = 800;
        squares[Math.floor(Math.random() * 29)] = "X";
        this.setState({
            squares: squares,
            timeInterval: time
        })
    }

    componentDidMount() {
        // this.timeIntervals = setInterval(
        //     () => {
        //         this.randomXn()
        //     }, this.state.timeInterval
        // );
    }

    componentWillUnmount() {
        clearInterval(this.timeIntervals);
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        let status = this.state.status;
        let title = this.state.title;
        let modal = this.state.modal;
        let modalFooter = this.state.modalFooter;
        squares[i] = "O";
        let Check = squares.map((item) => item === "O");
        if (Check.every((val, o, arr) => val === true)) {
            status = "Wow, I can't believe it !!!, You really fixed ^.^";
            title = "Congratulations";
            modal = !modal;
            modalFooter = !modalFooter;
        } else if (Check.every((val, o, arr) => val === false)) {
            status = "Your system was die";
            title = "Done!, you really killed me";
            modal = !modal;
            modalFooter = !modalFooter;
        }
        this.setState({
            squares: squares,
            timeInterval: 100,
            status: status,
            modal: modal,
            title: title,
            modalFooter: modalFooter
        });
    }

    render() {
        const footerAgain = (
            <div>
                <Button color="secondary" onClick={this.toggle}>Close</Button>
                <Button color="danger" onClick={this.reset}>Try Again!</Button>
            </div>
        );
        const footerBegin = (
            <div>
                <Button color="success" onClick={this.toggle}>Start</Button>
            </div>
        );
        let footer = (this.state.modalFooter) ? footerAgain : footerBegin;
        return (
            <div className="App">
                {/*<h1>Bugs Every Where</h1>*/}
                <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
                    <ModalHeader className="text-center" toggle={this.toggle}>{this.state.title}
                    </ModalHeader>
                    <ModalBody>
                        {
                            this.state.status
                        }
                    </ModalBody>
                    <ModalFooter>
                        {footer}
                    </ModalFooter>
                </Modal>
                <div className="Board-Game">
                    <Board active="active" squares={this.state.squares} onClick={(i) => this.handleClick(i)}/>
                </div>
            </div>
        );
    }
}

export default App;
