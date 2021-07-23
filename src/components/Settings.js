import {React, useState, useEffect} from 'react';
import {AlgorithmSelect} from './Select';
import Orientations from './Orientations';
import {Dijkstras, DFS, BFS, A_star, Greedy, Engine} from '../Engine';
import { FaTimes } from 'react-icons/fa';
import {maxRow, maxCol} from './Board';
import Controls from './Controls'
import {hasBackgroundColor, setBackgroundColor} from '../AlgorithmLib/utils';
export var startPos = [10, 10];
export var endPos = [10, 45];
export var startingIcon = <FaTimes style={{color: 'red', cursor: 'pointer'}}/>


const nameToAlgs = {
    "DI": Dijkstras,
    "DFS": DFS,
    "BFS": BFS,
    "A*": A_star,
    "GREEDY": Greedy
  }

const defaultOrientation = ['N', 'E', 'S', 'W'];

const Settings = () => {

    var [selectedAlg, setSelectedAlg] = useState('DI'); 
                                           // TODO: get the first option instead, 
                                           // needs to wait after construction

    var [orientationList, setOrientation] = useState(defaultOrientation);

    var [willDisplayFancy, toggleFancy] = useState(false);

    var [engine, setEngine] = useState(null);

    /* will only be called after initial rendering; initalizes engine */
    useEffect(() => {
        setEngine(new Engine(getSelectedAlg(), startPos[0], startPos[1], 
        endPos[0], endPos[1], orientationList, willDisplayFancy));
    }, [])
    

    setSelectedAlg = (alg) => {
        selectedAlg = alg;
    }

    setOrientation = (orientation, number) => {
        let index = parseInt(number);
        orientationList[index - 1] = orientation;
        console.log(orientation);
    }

    toggleFancy = (boxChecked) => {
        willDisplayFancy = boxChecked;
    }

    setEngine = (newEngine) => {
        engine = newEngine;
    }

    const getSelectedAlg = () => {
        return nameToAlgs[selectedAlg];
    }

    const clearAll = () => {
        if (!engine.isRunning()) {
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
    }

    const clearDisplay = () => {
        if (!engine.isRunning()) {
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
    }

    function handleOnClickRun() {
        // TODO: if not already running:
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        if (!engine.isRunning()) {
            setEngine(new Engine(getSelectedAlg(), startPos[0], startPos[1], 
                                    endPos[0], endPos[1], orientationList, willDisplayFancy));
            engine.run();
        }
    }

    function handleOnCheck(boxChecked) {
        toggleFancy(boxChecked)
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
            </div>
            <br></br>
            <div className='playground'>
                <span className="dir-text">
                    Have Fun!
                </span>
                <Controls 
                    blueFunc={ clearDisplay }
                    redFunc={ clearAll }  
                    greenFunc={ handleOnClickRun } 
                    checkFunc={ handleOnCheck }
                />
            </div>
        </div>
    )
}

//TODO: {algorithm} must be function

export default Settings;
