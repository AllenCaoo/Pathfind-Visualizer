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
    console.log("Running BFS");
    let queue = [];
    let curr;
    let soFar = [];
    let prev;
    queue.push(getElementByPos(startRow, startCol));
    while (queue.length != 0) {
        curr = queue[0];
        // TODO: pop off, color, loop, etc.
        queue.shift();
        startRow = getRowFromId(curr.id);
        startCol = getColFromId(curr.id);
        soFar.push(curr);
        prev = curr;
        startRow = getRowFromId(curr.id);
        startCol = getColFromId(curr.id);
        addToQueue(queue, startRow - 1, startCol, soFar);
        addToQueue(queue, startRow, startCol - 1, soFar);
        addToQueue(queue, startRow + 1, startCol, soFar);
        addToQueue(queue, startRow, startCol + 1, soFar);
    }
    display(soFar);
}

function getRowFromId(id) {
    let index = 0;
    let num = '';
    while (id.charAt(index) != '-'){
        num += id.charAt(index);
        index++;
    }
    return parseInt(num);
}


function getColFromId(id) {
    let index = id.search('-');
    return parseInt(id.substring(index + 1));
}


function getElementByPos(row, col) {
    return document.getElementById(`${row}-${col}`); 
}

function addToQueue(queue, row, col, soFar) {
    if (row < 0 || row > maxRow) { return; }
    if (col < 0 || col > maxCol) { return; }
    let box = getElementByPos(row, col);
    if (!queue.includes(box) && !soFar.includes(box)) {
        queue.push(box);
    }

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function display(queue) {
    let ms = 0;
    for (let i = 0; i < queue.length; i++) {
        queue[i].style.backgroundColor = "blue";
        await sleep(ms);
    }
    console.log('end');
}