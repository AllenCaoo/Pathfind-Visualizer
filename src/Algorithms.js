import {maxRow, maxCol} from './components/Board';
/* When neighbors are same length away, break tie by whoever comes first in a counterclocwise
    rotation, starting from the box directly above the starting position.
    For example:
        B    A    H
        C  Start  G
        D    E    F
    BFS results in A-B-C-D-E-F-G
    */

export function Dijkstras(startRow, startCol, endRow, endCol) {

}

export function A_star(startRow, startCol, endRow, endCol) {
    
}

export function DFS(startRow, startCol, endRow, endCol) {
    
}

export function BFS(startRow, startCol, endRow, endCol) {
    let queue = [];
    let curr = getElementByPos(startRow, startCol);
    queue.push(curr);
    while (queue.length != 0) {
        addToQueue(queue, getElementByPos(startRow - 1, startCol));
        addToQueue(queue, getElementByPos(startRow - 1, startCol - 1));
        addToQueue(queue, getElementByPos(startRow, startCol - 1));
        addToQueue(queue, getElementByPos(startRow + 1, startCol - 1));
        addToQueue(queue, getElementByPos(startRow + 1, startCol));
        addToQueue(queue, getElementByPos(startRow + 1, startCol) + 1);
        addToQueue(queue, getElementByPos(startRow, startCol + 1));
        addToQueue(queue, getElementByPos(startRow - 1, startCol + 1));
        // TODO: pop off, color, loop, etc.
    }
    
}

function getElementByPos(row, col) {
    return document.getElementById(`${row}-${col}`); 
}

function addToQueue(queue, row, col) {
    if (row < 0 || row > maxRow) { return; }
    if (col < 0 || col > maxCol) { return; }
    let box = getElementByPos(row, col);
    if (box.style.backgroundColor == "white") {
        queue.push(box);
    }
}