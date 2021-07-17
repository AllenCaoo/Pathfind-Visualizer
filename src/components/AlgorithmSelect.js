import React from 'react'

const AlgorithmSelect = ({color}) => {
    return (
        <select className='slct' id='algorithms' style={{backgroundColor: color}}>
            <option value="DI">Dijkstra's</option>
            <option value="A*">A*</option>
            <option value="DFS">Depth First Search</option>
            <option value="BFS">Breadth First Search</option>
        </select>
    )
}

AlgorithmSelect.defaultProps = {
    color: 'black'
}

export default AlgorithmSelect
