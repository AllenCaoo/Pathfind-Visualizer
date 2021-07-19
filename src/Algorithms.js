import {getAdjacent, getRowFromId, getColFromId, getElementByPos, display} from './utils';
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
    running = false;
}

export function A_star(startRow, startCol, endRow, endCol) {
    running = true;
    console.log("Running A*");
    running = false;
}

export function DFS(startRow, startCol, endRow, endCol) {
    running = true;
    console.log("Running DFS");
    running = false;
}

function DFSHelper(currRow, currCol, endRow, endCol, path) {

}


export function BFS(startRow, startCol, endRow, endCol) {
    running = true;
    console.log("Running BFS");
    let queue = [];
    let visited = [];
    let firstBox = getElementByPos(startRow, startCol)
    queue.push([firstBox]);
    visited.push(firstBox);
    while (queue.length != 0) {
        let path = queue[0];
        queue.shift();
        let node = path[path.length - 1];
        startRow = getRowFromId(node.id);
        startCol = getColFromId(node.id);
        if (startRow === endRow && startCol === endCol) {
            display(visited, path);
            break;
        }
        let adjacents = getAdjacent(startRow, startCol, visited);
        adjacents.forEach(box => {
            let newPath = path.slice();
            newPath.push(box);
            queue.push(newPath);
        })
    }
    display(visited, []);
    running = false;
}
