import React, { Component } from 'react';

import './Board.css'
import Card from './Card';

// Image by WikimediaImages from Pixabay

class Board extends Component {
    render() {
        let cards = this.props.data.map((c, i) => <Card cdata={c} />)
        return (
            <div className="board">
                {cards}
            </div>
        );
    }
}

export default Board;