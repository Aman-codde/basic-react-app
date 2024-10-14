import { useState } from "react";
import Square from "./square";
import './square.css';
import calculateWinner from "./calculate_winner";

export default function Board({xIsNext,squares,onPlay}){

    const winner = calculateWinner(squares);
    let status;
    if(winner !== null){
        status = 'Winner: ' + winner[0];
    }
    else{
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    function handleClick(i){
        // if the square is already filled with value, make an early return
        if(squares[i] || calculateWinner(squares)){
            return;
        }
           
        // create copy of squares
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';
        onPlay(nextSquares);

        if(!nextSquares.includes(null)){
            console.log("draw");
            status = `It's a Draw`;
            console.log(status)
        }
    }

    function isWinner(i){
        if(winner!==null){
            if(winner[1].includes(i))
                return true;
        }
        return false;
    }

    return(
        <div>
            <div className={winner ? 'status win': 'status'}>{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} hasWon={isWinner(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} hasWon={isWinner(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} hasWon={isWinner(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} hasWon={isWinner(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} hasWon={isWinner(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} hasWon={isWinner(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} hasWon={isWinner(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} hasWon={isWinner(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} hasWon={isWinner(8)}/>
            </div>
        </div>
    )
}