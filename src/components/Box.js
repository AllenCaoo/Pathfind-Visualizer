import React from 'react'

const Box = ({row, col}) => {
    row = Object.values(row);
    col = Object.values(col);
    row = row.map(x => x)[0];
    col = col.map(x => x)[0];

    return (
        <td 
            class="box" 
            id={row + "-" + col} 
            onClick={function() {alert('You are clicking on the cell EXAMPLE')}}>
        </td>
    )
}

export default Box
