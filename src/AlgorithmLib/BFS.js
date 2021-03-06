import {getAdjacent, getRowFromId, getColFromId, getElementByPos, display} from '../utils';

function BFSRun(startRow, startCol, endRow, endCol, orientationList) {
    let queue = [];
    let marked = []; // marked will include boxes from scouting adjacents (for performance)
    let visited = []; // visited will not include boxes from scouting adjacents
                     // (so that BFS will stop and not look at adjacents at last node)
    let firstBox = getElementByPos(startRow, startCol)
    queue.push([firstBox]);
    marked.push(firstBox);
    while (queue.length != 0) {
        let path = queue[0];
        queue.shift();
        let node = path[path.length - 1];
        visited.push(node);
        startRow = getRowFromId(node.id);
        startCol = getColFromId(node.id);
        if (startRow === endRow && startCol === endCol) {
            return {"visited": visited, "path": path};
        }
        let adjacents = getAdjacent(startRow, startCol, marked, orientationList);
        adjacents.forEach(box => {
            let newPath = path.slice();
            newPath.push(box);
            queue.push(newPath);
            marked.push(box);
        });
    }
    return {"visited": visited, "path": []};
}

export default BFSRun;