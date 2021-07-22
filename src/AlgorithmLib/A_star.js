import {getAdjacent, getRowFromId, getColFromId, getElementByPos, display,
        getAllBoxes, A_star_heuristic} from './utils';


var visited = []
var distTo = {}
// var edgeTo = {} // may not be necessary
var stack = []
function A_star_run(startRow, startCol, endRow, endCol, heuristic=A_star_heuristic) {
    var source = getElementByPos(startRow, startCol);
    var target = getElementByPos(endRow, endCol);
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
        let path = stack[0];
        stack.shift();
        let box = path[path.length - 1];
        if (visited.includes(box)) {
            continue;
        }
        visited.push(box);
        if (getRowFromId(box.id) === endRow && getColFromId(box.id) === endCol) {
            display(visited, path);
            break;
        }
        relax(box, path, heuristic, target);
    }
    display(visited, []);
    reset();
}


function relax(box, path, heuristic, target) {
    let adjacents = getAdjacent(getRowFromId(box.id), getColFromId(box.id), visited);
    adjacents.forEach(adj => {
        let pathCopy = path.slice();
        let newAdjDist = 1 + distTo[box.id] + heuristic(adj, target);
        let oldAdjDist = distTo[adj.id];
        if (newAdjDist < oldAdjDist) {
            distTo[adj.id] = newAdjDist;
            // edgeTo[adj.id] = box.id;
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

export default A_star_run;