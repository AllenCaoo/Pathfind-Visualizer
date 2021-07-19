import React from 'react';
import Button from './Button';
import AlgorithmSelect from './AlgorithmSelect';
import { FaTimes } from 'react-icons/fa';
// import Slider from './Slider';
// export var selectingBegin = false;
// export var selectingEnd = false;
export var startPos = [8, 8];
export var startingIcon = <FaTimes style={{color: 'red', cursor: 'pointer'}}/>


const Settings = ({algorithm}) => {

    const clear = () => {
        var boxes = document.getElementsByClassName("box");
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = "white";
        }
    }

    // const toggleSelectBegin = () => {
    //     selectingBegin = !selectingBegin;
    //     if (selectingBegin) {
    //         console.log("selecting begin on");
    //     }
    //     else {
    //         console.log("selecting begin off");
    //     }
    // }

    // const initializeStartEnd = () => {
    // }

    return (
        <div>
            <AlgorithmSelect />
            <Button color='purple' text="Change Start"/>
            <Button color='purple' text="Change End"/>
            <Button color='blue' text="Clear" onClick={clear} />
            <Button color='red' text="Stop"/>
            <Button color='green' text="Run" onClick={() => {
                algorithm(startPos[0], startPos[1], 14, 40)}
            }/>
        </div>
    )
}

//TODO: {algorithm} must be function

export default Settings;
