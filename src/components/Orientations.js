import React from 'react';
import {OrientationSelect} from './Select';

const Orientations = ({onChange}) => {
    return (
        <span className="orientations">
            <span className="circle-number">1</span>
            <OrientationSelect color="#008080" selected="N" number='1' onChange={onChange} />
            <span className="circle-number">2</span>
            <OrientationSelect color="#008080" selected="E" number='2' onChange={onChange} />
            <span className="circle-number">3</span>
            <OrientationSelect color="#008080" selected="S" number='3' onChange={onChange} />
            <span className="circle-number">4</span>
            <OrientationSelect color="#008080" selected="W" number='4' onChange={onChange} />  
        </span>
    )
}

export default Orientations;
