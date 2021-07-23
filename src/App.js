import {React, useState, useEffect} from 'react';
import Header from './components/Header';
import Settings from './components/Settings';
import Board from './components/Board';
import {Engine} from './Engine';
import { FaTimes } from 'react-icons/fa';
import {maxRow, maxCol} from './components/Board';
import {hasBackgroundColor, setBackgroundColor} from './AlgorithmLib/utils';
export var startPos = [10, 10];
export var endPos = [10, 45];
export var startingIcon = <FaTimes style={{color: 'red', cursor: 'pointer'}}/>


function App() {


  var [engine, setEngine] = useState(null);

    /* will only be called after initial rendering; initalizes engine */
    useEffect(() => {
        setEngine(new Engine(null, 0, 0, 0, 0, [], false));
    }, []);


    setEngine = (newEngine) => {
      engine = newEngine;
    }

  const clearAll = (func) => {
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

  const clearDisplay = (func) => {
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

  const runEngine = (alg, startRow, startCol, endRow, endCol, oriList, willDisplayFancy) => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      if (!engine.isRunning()) {
          setEngine(new Engine(alg, startRow, startCol, 
                    endRow, endCol, oriList, willDisplayFancy));
          engine.run();
      }
  }

  const canDraw = () => {
    return !engine.isRunning();
  }

  return ( // Has to return SINGLE element
    <div className="App">
      <Header/>
      <hr></hr>
      <Settings blueFunc={clearDisplay} redFunc={clearAll} greenFunc={runEngine} />
      <Board canDrawOn={canDraw} />
      <br></br>
    </div>
  );
}

export default App;
