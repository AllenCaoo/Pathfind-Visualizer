import BFSRun from './AlgorithmLib/BFS';
import DFSRun from './AlgorithmLib/DFS';
import DijkstrasRun from './AlgorithmLib/Dijkstras';
import A_star_run from './AlgorithmLib/A_star';
import { orientationListToJson } from './AlgorithmLib/utils';
import GreedyRun from './AlgorithmLib/GreedyBFS';
var running = false;

export function Dijkstras(startRow, startCol, endRow, endCol, orientationList) {
    running = true;
    DijkstrasRun(startRow, startCol, endRow, endCol, orientationListToJson(orientationList))
    running = false;
}

export function A_star(startRow, startCol, endRow, endCol, orientationList) {
    running = true;
    A_star_run(startRow, startCol, endRow, endCol, orientationListToJson(orientationList));
    running = false;
}


export function DFS(startRow, startCol, endRow, endCol, orientationList) {
    running = true;
    DFSRun(startRow, startCol, endRow, endCol, orientationListToJson(orientationList));
    running = false;
}


export function BFS(startRow, startCol, endRow, endCol, orientationList) {
    running = true;
    BFSRun(startRow, startCol, endRow, endCol, orientationListToJson(orientationList));
    running = false;
}

export function Greedy(startRow, startCol, endRow, endCol, orientationList) {
    running = true;
    GreedyRun(startRow, startCol, endRow, endCol, orientationListToJson(orientationList));
    running = false;
}
