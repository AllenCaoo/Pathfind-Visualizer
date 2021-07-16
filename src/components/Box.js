import {React, useState} from 'react'
const Box = ({row, col}) => {

    var [isWall, toggleWall] = useState(false);

    toggleWall = () => {
        isWall = !isWall;
        if (isWall) {
            console.log(`${row}-${col}`);
            document.getElementById(`${row}-${col}`).style.backgroundColor = "black";
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
