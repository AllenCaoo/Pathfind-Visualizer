import {React, useState, useEffect} from 'react';
import {AlgorithmSelect, Select} from './Select';
import Orientations from './Orientations';
import {Dijkstras, DFS, BFS, A_star, Greedy} from '../Engine';
import { FaTimes } from 'react-icons/fa';
import Controls from './Controls';

export const startPos = [10, 10];
export const endPos = [10, 45];
export const startingIcon = <FaTimes style={{color: 'red', cursor: 'pointer'}}/>


const nameToAlgs = {
    "DI": Dijkstras,
    "DFS": DFS,
    "BFS": BFS,
    "A*": A_star,
    "GREEDY": Greedy
  }

const defaultOrientation = ['N', 'E', 'S', 'W'];

const speedToDelayMS = {
    "Fast": 0,
    "Normal": 20,
    "Slow": 100,
    "Step-By-Step": 1000
}

const Settings = ({ blueFunc, redFunc, greenFunc }) => {

    var [selectedAlg, setSelectedAlg] = useState('DI'); 
                                           // TODO: get the first option instead, 
                                           // needs to wait after construction

    var [orientationList, setOrientation] = useState(defaultOrientation);

    var [willDisplayFancy, toggleFancy] = useState(false);

    var [speed, setSpeed] = useState("Fast");

    setSelectedAlg = (alg) => {
        selectedAlg = alg;
    }

    setOrientation = (evt, number) => {
        let index = parseInt(number);
        orientationList[index - 1] = evt.target.value;
    }

    toggleFancy = (boxChecked) => {
        willDisplayFancy = boxChecked;
    }


    setSpeed = (evt) => {
        speed = evt.target.value;
        console.log(speed);
    }


    const getSelectedAlg = () => {
        return nameToAlgs[selectedAlg];
    }

    const handleClearAll = () => {
        redFunc();
    }

    const handleClearDisplay = () => {
        blueFunc();
    }

    function handleOnClickRun() {
        // TODO: if not already running:
        greenFunc(getSelectedAlg(), startPos[0], startPos[1], 
            endPos[0], endPos[1], orientationList, willDisplayFancy, speedToDelayMS[speed]);
    }

    function handleOnCheck(boxChecked) {
        toggleFancy(boxChecked);
    }

    return (
        <div>
            <div className="settings">
                <span className="dir-text">
                    Please select a pathfinding algorithm: 
                </span>
                <AlgorithmSelect onChange={ setSelectedAlg } />
                <hr></hr>
                <br></br>
                <span className="dir-text">
                    Please select orientation tie-break rule:
                </span>
                <Orientations onChange={ setOrientation }/>
                <br></br>
                <span className="note"> Note: NESW will be chosen if 
                invalid orientation sequence is selected</span>
                <hr></hr>
                <span className="dir-text">
                    Please select your desired speed: 
                </span>
                <Select className="speed-slct" color="black" numOptions={4} 
                    values={["Fast", "Normal", "Slow", "Step-By-Step"]} 
                    texts={["Fast", "Normal", "Slow", "Step-By-Step"]} onChange={ setSpeed } />
                <hr></hr>
            </div>
            <br></br>
            <div className='playground'>
                <span className="dir-text">
                    Have Fun!
                </span>
                <Controls 
                    blueClick={ handleClearDisplay }
                    redClick={ handleClearAll }  
                    greenClick={ handleOnClickRun } 
                    checkClick={ handleOnCheck }
                />
            </div>
        </div>
    )
}

//TODO: {algorithm} must be function

export default Settings;
