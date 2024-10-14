import { useState } from "react";
import Board from "./board";
import './game.css';

export default function Game() {
    const [history,setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0); 
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares){
        const nextHistory = [...history.slice(0,currentMove+1),nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length-1)
    }

    function jumpTo(nextMove){
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares,move) => {
        let description;
        if(move > 0){
            description = "Go to move #" + move;
        }
        else {
            description = "Go to Game Start";
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>
                    {description}
                </button>
            </li>
        )
    });

    return (
        <>
        <h1><span style={{color: 'green'}}>Tic</span> <span style={{color: 'magenta'}}>tac</span> <span style={{color: 'blueviolet'}}>toe</span></h1>
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className="game-info">
                <p>Game history</p>
                <ol className="moves_list">{moves}</ol>   
            </div>
        </div>
        </>
    )
}