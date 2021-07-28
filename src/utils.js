import {maxRow, maxCol} from './components/Board';

var numOrientations = 4;
var defaultOrientation = {
    'N': 1,
    'E': 2,
    'S': 3,
    'W': 4
}

const colorToRGB = {
    "black": "rgb(0, 0, 0)"
}

export function hasBackgroundColor(box, color) {
    return box.style.backgroundColor === color || box.style.backgroundColor === colorToRGB[color];
}

export function setBackgroundColor(box, color) {
    box.style.backgroundColor = color;
}

export function getAdjacent(startRow, startCol, soFar, orientationalJson) {
    /* Orientation:
            A
        D start B
            C
    A -> B -> C -> D
    */
   /* If invalid orientation, then orientation is NESW */
   function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
    }
  
    var oriToRowCol = {
        'N': [startRow - 1, startCol],
        'E': [startRow, startCol + 1],
        'S': [startRow + 1, startCol],
        'W': [startRow, startCol - 1]
    }
    let lst = [];
    for (let i = 1; i <= numOrientations; i++) {
        let ori = getKeyByValue(orientationalJson, i);
        let coords = oriToRowCol[ori];
        addToQueue(lst, coords[0], coords[1], soFar, false);
    }
    return lst;
}

export function orientationListToJson(orientationList) {
    let json = []
    for (let i = 1; i <= orientationList.length; i++) {
        json[orientationList[i - 1]] = i;
    }
    if (Object.keys(json).length < numOrientations) {
        return defaultOrientation;
    } else {
        return json;
    }
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

// TODO: try weight stuff
export function getDist(box1, box2) {
    if (distBetweenBoxes(box1, box2) != 1) {
        return null; // not connected
    }
    return 1;
}

/* Bias in wanting puts more weight on difference in rows */
export function biasManhattan(box, targetBox) {
    let row1 = getRowFromId(box.id);
    let col1 = getColFromId(box.id);
    let row2 = getRowFromId(targetBox.id);
    let col2 = getColFromId(targetBox.id);
    return 2*(Math.abs(col2 - col1) + 5*Math.abs(row2 - row1)); 
    // scaled by 3 for better results
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

/* Also in Engine class */
export async function display(queue, path) {
    let ms = 0;
    let r = 64
    let g = 224;
    let b = 208
    for (let i = 0; i < queue.length; i++) {
        if (hasBackgroundColor(queue[i], "white")) {  // don't override green or red
            setBackgroundColor(queue[i], `rgb(${r}, ${g}, ${b})`);
            setTimeout(function () { overlapDisplay(queue[i], r - 1, g - 3, b - 3); }, 500);
        }
        await sleep(ms);
    }
    let pathMS = 20;
    for (let i = 0; i < path.length; i++) {
        setBackgroundColor(path[i], "yellow");
        await sleep(pathMS);
    }
    console.log('Displayed');
}


/* rgb(64, 187, 224), rgb(56, 164, 197), rgb(48, 134, 160), rgb(48, 106, 160); */
async function overlapDisplay(box, r, g, b) {
    if (r < 20 || g <= 50 || b <= 50 || hasBackgroundColor(box, "yellow")) {
        return;
    }
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    await sleep(100);
    await overlapDisplay(box, r - 2, g - 6, b - 6);
}

export function getAllBoxes() {
    let rows = [];
    for (let row = 0; row <= maxRow; row++) {
        let cols = []
        for (let col = 0; col <= maxCol; col++) {
            cols.push(document.getElementById(`${row}-${col}`));
        }
        rows.push(cols);
    }
    return rows;
} 

/* Deprecated MinHeap, maybe will be used later
export class MinHeap {
    constructor(boxes, sourceBox) {
        this.arrayRep = [null]; // 0th position is sentinel
        this.sourceBox = sourceBox;
        boxes.forEach(box => {
            let node = new Node(box, sourceBox);
            if (node === sourceBox) {
                this.arrayRep = [null, node].concat(this.arrayRep.subarray(1, this.arrayRep.length));
            }
            this.addNode(new Node(box, sourceBox));
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

    // Node added to end of arrayRep, swims up //
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

    addBox(box) {
        let node = new Node(box, this.sourceBox);
        this.addNode(node);
    }

    popSmallest() {
        if (!this.isEmpty) {
            let smallest = this.arrayRep[1];
            this.arrayRep[1] = this.arrayRep[this.arrayRep.length - 1];
            this.arrayRep.pop();
            this.sink(1);
            return smallest;
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

export class Node {
    constructor(box, sourceBox) {
        this.box = box;
        this.sourceBox = sourceBox;
        this.distTo = box === sourceBox ? 0 :Infinity;
    }
}

*/
