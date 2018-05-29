import React from 'react';
import './board.css';
import {Square} from "../SquareComponent/Squares";

class Board extends React.Component {

    renderSquare(i) {
        return (
            <Square active={this.props.active} key={this.props.squares.length + Math.random() + i}
                    value={this.props.squares[i]}
                    onClick={() => this.props.onClick(i)}/>
        );

    }

    loopCreateSquare = () => {
        let table = [];
        //Outer loop to create parent
        for (let i = 0; i < 6; i++) {
            let children = [];
            //Inner loop to create children
            let j = i, max = 5;
            if (i >= 1) {
                j = max * i;
                max += j;
            }
            for (let k = j; k < max; k++) {
                children.push(this.renderSquare(k));
            }
            table.push(<div key={i} className="board-row">
                {children}
            </div>)
        }
        return table;
    };

    render() {
        return (
            <div>
                {this.loopCreateSquare()}
            </div>
        )
    }
}


export default Board;