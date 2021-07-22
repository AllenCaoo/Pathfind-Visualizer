import React from 'react';
import {DirectionSelect} from './Select';

const Directions = ({onChange}) => {
    return (
        <span className="directions">
            <span className="circle-number">1</span>
            <DirectionSelect color="#008080" selected="N" number='1' onChange={onChange} />
            <span className="circle-number">2</span>
            <DirectionSelect color="#008080" selected="E" number='2' onChange={onChange} />
            <span className="circle-number">3</span>
            <DirectionSelect color="#008080" selected="S" number='3' onChange={onChange} />
            <span className="circle-number">4</span>
            <DirectionSelect color="#008080" selected="W" number='4' onChange={onChange} />  
        </span>
    )
}

export default Directions
