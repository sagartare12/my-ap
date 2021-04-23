import React from 'react'
import Square from './Square'
 const Board = () => {
    return (
        <div>
            <div>
                <Square value={0}/>
                <Square value={1}/>
                <Square value={5}/>
            </div>
            <div>
                <Square value={7}/>
                <Square value={8}/>
                <Square value={9}/>
            </div>
            <div>
                <Square value={6}/>
                <Square value={7}/>
                <Square value={2}/>
            </div>
        </div>
    )
};
export default Board
