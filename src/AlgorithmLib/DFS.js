import {getAdjacent, getRowFromId, getColFromId, getElementByPos, display} from './utils';


var visited = [];
function DFSRun(startRow, startCol, endRow, endCol) {
    let DFSPath = DFSHelper(startRow, startCol, endRow, endCol, []);
    DFSPath ? display(visited, DFSPath) : display(visited, []);
    resetDFS();
}

function DFSHelper(startRow, startCol, endRow, endCol, path) {
    let node = getElementByPos(startRow, startCol)
    visited.push(node);
    path.push(node);
    if (startRow === endRow && startCol === endCol) { return path; }
    let adjacents = getAdjacent(startRow, startCol, visited);
    if (!adjacents.length) { return null; }
    for (let i = 0; i < adjacents.length; i++) { // return in for each doesn't end the loop...
        let pathCopy = path.slice();
        let row = getRowFromId(adjacents[i].id);
        let col = getColFromId(adjacents[i].id);
        let newPath = DFSHelper(row, col, endRow, endCol, pathCopy);
        if (newPath) {
            return newPath;
        }
    };
}

function resetDFS() {
    visited = [];
}

export default DFSRun;