import {getAdjacent, getRowFromId, getColFromId, getElementByPos, 
        getAllBoxes, display, getDist} from './utils';


var visited = []
var distTo = {}
var edgeTo = {} // may not be necessary
var stack = []
function DijkstrasRun(startRow, startCol, endRow, endCol) {
    var source = getElementByPos(startRow, startCol);
    let allBoxes = getAllBoxes();
    for (let row = 0; row < allBoxes.length; row++) {
        for (let col = 0; col < allBoxes[0].length; col++) {
            distTo[allBoxes[row][col].id] = Infinity;
            edgeTo[allBoxes[row][col].id] = null;
        }
    }
    stack.push([source])
    distTo[source.id] = 0;
    edgeTo[source.id] = null;
    while (stack) {
        let path = stack[0];
        stack.shift();
        let box = path[path.length - 1];
        visited.push(box);
        if (getRowFromId(box.id) === endRow && getColFromId(box.id) === endCol) {
            display(visited, path);
            break;
        }
        relax(box, path);
    }
    display(visited, []);
    reset();
}


function relax(box, path) {
    let adjacents = getAdjacent(getRowFromId(box.id), getColFromId(box.id), visited);
    adjacents.forEach(adj => {
        let pathCopy = path.slice();
        let newAdjDist = distTo[box] + getDist(box, adj);
        let oldAdjDist = distTo[adj.id];
        if (newAdjDist < oldAdjDist) {
            distTo[adj.id] = newAdjDist;
            edgeTo[adj.id] = box.id;
        }
        pathCopy.push(adj);
        stack.push(pathCopy);
    });
    if (adjacents) {
        stack.sort(function(path1, path2) {
            return distTo[path1[path1.length - 1].id] - distTo[path2[path2.length - 1].id];
        });
    } 
}


function reset() {
    visited = [];
    distTo = {};
    stack = []
}

export default DijkstrasRun;