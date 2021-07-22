import {React, useState} from 'react';
import {hasBackgroundColor, setBackgroundColor} from '../AlgorithmLib/utils';

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
