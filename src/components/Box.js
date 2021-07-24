import {React, useState} from 'react';
import {hasBackgroundColor, setBackgroundColor} from '../AlgorithmLib/utils';

var isMouseDown = false;
const Box = ({row, col, color, canDrawOn}) => {

    var handleMouseDown = (e) => {
        e.preventDefault();
        if (canDrawOn()) {
            isMouseDown = true;
            toggleState();
        }
    }

    var handleMouseUp = (e) => {
        isMouseDown = false;
    }

    var toggleState = () => {
        let box = document.getElementById(`${row}-${col}`)
        if (hasBackgroundColor(box, "white")) {
            setBackgroundColor(box, "black");
        } else if (hasBackgroundColor(box, "black")) {
            setBackgroundColor(box, "white");
        }
    }

    return (
        <td 
            className="box" 
            id={row + "-" + col}
            style={{backgroundColor: color}} 
            onMouseDown={ (e) => handleMouseDown(e) }   
            onMouseUp={ (e) =>  handleMouseUp(e) }
            onMouseEnter={ (e) => { if (isMouseDown) toggleState(); } }
            >
        </td>
    )
}

Box.defaultProps = {
    color: 'white',
    canDrawOn: function(e) { e.preventDefault(); return false; }
}

export default Box
