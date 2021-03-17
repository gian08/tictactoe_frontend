import React, { useState, useEffect } from 'react'
import  findWinner  from '../helper'
import axios from 'axios'
import Board from './Board'
import WinnerFetch from './WinnerFetch'

const App = () => {
    const [ history, setHistory ] = useState([Array(9).fill(null)]);
    const [ stepNumber,  setStepNumber ] = useState(0);
    const [ xIsNext, setXisNext ] = useState(true);
    const winner = findWinner(history[stepNumber])
    const xO = xIsNext ? "X" : "O"
   
    

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber]
        const squares = [...current]
        
        //select square
        squares[i] = xO;
        setHistory([...historyPoint, squares])
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext)
    };


    const jumpTo = (step) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    };

    const renderMoves = () => history.map((_step, move) => {
        const destination = move ? `Go to move #${move}` : " Go to start";
        return (
            <li key={ move }>
                <button onClick={() => jumpTo(move)}>{ destination }</button>
            </li>
        );
    });

    return (
        <div className="container">
            <div id="main">
                <div id="sidebar">
                    <h1>Tic Tac Toe</h1>
                    <Board squares={ history[stepNumber] } onClick={ handleClick } />
                    <div className="info-wrapper">
                        <div>
                            <h3>History</h3>
                            { renderMoves() }
                        </div>
                        <h4>
                            { winner === 'O' ? `Winner: ${winner}` : winner === 'X' ? `Winner: ${winner}` : winner === 'Draw' ? `Result: ${winner}` : `Next Player: ${xO}`  }

                        </h4>
                
                    </div>
                </div>
                <div id="page-wrap">
                        <WinnerFetch/>
                </div>
            </div>
        </div>
    )
}

export default App;