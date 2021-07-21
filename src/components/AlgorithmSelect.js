import {React, useState} from 'react'

const AlgorithmSelect = ( { color, onChange } ) => {


    return (
        <select className='slct' id='algorithms' style={{backgroundColor: color}}
            onChange={(evt) => onChange(evt.target.value)} >
            <option value="DI">Dijkstra's</option>
            <option value="A*">A* (unavailable)</option>
            <option value="DFS">Depth First Search</option>
            <option value="BFS">Breadth First Search</option>
        </select>
    )
}

AlgorithmSelect.defaultProps = {
    color: 'black',
    onChange: console.log("nothing happened")
}

export default AlgorithmSelect
