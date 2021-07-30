import {getAdjacent, getRowFromId, getColFromId, getElementByPos,
    getAllBoxes, shuffle, orientationListToJson} from '../utils';
import { maxRow, maxCol } from '../components/Board';
import { defaultOrientation } from '../components/Settings';


export default function runRandomPrims(startRow, startCol) {
    let orientations = defaultOrientation.slice();
    var visited = []
    var distTo = {}
    // var edgeTo = {} // may not be necessary
    var stack = []
    var source = getElementByPos(startRow, startCol);
    let allBoxes = getAllBoxes();
    for (let row = 0; row < allBoxes.length; row++) {
        for (let col = 0; col < allBoxes[0].length; col++) {
            distTo[allBoxes[row][col].id] = Infinity;
            // edgeTo[allBoxes[row][col].id] = null;
        }
    }
    stack.push([source]);
    distTo[source.id] = 0;
    // edgeTo[source.id] = null;
    while (stack.length != 0) {
        shuffle(orientations);
        let path = stack[0];
        stack.shift();
        let box = path[path.length - 1];
        if (visited.includes(box)) {
            continue;
        }
        visited.push(box);
        relax(box, path, visited, stack, distTo, orientationListToJson(orientations));
    }
    return {"visited": getAllBoxHorizontal(), "path": visited};
}


function relax(box, path, visited, stack, distTo, orientationalJson) {
    let adjacents = getAdjacent(getRowFromId(box.id), getColFromId(box.id), visited, orientationalJson);
    adjacents.forEach(adj => {
        let pathCopy = path.slice();
        let newAdjDist = 1;
        let oldAdjDist = distTo[adj.id];
        if (newAdjDist < oldAdjDist) {
            distTo[adj.id] = newAdjDist;
            // edgeTo[adj.id] = box.id;
        }
        pathCopy.push(adj);
        stack.push(pathCopy);
    });
}

function getAllBoxHorizontal() {
    let lst = []
    for (let row = 0; row <= maxRow; row++) {
        for (let col = 0; col <= maxCol; col++) {
            lst.push(document.getElementById(`${row}-${col}`));
        }
    }
    return lst;
}
