import {React} from 'react';
import PropTypes from 'prop-types';



export const Select = ( { className, color, numOptions, values, texts, onChange} ) => {

    function makeOptions() {
        let options = [];
        for (let i = 0; i < numOptions; i++) {
            options.push(<option value={values[i]}>{texts[i]}</option>);
        }
        return options;
    }

    return (
        <select className={className} style={{backgroundColor: color}}
                onChange={(evt) => onChange(evt)} >
            {makeOptions()}
        </select>
    )
}




export const AlgorithmSelect = ( { color, onChange } ) => {


    return (
        <select className='alg-slct' id='algorithms' style={{backgroundColor: color}}
            onChange={(evt) => onChange(evt.target.value)} >
            <option value="DI">Dijkstra's</option>
            <option value="A*">A* (Best First Search)</option>
            <option value="DFS">Depth First Search</option>
            <option value="BFS">Breadth First Search</option>
            <option value="GREEDY">Greedy Best First Search</option>
        </select>
    )
}

export const OrientationSelect = ( { color, selected, number, onChange } ) => {
    
    return (
        <select className='ori-slct' id={`orientation-${number}`} style={{backgroundColor: color}} 
            defaultValue={selected} onChange={(evt) => onChange(evt, number)}>
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
