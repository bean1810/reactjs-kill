import React from 'react';
import './squares.css';
import FontAwesomeIcon from '../../../node_modules/@fortawesome/react-fontawesome';
import faBug from '../../../node_modules/@fortawesome/fontawesome-free-solid/faBug'
import faUserSecret from '../../../node_modules/@fortawesome/fontawesome-free-solid/faUserSecret'

export function Square(props) {
    let Icon, backgroundColor = "#FFD54F", Span;
    if (props.value === "O" && props.value !== null) {
        Icon = <FontAwesomeIcon id="user" icon={faUserSecret}/>;
        Span = (
            <div>
               <span className={`span-translate`}>
                   {Icon}
               </span>
            </div>
        );
        backgroundColor = "#9FF1A5"
    } else if (props.value === "X" && props.value !== null) {
        Icon = <FontAwesomeIcon id="bugs" icon={faBug}/>;
        Span = (
            <div>
               <span className={`span-translate`}>
                   {Icon}
               </span>
            </div>
        );
        backgroundColor = "#FF9292"
    }
    return (
        <button className="Squares" onClick={props.onClick}>
            <div style={{"backgroundColor": backgroundColor}}>
                {Span}
            </div>
        </button>
    )
}
