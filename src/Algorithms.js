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
    let count = 0;
    queue.push(getElementByPos(startRow, startCol));
    while (queue.length != 0) {
        if (count == 100000) {
            break;
        }
        count++;
        curr = queue[0];
        // TODO: pop off, color, loop, etc.
        queue.shift();
        try {
            startRow = getRowFromId(curr.id);
            startCol = getColFromId(curr.id);
        } catch (error) {
            console.log(`previous: ${soFar[soFar.length - 3].id}, 
                                   ${soFar[soFar.length - 2].id}, 
                                   ${soFar[soFar.length - 1].id}`);
            console.log(curr);
        }
        soFar.push(curr);
        prev = curr;
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

function addToQueue(queue, row, col) {
    if (row < 0 || row > maxRow) { return; }
    if (col < 0 || col > maxCol) { return; }
    let box = getElementByPos(row, col);
    // console.log(`${row}, ${col}`);
    // console.log(`${row}, ${col}, ${box.style.backgroundColor}`);
    if (!queue.includes(box)) {
        queue.push(box);
        // console.log(`${row}-${col}`);
        if (box == null) {
            console.log(`This is null: ${row}, ${col}`);
        }
    }

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function display(queue) {
    for (let i = 0; i < queue.length; i++) {
        queue[i].style.backgroundColor = "blue";
        let ms = 0;
        await sleep(ms);
    }
    console.log('end');
}