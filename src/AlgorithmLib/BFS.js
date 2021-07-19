import {getAdjacent, getRowFromId, getColFromId, getElementByPos, display} from './utils';

function BFSRun(startRow, startCol, endRow, endCol) {
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
}

export default BFSRun;