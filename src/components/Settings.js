import {React, useState} from 'react';
import {AlgorithmSelect} from './Select';
import Orientations from './Orientations';
import { FaTimes } from 'react-icons/fa';
import {maxRow, maxCol} from './Board';
import Controls from './Controls'
import {hasBackgroundColor, setBackgroundColor} from '../AlgorithmLib/utils';
export var startPos = [10, 10];
export var endPos = [10, 45];
export var startingIcon = <FaTimes style={{color: 'red', cursor: 'pointer'}}/>


const Settings = ({nameToAlgs}) => {

    var [selectedAlg, changeSelectedAlg] = useState('DI'); 
                                           // TODO: get the first option instead, 
                                           // needs to wait after construction

    var [orientationList, changeOrientation] = useState(['N', 'E', 'S', 'W']);

    changeSelectedAlg = (alg) => {
        selectedAlg = alg;
    }

    changeOrientation = (orientation, number) => {
        let index = parseInt(number);
        orientationList[index - 1] = orientation;
        console.log(orientation);
    }

    const getSelectedAlg = () => {
        return nameToAlgs[selectedAlg];
    }

    const clearAll = () => {
        for (let row = 0; row <= maxRow; row++) {
            for (let col = 0; col <= maxCol; col++) {
                let box = document.getElementById(`${row}-${col}`);
                if (row === startPos[0] && col === startPos[1]) {
                    setBackgroundColor(box, "green");
                } else if (row === endPos[0] && col === endPos[1]) {
                    setBackgroundColor(box, "red");
                } else {
                    setBackgroundColor(box, "white");
                }
            }
        }
    }

    const clearDisplay = () => {
        for (let row = 0; row <= maxRow; row++) {
            for (let col = 0; col <= maxCol; col++) {
                let box = document.getElementById(`${row}-${col}`);
                if (row === startPos[0] && col === startPos[1]) {
                    setBackgroundColor(box, "green");
                } else if (row === endPos[0] && col === endPos[1]) {
                    setBackgroundColor(box, "red");
                } else if (hasBackgroundColor(box, "black")) {
                    continue;
                } else {
                    setBackgroundColor(box, "white");
                }
            }
        }
    }

    function handleOnClickRun() {
        // TODO: if not already running:
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        getSelectedAlg()(startPos[0], startPos[1], endPos[0], endPos[1], orientationList);
    }

    return (
        <div>
            <div>
                <span className="dir-text">
                    Please select a pathfinding algorithm: 
                </span>
                <AlgorithmSelect onChange={ changeSelectedAlg } />
                <hr></hr>
                <br></br>
                <span className="dir-text">
                    Please select orientation tie-break rule:
                </span>
                <Orientations onChange={changeOrientation}/>
                <br></br>
                <span className="note"> Note: NESW will be chosen if 
                invalid orientation sequence is selected</span>
                <hr></hr>
            </div>
            <br></br>
            <div className='d'>
                <span className="dir-text">
                    Have Fun!
                </span>
                <Controls 
                    clearDisplay={ clearDisplay } 
                    clearAll={ clearAll } 
                    handleOnClickRun={ handleOnClickRun } 
                />
            </div>
        </div>
    )
}

//TODO: {algorithm} must be function

export default Settings;
