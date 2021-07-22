import {React, useState} from 'react';
import Button from './Button';
import AlgorithmSelect from './AlgorithmSelect';
import { FaTimes } from 'react-icons/fa';
import {maxRow, maxCol} from './Board';
export var startPos = [10, 10];
export var endPos = [10, 45];
export var startingIcon = <FaTimes style={{color: 'red', cursor: 'pointer'}}/>


const Settings = ({nameToAlgs}) => {

    var [selectedAlg, changeSelectedAlg] = useState('DI'); 
                                           // TODO: get the first option instead, 
                                           // needs to wait after construction

    changeSelectedAlg = (alg) => {
        selectedAlg = alg;
    }

    const getSelectedAlg = () => {
        return nameToAlgs[selectedAlg];
    }

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

    const clearDisplay = () => {
        for (let row = 0; row <= maxRow; row++) {
            for (let col = 0; col <= maxCol; col++) {
                let box = document.getElementById(`${row}-${col}`);
                if (row === startPos[0] && col === startPos[1]) {
                    box.style.backgroundColor = "green";
                } else if (row === endPos[0] && col === endPos[1]) {
                    box.style.backgroundColor = "red";
                } else if (box.style.backgroundColor === "black") {
                    continue;
                } else {
                    box.style.backgroundColor = "white";
                }
            }
        }
    }

    function handleOnClickRun() {
        // TODO: if not already running:
        var scrollingElement = (document.scrollingElement || document.body);
        scrollingElement.scrollTop = scrollingElement.scrollHeight;
        getSelectedAlg()(startPos[0], startPos[1], endPos[0], endPos[1]);
    }

    return (
        <div>
            <AlgorithmSelect onChange={changeSelectedAlg} />
            {/* <Button color='purple' text="Change Start"/> 
            <Button color='purple' text="Change End"/> */}  {/* To be deployed later*/}
            <Button color='blue' text="Clear Display" onClick={clearDisplay} />
            <Button color='blue' text="Clear All" onClick={clear} />
            <br></br>
            <Button color='red' text="Stop (unavailable)"/>  {/* To be deployed later*/}
            <Button color='green' text="Run" onClick={() => {
                handleOnClickRun()}
            }/>
        </div>
    )
}

//TODO: {algorithm} must be function

export default Settings;
