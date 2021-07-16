import React from 'react'
import Box from './Box'


function initBoard() {
    let rows = [] 
    for(var i = 0; i < 16; i++){
        let cells = []
        for(var j = 0; j < 51; j++) {
            cells.push(<Box row={i} col={j}/>);
        }
        rows.push(<tr>{cells}</tr>);
    }
  return rows;
}

const Board = () => {
    return (
        <table className="board" cellSpacing="0" cellPadding="0">
            <tbody>
                {initBoard()}
            </tbody>
        </table>
    )
}




export default Board
