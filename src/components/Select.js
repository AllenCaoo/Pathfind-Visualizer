import {React, useState} from 'react'

export const AlgorithmSelect = ( { color, onChange } ) => {


    return (
        <span className="span-alg-slct" >
            <select className='alg-slct' id='algorithms' style={{backgroundColor: color}}
                onChange={(evt) => onChange(evt.target.value)} >
                <option value="DI">Dijkstra's</option>
                <option value="A*">A* (Best First Search)</option>
                <option value="DFS">Depth First Search</option>
                <option value="BFS">Breadth First Search</option>
                <option value="GREEDY">Greedy Best First Search</option>
            </select>
        </span>
    )
}

export const OrientationSelect = ( { color, selected, number, onChange } ) => {
    
    return (
        <select className='ori-slct' id={`orientation-${number}`} style={{backgroundColor: color}} 
            defaultValue={selected} onChange={(evt) => onChange(evt.target.value, number)}>
            <option value="N">North</option>
            <option value="E">East</option>
            <option value="S">South</option>
            <option value="W">West</option>
        </select>
    )
}

AlgorithmSelect.defaultProps = {
    color: 'black'
}
