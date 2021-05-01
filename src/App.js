import React, { useState } from "react";
import Board from './components/Board'
import {calculateWinner} from './helpers'
import History from './components/History'
import StatusMessage from './components/StatusMessage'
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

const moveTo = (move) => {
  setCurrentMove(move);
}
  return (
  <div className="app">
    <h1>Tic Tac Toe game</h1>
    <StatusMessage winner={winner} current={current} />
   <Board board={current.board} handlerSquareClick={handlerSquareClick} />
   <History history={history} moveTo={moveTo} currentMove={currentMove} />
  </div>
  );
};
export default App