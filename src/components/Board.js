import React from 'react';
import Box from './Box';
import {startPos, endPos, startingIcon} from './Settings';

export const maxRow = 20;
export const maxCol = 55;


const Board = ( { canDrawOn } ) => {

    function initBoard() {
        let rows = [];
        for(var i = 0; i < maxRow + 1; i++) {
            let cells = [];
            for(var j = 0; j < maxCol + 1; j++) {
                if (i === startPos[0] && j === startPos[1]) {
                    cells.push(<Box row={i} col={j} color="green"/>);
                } else if (i === endPos[0] && j === endPos[1]) {
                    cells.push(<Box row={i} col={j} color="red" />);
                } else {
                    cells.push(<Box row={i} col={j} canDrawOn={canDrawOn} />);
                }
            }
            rows.push(<tr>{cells}</tr>);
        }
        return rows;
    }

    return (
        <table className="board" cellSpacing="0" cellPadding="0">
            <tbody>
                {initBoard()}
            </tbody>
        </table>
    )
}




export default Board;
