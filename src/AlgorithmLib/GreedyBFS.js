import A_star_run from './A_star';
import {getAdjacent, getRowFromId, getColFromId} from './utils';

function GreedyRun(startRow, startCol, endRow, endCol, orientationList) {
    A_star_run(startRow, startCol, endRow, endCol, orientationList, undefined, greedyRelax);
}

const greedyRelax = (box, path, heuristic, target, orientationalJson, visited, distTo, stack) => {
    let adjacents = getAdjacent(getRowFromId(box.id), getColFromId(box.id), visited, orientationalJson);
    adjacents.forEach(adj => {
        let pathCopy = path.slice();
        let newAdjDist = heuristic(adj, target);
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

export default GreedyRun;