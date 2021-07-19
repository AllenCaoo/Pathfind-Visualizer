import React from 'react';
import Button from './Button';
import AlgorithmSelect from './AlgorithmSelect';
import { FaTimes } from 'react-icons/fa';
import {maxRow, maxCol} from './Board';
export var startPos = [8, 8];
export var endPos = [8, 42];
export var startingIcon = <FaTimes style={{color: 'red', cursor: 'pointer'}}/>


const Settings = ({algorithm}) => {

    const clear = () => {
        for (let row = 0; row <= maxRow; row++) {
            for (let col = 0; col <= maxCol; col++) {
                let box = document.getElementById(`${row}-${col}`);
                if (row === startPos[0] && col === startPos[1]) {
                    box.style.backgroundColor = "green";
                } else if (row === endPos[0] && col === endPos[1]) {
                    box.style.backgroundColor = "red";
                } else {
                    box.style.backgroundColor = "white";
                }
            }
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
                algorithm(startPos[0], startPos[1], endPos[0], endPos[1])}
            }/>
        </div>
    )
}

//TODO: {algorithm} must be function

export default Settings;
