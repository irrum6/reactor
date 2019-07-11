import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
    render() {
        const data = this.props.cdata;

        let { show, symbol, color, value } = data;

        const GENERIC_SYMBOL = "♫"

        symbol = show ? symbol : GENERIC_SYMBOL;
        color = show ? color : 'black';
        value = show ? value : '#';

        const cssColorClass = `card-${color}`;

        return (
            <div className="flex inline column p1 card-box">
                <div className="flex f2 row space-between card-upper">
                    <span className={cssColorClass}> {symbol}</span>
                    <span className={cssColorClass}> {symbol}</span>
                </div>
                <div className="flex row pt1 pb1 card-body">
                    <span className="f4">{value}</span>
                </div>
                <div className="flex row f2 space-between card-bottom">
                    <span className={cssColorClass}> {symbol}</span>
                    <span className={cssColorClass}> {symbol}</span>
                </div>
            </div>
        );
    }
}

export default Card;