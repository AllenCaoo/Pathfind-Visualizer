import {getAdjacent, getRowFromId, getColFromId, getElementByPos, display} from './utils';

function BFSRun(startRow, startCol, endRow, endCol) {
    let queue = [];
    let visited = []; // visited will include boxes from scouting adjacents (for performance)
    let marked = []; // marked will not include boxes from scouting adjacents
                     // (so that BFS will stop and not look at adjacents at last node)
    let firstBox = getElementByPos(startRow, startCol)
    queue.push([firstBox]);
    visited.push(firstBox);
    while (queue.length != 0) {
        let path = queue[0];
        queue.shift();
        let node = path[path.length - 1];
        marked.push(node);
        startRow = getRowFromId(node.id);
        startCol = getColFromId(node.id);
        if (startRow === endRow && startCol === endCol) {
            display(marked, path);
            break;
        }
        let adjacents = getAdjacent(startRow, startCol, visited);
        adjacents.forEach(box => {
            let newPath = path.slice();
            newPath.push(box);
            queue.push(newPath);
            visited.push(box);
        });
    }
    display(marked, []);
}

export default BFSRun;