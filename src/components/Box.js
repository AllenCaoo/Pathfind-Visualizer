import {React, useState} from 'react';

var down = false;
const Box = ({row, col, color}) => {

    var handleMouseDown = (e) => {
        e.preventDefault();
        down = true;
        toggleState();
    }

    var handleMouseUp = (e) => {
        down = false;
    }

    var toggleState = () => {
        let currColor = document.getElementById(`${row}-${col}`).style.backgroundColor;
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
            onMouseDown={ (e) => handleMouseDown(e) }   
            onMouseUp={ (e) => handleMouseUp(e) }
            onMouseEnter={ (e) => { if (down) { toggleState(e) } } }
            >
        </td>
    )
}

Box.defaultProps = {
    color: 'white'
}

export default Box
