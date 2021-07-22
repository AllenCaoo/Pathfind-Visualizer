import {getAdjacent, getRowFromId, getColFromId, getElementByPos, display} from './utils';


var stack = [];
var visited = [];
function DFSRun(startRow, startCol, endRow, endCol, orientationList) {
    let firstBox = getElementByPos(startRow, startCol)
    stack.push([firstBox]);
    visited.push(firstBox);
    while (stack.length != 0) {
        let path = stack[0];
        stack.shift();
        let node = path[path.length - 1];
        startRow = getRowFromId(node.id);
        startCol = getColFromId(node.id);
        if (startRow === endRow && startCol === endCol) {
            display(visited, path);
            break;
        }
        let adjacents = getAdjacent(startRow, startCol, visited, orientationList);
        adjacents.forEach(box => {
            let newPath = path.slice();
            newPath.push(box);
            stack = [newPath].concat(stack);
        })
    }
    display(visited, []);
}

export default DFSRun;