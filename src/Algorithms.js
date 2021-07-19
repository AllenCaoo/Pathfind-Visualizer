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
    let soFar = [];
    let firstBox = getElementByPos(startRow, startCol)
    queue.push([firstBox]);
    soFar.push(firstBox);
    while (queue.length != 0) {
        let path = queue[0];
        queue.shift();
        let node = path[path.length - 1];
        startRow = getRowFromId(node.id);
        startCol = getColFromId(node.id);
        if (startRow === endRow && startCol === endCol) {
            display(soFar, path);
            break;
        }
        let adjacents = getAdjacent(startRow, startCol, soFar);
        adjacents.forEach(box => {
            let newPath = path.slice();
            newPath.push(box);
            queue.push(newPath);
        })
    }
}

function getAdjacent(startRow, startCol, soFar) {
    let lst = [];
    addToQueue(lst, startRow - 1, startCol, soFar, false);
    addToQueue(lst, startRow, startCol - 1, soFar, false);
    addToQueue(lst, startRow + 1, startCol, soFar, false);
    addToQueue(lst, startRow, startCol + 1, soFar, false);
    return lst;
}

function getRowFromId(id) {
    let index = 0;
    let num = '';
    while (id.charAt(index) != '-') {
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

function addToQueue(queue, row, col, soFar, asList) {
    if (row < 0 || row > maxRow) { return; }
    if (col < 0 || col > maxCol) { return; }
    let box = getElementByPos(row, col);
    if (!soFar.includes(box) && box.style.backgroundColor != "black") {
        if (asList) {
            queue.push([box]);
        } else {
            queue.push(box);
            soFar.push(box);
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function display(queue, path) {
    console.log(queue);
    let ms = 0;
    for (let i = 0; i < queue.length; i++) {
        queue[i].style.backgroundColor = "blue";
        await sleep(ms);
    }
    for (let i = 0; i < path.length; i++) {
        path[i].style.backgroundColor = "yellow";
        await sleep(ms);
    }
    console.log('end');
}

