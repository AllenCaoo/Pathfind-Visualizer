import React from 'react';
import Button from './Button';
import AlgorithmSelect from './AlgorithmSelect';
import Slider from './Slider';

const Settings = ({algorithm}) => {

    const clear = () => {
        var boxes = document.getElementsByClassName("box");
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = "white";
        }
    }

    return (
        <div>
            <AlgorithmSelect />
            <Button color='blue' text="Clear" onClick={clear} />
            <Button color='red' text="Stop"/>
            <Button color='green' text="Run" onClick={() => {algorithm(5, 5, 14, 14)}}/>
        </div>
    )
}

//TODO: {algorithm} must be function

export default Settings
