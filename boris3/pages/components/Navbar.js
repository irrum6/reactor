import React from 'react';

const Navbar = (props) => {
    const scoreKeeper = props.score ? `ქულა:${props.score}` : ''
    return (
        <header>
            <h2><span className="blend"> {scoreKeeper}</span></h2>
            <nav>
                <li><button className="blend blend-green" onClick={props.onNewGame}>ახალი თამაში</button></li>
                <li><button className="blend" onClick={props.onShowRecords}>რეკორდები</button></li>
            </nav>
        </header>
    );
}

export default Navbar;