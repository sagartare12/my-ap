import React, { useState } from "react";
import Board from './components/Board'
import {calculateWinner} from './helpers'
import "./styles/root.scss"
const   App =() => {

  const [ history , setHistory] = useState([
    {board:Array(9).fill(null) , isXNext : true}
  ]);

  console.log(history);
const [ currentMove , setCurrentMove] = useState(0);
const current = history[currentMove];

const winner = calculateWinner(current.board);
console.log(winner);

const  message = winner 
 ? `Winner is ${winner}`
 : `Next player is ${current.isXNext ? 'X' : 'O'}`;
const handlerSquareClick = (position)=> {
     if( current.board[position] || winner) {
         return ;
     }

    setHistory( (prev) =>{

      const last = prev[prev.length - 1];
        const newBoard = last.board.map((square ,pos) => {
            if(pos === position) {
                return   last.isXNext ? 'X' : 'O';
            }
            return square;
           
        })
        return prev.concat( { board: newBoard , isXNext : !last.isXNext} );
    })
  
    setCurrentMove(prev => prev + 1);
};
  return (
  <div className="app">
    <h1>Tic Tac Toe game</h1>
    <h1>{message}</h1>
   <Board board={current.board} handlerSquareClick={handlerSquareClick} />
  </div>
  );
};
export default App