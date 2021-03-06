import React, { useState } from "react";
import Board from './components/Board'
import {calculateWinner} from './helpers'
import History from './components/History'
import StatusMessage from './components/StatusMessage'
import "./styles/root.scss"
const   App =() => {
 
const newGame =  [
    {board:Array(9).fill(null) , isXNext : true}
  ];

  const [ history , setHistory] = useState(newGame);

  console.log(history);
const [ currentMove , setCurrentMove] = useState(0);
const current = history[currentMove];

const {winner , winningSquares} = calculateWinner(current.board);
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


const onNewGame = () => {
  setHistory(newGame);
  setCurrentMove(0);
}
 
  return (
  <div className="app">
    <h1>Tic <span className="text-green"> Tac </span> Toe game</h1>
    <StatusMessage winner={winner} current={current} />
   <Board board={current.board} handlerSquareClick={handlerSquareClick} winningSquares={winningSquares}/>
   <button type="button" onClick={onNewGame}
   className={`btn-reset ${winner ? 'active': ''}`}>Restart the Game</button>
   <div className="bg-balls" />
   <History history={history} moveTo={moveTo} currentMove={currentMove} />
  </div>
  );
};
export default App