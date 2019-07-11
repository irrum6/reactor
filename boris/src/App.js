import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Board from './components/Board';
import PromptWindow, { ShowWindow } from './components/Prompt';

import CARDS from './data/cards.json';

import Utils from './utils';

const SEQUENCE = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

class FortunaApp extends Component {
    constructor() {
        super();
        const answers = [{
            title: 'მაღალი',
            value: 'high',
            id: 0
        }, {
            title: 'დაბალი',
            value: 'low',
            id: 1,
        }, {
            title: 'იგივე',
            value: 'same',
            id: 2
        }]
        const cards = this.GetNewCards();
        this.state = { answers, cards };

    }
    answer(id) {
        if (this.state.gameOver) return false;

        let { previousCardIndex, currentCardindex, cards } = this.state;
        //compare previous card to current card
        const val1 = cards[previousCardIndex].value;
        const val2 = cards[currentCardindex].value;
        //look for indexes in sequence
        const index1 = SEQUENCE.indexOf(val1);
        const index2 = SEQUENCE.indexOf(val2);

        let result;
        if (index1 < index2) result = 'high';
        if (index1 > index2) result = 'low';
        if (index1 === index2) result = 'same';

        const resultId = this.state.answers.filter(e => e.value === result)[0].id;

        const gameOver = (resultId !== id);

        this.NextRound(gameOver)
    }
    NextRound(gameOver) {
        let { previousCardIndex, currentCardindex } = this.state;
        let { cards, score } = this.state;
        score *= 2;
        if (gameOver) alert('თამაში მორჩა !');

        previousCardIndex = currentCardindex;
        currentCardindex++;

        if (currentCardindex > (cards.length - 1)) this.gameWon();

        cards[previousCardIndex].show = true;

        this.setState({ cards, gameOver, score, previousCardIndex, currentCardindex });
    }
    GameWon() {
        alert('თქვენ მოიგეთ');
    }
    GetNewCards() {
        let cards = Utils.shuffleArray(CARDS, 16);
        cards = cards.map(el => {
            return { ...el, show: false };
        });
        return cards;
    }
    NewGame() {
        const cards = this.GetNewCards();
        const score = 1;
        const gameOver = false;
        const gameWon = false;
        const previousCardIndex = 0;
        const currentCardindex = 1;

        cards[previousCardIndex].show = true;

        this.setState({ cards, score, gameOver, previousCardIndex, currentCardindex, gameWon })

        ShowWindow();
    }
    render() {
        return (<div className="App">
            <Navbar score={this.state.score} onNewGame={this.NewGame.bind(this)} />
            <Board data={this.state.cards} />
            <PromptWindow YES={this.state.answers[0].title} yesVal={0}
                NO={this.state.answers[1].title} noVal={1}
                other={this.state.answers[2].title} otherVal={2}
                onSetValue={this.answer.bind(this)} />
        </div>);
    }
}

export default FortunaApp;