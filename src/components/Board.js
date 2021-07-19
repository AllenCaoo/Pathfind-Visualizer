import React from 'react'
import Box from './Box'

export const maxRow = 15;
export const maxCol = 50;

function initBoard() {
    let rows = [] 
    for(var i = 0; i < maxRow + 1; i++){
        let cells = []
        for(var j = 0; j < maxCol + 1; j++) {
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




export default Board;