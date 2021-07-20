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
    constructor(boxes, sourceBox) {
        this.arrayRep = [null]; // 0th position is sentinel
        this.source = new Node(sourceBox, sourceBox);
        this.arrayRep[1] = this.source;
        boxes.forEach(box => {
            this.addNode(new Node(box));
        });
    }

    isEmpty() {
        return this.arrayRep.length < 2;
    }

    compareNodes(node1, node2) {
        return node1.distTo - node2.distTo;
    }

    parentIndex(index) {
        return parseInt(index / 2);
    }

    parent(index) {
        return this.parentIndex(index) < 1 ? 
                null : this.arrayRep[this.parentIndex(index)];
    }

    rightChildIndex(index) {
        return index * 2 + 1;
    }

    rightChild(index) {
        return index * 2 + 1 >= this.arrayRep.length ? 
                null : this.arrayRep[this.rightChildIndex(index)];
    }

    leftChildIndex(index) {
        return index * 2;
    }

    leftChild(index) {
        return index * 2 >= this.arrayRep.length ? 
                null : this.arrayRep[this.leftChildIndex(index)];
    }

    /* Node added to end of arrayRep, swims up */
    addNode(node) {
        this.arrayRep.push(node);
        let k = this.arrayRep.length - 1;
        while (this.parent(k) 
                && this.compareNodes(this.parent(k), node) > 0) { // node has lower distTo
            let newIndex = this.parentIndex(k);
            let prevParent = this.parent(k);
            this.arrayRep[newIndex] = node;
            this.arrayRep[k] = prevParent;
            k = newIndex;
        }
    }

    popSmallest() {
        if (!this.isEmpty) {
            this.arrayRep[1] = this.arrayRep[this.arrayRep.length - 1];
            this.arrayRep.pop();
            this.sink(1);
        } else {
            return null;
        }
    }

    sink(index) {
        let node = this.arrayRep[index];
        let leftIndex = this.leftChildIndex(index);
        let rightIndex = this.rightChildIndex(index);
        let left = this.leftChild(index);
        let right = this.rightChild(index)
        if (left && right) {
            if (this.compareNodes(node, left) <= 0 && this.compareNodes(node, right) <= 0) {
                return;
            }
            let cp = this.compareNodes(left, right);
            if (cp <= 0) {
                // sink to the left
                this.arrayRep[leftIndex] = node;
                this.arrayRep[index] = left;
                this.sink(leftIndex);
            } else {
                // sink to the right
                this.arrayRep[rightIndex] = node;
                this.arrayRep[index] = right;
                this.sink(rightIndex);
            }
        } else if (left) {
            let cp = this.compareNodes(node, left);
            if (cp <= 0) {
                return;
            } else {
                // sink to the left
                this.arrayRep[leftIndex] = node;
                this.arrayRep[index] = left;
                this.sink(leftIndex);
            }
        } else if (right) {
            let cp = this.compareNodes(node, right);
            if (cp <= 0) {
                return;
            } else {
                // sink to the left
                this.arrayRep[rightIndex] = node;
                this.arrayRep[index] = right;
                this.sink(rightIndex);
            }
        }
    }

}

class Node {
    constructor(box, source) {
        this.source = source;
        this.box = box;
        this.distTo = Infinity;
    }
}
