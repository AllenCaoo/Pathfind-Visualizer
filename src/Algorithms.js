import BFSRun from './AlgorithmLib/BFS';
import DFSRun from './AlgorithmLib/DFS';
import DijkstrasRun from './AlgorithmLib/Dijkstras';
import A_star_run from './AlgorithmLib/A_star';
/* When neighbors are same length away, break tie by whoever comes first in a counterclocwise
    rotation, starting from the box directly above the starting position.
    For example:
             A
        B  Start  D
             C    
    BFS results in A-B-C-D
    */

var running = false;

export function Dijkstras(startRow, startCol, endRow, endCol) {
    running = true;
    console.log("Running Dijkstras");
    DijkstrasRun(startRow, startCol, endRow, endCol)
    running = false;
}

export function A_star(startRow, startCol, endRow, endCol) {
    running = true;
    console.log("Running A*");
    A_star_run(startRow, startCol, endRow, endCol);
    running = false;
}


export function DFS(startRow, startCol, endRow, endCol) {
    running = true;
    console.log("Running DFS");
    DFSRun(startRow, startCol, endRow, endCol);
    running = false;
}


export function BFS(startRow, startCol, endRow, endCol) {
    running = true;
    console.log("Running BFS");
    BFSRun(startRow, startCol, endRow, endCol);
    running = false;
}
