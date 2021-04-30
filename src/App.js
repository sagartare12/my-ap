import React, { useState } from "react";
import Board from './components/Board'
import {calculateWinner} from './helpers'
import "./styles/root.scss"
const   App =() => {

  const [board, setBoard] = useState(Array(9).fill(null));

const [isXNext , setIsXNext ] = useState(false);

const winner = calculateWinner(board);
console.log(winner);

const  message = winner 
 ? `Winner is ${winner}`
 : `Next player is ${isXNext ? 'X' : 'O'}`;
const handlerSquareClick = (position)=> {
     if( board[position] || winner) {
         return ;
     }

    setBoard( (prev) =>{
        return prev.map((square ,pos) => {
            if(pos === position) {
                return   isXNext ? 'X' : 'O';
            }
            return square;
           
        })
    })
  setIsXNext( prev => !prev);
};
  return (
  <div className="app">
    <h1>Tic Tac Toe game</h1>
    <h1>{message}</h1>
   <Board board={board} handlerSquareClick={handlerSquareClick} />
  </div>
  );
};
export default App