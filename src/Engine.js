import BFSRun from './AlgorithmLib/BFS';
import DFSRun from './AlgorithmLib/DFS';
import DijkstrasRun from './AlgorithmLib/Dijkstras';
import A_star_run from './AlgorithmLib/A_star';
import GreedyRun from './AlgorithmLib/GreedyBFS';
import {setBackgroundColor, hasBackgroundColor, orientationListToJson} from './utils';
import runBlankMaze from './MazeLib/BlankMaze';
import runRecursiveBacktrack from './MazeLib/RecursiveBacktrack';
import runRandomPrims from './MazeLib/Prims';
import runRandomInversePrims from './MazeLib/InversePrims';
import recursveDivRun from './MazeLib/RecursiveDivision';


export class Engine { 

    constructor(chosenAlg, isMaze, startRow, startCol, endRow, endCol, 
                        orientationOrdered, displayFancy, delay) {
        this.chosenAlgorithm = chosenAlg;
        this.isMaze = isMaze;
        this.startRow = startRow;
        this.startCol = startCol;
        this.endRow = endRow;
        this.endCol = endCol;
        this.orientationOrdered = orientationOrdered;
        this.displayFancy = displayFancy;
        this.engineIsRunning = false;
        this.delay = delay;
        this.algorithm = () => {
            return chosenAlg(startRow, startCol, endRow, endCol, orientationOrdered);
        }
        if (!isMaze) {
            this.visitedColor = {'r': 64, 'g': 224, 'b': 208};
            this.pathColor = "yellow";
        } else {
            this.visitedColor = {'r': 0, 'g': 0, 'b': 0};
            this.pathColor = "white";
        }
    }

    isRunning() {
        return this.engineIsRunning;
    }
    
    async run() {
        this.engineIsRunning = true;
        let queues = this.algorithm();
        if (!this.isMaze) {
            await this.display(queues["visited"], queues["path"], this.displayFancy, 
                this.delay, this.isMaze, this.visitedColor, this.pathColor);
        } else {
            await this.display(queues["visited"], queues["path"], this.displayFancy, 
                this.delay, this.isMaze, this.visitedColor, this.pathColor);
        }
        this.engineIsRunning = false;
    }
    

    async display(queue, path, displayFancy, delayMS, isMaze, visitedColor, pathColor) {
        let baseOverLayDelayMS = 100;
        let pathDelayMS = 20;
        let r = visitedColor['r'];
        let g = visitedColor['g'];
        let b = visitedColor['b'];

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        async function overlapDisplay(box, r, g, b, catchUpDelay) {
            /* rgb(64, 187, 224), rgb(56, 164, 197), rgb(48, 134, 160), rgb(48, 106, 160); */
            if (r < 20 || g <= 50 || b <= 50 || hasBackgroundColor(box, pathColor)) {
                return;
            }
            box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            await sleep(catchUpDelay + delayMS);
            await overlapDisplay(box, r - 2, g - 6, b - 6, catchUpDelay);
        }
        

        async function displayAndOverlap(isMaze) {
            for (let i = 0; i < queue.length; i++) {
                if (hasBackgroundColor(queue[i], "white")) {  // don't override green or red
                    setBackgroundColor(queue[i], `rgb(${r}, ${g}, ${b})`);
                    if (displayFancy && !isMaze) {
                        setTimeout(function () { 
                            overlapDisplay(queue[i], r - 1, g - 3, b - 3, baseOverLayDelayMS); 
                        }, 500);
                    }
                }
                await sleep(delayMS);
            }
        }

        await displayAndOverlap(isMaze);

        console.log(path);

        for (let i = 0; i < path.length; i++) {
            if (hasBackgroundColor(path[i], "green") || hasBackgroundColor(path[i], "red")) {
                continue;
            }
            setBackgroundColor(path[i], pathColor);
            await sleep(pathDelayMS); // Change seconds here to debug path
        }
        await sleep(delayMS + 1000 + baseOverLayDelayMS);
    }
}



export function Dijkstras(startRow, startCol, endRow, endCol, orientationList) {
    return DijkstrasRun(startRow, startCol, endRow, endCol, orientationListToJson(orientationList))
}

export function A_star(startRow, startCol, endRow, endCol, orientationList) {
    return A_star_run(startRow, startCol, endRow, endCol, orientationListToJson(orientationList));
}


export function DFS(startRow, startCol, endRow, endCol, orientationList) {
    return DFSRun(startRow, startCol, endRow, endCol, orientationListToJson(orientationList));
}


export function BFS(startRow, startCol, endRow, endCol, orientationList) {
    return BFSRun(startRow, startCol, endRow, endCol, orientationListToJson(orientationList));
}

export function Greedy(startRow, startCol, endRow, endCol, orientationList) {
    return GreedyRun(startRow, startCol, endRow, endCol, orientationListToJson(orientationList));
}

export function blankMaze(startRow, startCol, endRow, endCol, orientationList) {
    return runBlankMaze([startRow, startCol], [endRow, endCol]);
}

export function recursiveBacktrack(startRow, startCol, endRow, endCol, orientationList) {
    return runRecursiveBacktrack(startRow, startCol);
}

export function randomPrims(startRow, startCol, endRow, endCol, orientationList) {
    return runRandomPrims(startRow, startCol, endRow, endCol, orientationList);
}

export function inverseRandomPrims(startRow, startCol, endRow, endCol, orientationList) {
    return runRandomInversePrims(startRow, startCol, endRow, endCol, orientationList);
}

export function recursiveDivision(startRow, startCol, endRow, endCol, orientationList) {
    return recursiveDivision()
}