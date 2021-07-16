import {React, useState} from 'react'
const Box = ({row, col}) => {

    var [isWall, toggleWall] = useState(false);

    toggleWall = () => {
        isWall = !isWall;
        if (isWall) {
            document.getElementById(`${row}-${col}`).style.backgroundColor = "black";
        } else {
            document.getElementById(`${row}-${col}`).style.backgroundColor = "white";
        }
    }

    return (
        <td 
            className="box" 
            id={row + "-" + col} 
            onClick={ toggleWall } >
        </td>
    )
}

export default Box
