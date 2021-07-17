import {React, useState} from 'react'
const Box = ({row, col}) => {

    var [_, toggleWall] = useState(false);


    toggleWall = () => {
        let currColor = document.getElementById(`${row}-${col}`).style.backgroundColor;
        if (currColor === "white") {
            document.getElementById(`${row}-${col}`).style.backgroundColor = "black";
        } else {
            document.getElementById(`${row}-${col}`).style.backgroundColor = "white";
        }
    }

    return (
        <td 
            className="box" 
            id={row + "-" + col}
            style={{backgroundColor: "white"}} 
            onClick={ toggleWall } >
        </td>
    )
}

export default Box
