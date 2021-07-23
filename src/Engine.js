import BFSRun from './AlgorithmLib/BFS';
import DFSRun from './AlgorithmLib/DFS';
import DijkstrasRun from './AlgorithmLib/Dijkstras';
import A_star_run from './AlgorithmLib/A_star';
import { orientationListToJson } from './AlgorithmLib/utils';
import GreedyRun from './AlgorithmLib/GreedyBFS';
import {setBackgroundColor, hasBackgroundColor} from './AlgorithmLib/utils';


export class Engine {
    constructor(chosenAlg, startRow, startCol, endRow, endCol, orientationOrdered, displayFancy) {
        this.chosenAlgorithm = chosenAlg;
        this.startRow = startRow;
        this.startCol = startCol;
        this.endRow = endRow;
        this.endCol = endCol;
        this.orientationOrdered = orientationOrdered;
        this.displayFancy = displayFancy;
        this.displayFancy = displayFancy;
        this.algorithm = () => {
            return chosenAlg(startRow, startCol, endRow, endCol, orientationOrdered);
        }
    }
    
    run() {
        let queues = this.algorithm();
        this.display(queues["visited"], queues["path"], this.displayFancy);
    }
    

    async display(queue, path, displayFancy) {
        let ms = 0;
        let r = 64
        let g = 224;
        let b = 208;

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        async function overlapDisplay(box, r, g, b) {
            /* rgb(64, 187, 224), rgb(56, 164, 197), rgb(48, 134, 160), rgb(48, 106, 160); */
            if (r < 20 || g <= 50 || b <= 50 || hasBackgroundColor(box, "yellow")) {
                return;
            }
            box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            await sleep(100);
            await overlapDisplay(box, r - 2, g - 6, b - 6);
        }

        for (let i = 0; i < queue.length; i++) {
            if (hasBackgroundColor(queue[i], "white")) {  // don't override green or red
                setBackgroundColor(queue[i], `rgb(${r}, ${g}, ${b})`);
                if (displayFancy) {
                    setTimeout(function () { overlapDisplay(queue[i], r - 1, g - 3, b - 3); }, 500);
                }
            }
            await sleep(ms);
        }
        let pathMS = 20;
        for (let i = 0; i < path.length; i++) {
            setBackgroundColor(path[i], "yellow");
            await sleep(pathMS);
        }
        console.log('Displayed');
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
