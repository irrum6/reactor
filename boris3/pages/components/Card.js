import React, { Component } from 'react'
// import './Card.module.css'

const card = (props) => {
    const data = props.cdata;

    let { show, symbol, color, value } = data;

    const GENERIC_SYMBOL = "♫♫"

    symbol = show ? symbol : GENERIC_SYMBOL;
    color = show ? color : 'black';
    value = show ? value : '#';

    const cssColorClass = `card-${color}`;

    return (
        <div className="flex space-between column ph card-box">
            <div className="flex f1 row space-between card-upper">
                <span className={cssColorClass}> {symbol}</span>
                <span className={cssColorClass}> {symbol}</span>
            </div>
            <div className="flex row pth pbh card-body">
                <span className="f4">{value}</span>
            </div>
            <div className="flex row f1 space-between card-bottom">
                <span className={cssColorClass}> {symbol}</span>
                <span className={cssColorClass}> {symbol}</span>
            </div>
        </div>
    );
}

export default card;