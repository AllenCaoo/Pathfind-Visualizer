import {maxRow, maxCol} from '../components/Board';



export function getAdjacent(startRow, startCol, soFar) {
    /* Orientation:
            A
        D start B
            C
    A -> B -> C -> D
    */
    let lst = [];
    addToQueue(lst, startRow - 1, startCol, soFar, false);
    addToQueue(lst, startRow, startCol + 1, soFar, false);
    addToQueue(lst, startRow + 1, startCol, soFar, false);
    addToQueue(lst, startRow, startCol - 1, soFar, false);
    return lst;
}

export function getRowFromId(id) {
    let index = 0;
    let num = '';
    while (id.charAt(index) != '-') {
        num += id.charAt(index);
        index++;
    }
    return parseInt(num);
}


export function getColFromId(id) {
    let index = id.search('-');
    return parseInt(id.substring(index + 1));
}


export function getElementByPos(row, col) {
    return document.getElementById(`${row}-${col}`); 
}


export function distBetweenIds(id1, id2) {
    let row1 = getRowFromId(id1);
    let col1 = getColFromId(id1);
    let row2 = getRowFromId(id2);
    let col2 = getColFromId(id2);
    return Math.sqrt((row1 - row2)**2 + (col1 - col2)**2);
}


export function distBetweenBoxes(box1, box2) {
    let id1 = box1.id;
    let id2 = box2.id;
    let row1 = getRowFromId(id1);
    let col1 = getColFromId(id1);
    let row2 = getRowFromId(id2);
    let col2 = getColFromId(id2);
    return Math.sqrt((row1 - row2)**2 + (col1 - col2)**2);
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
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function display(queue, path) {
    let ms = 0;
    for (let i = 0; i < queue.length; i++) {
        if (queue[i].style.backgroundColor === "white") {  // don't override green or red
            queue[i].style.backgroundColor = "blue";
        }
        await sleep(ms);
    }
    let pathMS = 20;
    for (let i = 0; i < path.length; i++) {
        path[i].style.backgroundColor = "yellow";
        await sleep(pathMS);
    }
    console.log('Displayed');
}


export class MinHeap {
    constructor(elements, source) {
        this.source = new Node(source);
    }

    compareNodes(node1, node2) {
        
    }

    addNode(node) {

    }

    popSmallest() {

    }

}

class Node {
    constructor(box) {
        this.box = box;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }
}

