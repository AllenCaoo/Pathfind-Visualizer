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

export async function BFS(startRow, startCol, endRow, endCol) {
    console.log("Running BFS");
    let queue = [];
    let curr;
    queue.push(getElementByPos(startRow, startCol));
    while (queue.length != 0) {
        curr = queue[0];
        // TODO: pop off, color, loop, etc.
        queue.shift();
        curr.style.backgroundColor = "blue";
        await sleep(100);
        startRow = getRowFromId(curr.id);
        startCol = getColFromId(curr.id);
        addToQueue(queue, startRow - 1, startCol);
        addToQueue(queue, startRow - 1, startCol - 1);
        addToQueue(queue, startRow, startCol - 1);
        addToQueue(queue, startRow + 1, startCol - 1);
        addToQueue(queue, startRow + 1, startCol);
        addToQueue(queue, startRow + 1, startCol + 1);
        addToQueue(queue, startRow, startCol + 1);
        addToQueue(queue, startRow - 1, startCol + 1);
    }
    
}

function getRowFromId(id) {
    return parseInt(id.charAt(0));
}


function getColFromId(id) {
    return parseInt(id.charAt(2));
}


function getElementByPos(row, col) {
    return document.getElementById(`${row}-${col}`); 
}

function addToQueue(queue, row, col) {
    if (row < 0 || row > maxRow - 1) { return; }
    if (col < 0 || col > maxCol - 1) { return; }
    let box = getElementByPos(row, col);
    if (!queue.includes(box)) {
        console.log(`${row}, ${col}, ${box.style.backgroundColor}`);
        queue.push(box);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}