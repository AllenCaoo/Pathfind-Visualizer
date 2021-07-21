import {React, useState} from 'react';

const Box = ({row, col, color}) => {

    var [_, toggleState] = useState(false);


    toggleState = () => {
        let currColor = document.getElementById(`${row}-${col}`).style.backgroundColor;
        // if (selectingBegin) {
        //     let startBox = document.getElementById(`${startPos[0]}-${startPos[1]}`);
        //     startBox.style.backgroundColor = "white";
        //     startPos = [row, col];
        if (currColor === "white") {
            document.getElementById(`${row}-${col}`).style.backgroundColor = "black";
        } else if (currColor === "black") {
            document.getElementById(`${row}-${col}`).style.backgroundColor = "white";
        }
    }

    return (
        <td 
            className="box" 
            id={row + "-" + col}
            style={{backgroundColor: color}} 
            onClick={ toggleState } 
            >
        </td>
    )
}

Box.defaultProps = {
    color: 'white'
}

export default Box
