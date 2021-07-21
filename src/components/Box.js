import {React, useState, useEffect, Component} from 'react';

const Box = ({row, col, color, isStart, isEnd }) => {

    var [isWall, toggleState] = useState(false);

    var [initialized, setInitialize] = useState(false);

    function cleanState() {
        let box = document.getElementById(`${row}-${col}`);
        if (box.style.backgroundColor === "white") {
            toggleState(false);
        } else if (box.style.backgroundColor === "black") {
            toggleState(true);
        }
    }


    function handleClick() {
        cleanState();
        let box = document.getElementById(`${row}-${col}`);
        if (!isStart && !isEnd) {
            if (box.style.backgroundColor === "black" 
            || box.style.backgroundColor === "white") { 
                toggleState(!isWall);
            }
        }
    }

    useEffect(() => {
        if (initialized) {
            let box = document.getElementById(`${row}-${col}`);
            if (isWall) {
                box.style.backgroundColor = "black"
            } else {
                box.style.backgroundColor = "white";
            }
        } else {
            setInitialize(true);
        }
    }, [isWall]);

    return (
        <td 
            className="box" 
            id={row + "-" + col}
            style={{backgroundColor: color}} 
            onClick={ handleClick }
            >
        </td>
    )
}

Box.defaultProps = {
    color: 'white',
    isStart: false,
    isEnd: false
}

export default Box
