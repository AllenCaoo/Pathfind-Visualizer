import { FaMarker } from 'react-icons/fa';
import {maxRow, maxCol} from '../components/Board';
import {getAdjacent, getAdjacentAllRound, randNum, getRowFromId, getColFromId, getElementByPos, 
        shuffle, orientationListToJson} from '../utils';

export default function runRecursiveBacktrack(startRow, startCol, endRow, endCol) {
    var orientations = ['N', 'E', 'S', 'W'];
    var blackVisited = getAllBoxHorizontal(); // turn all black

    function nextToVisited(box, visited, original) {
        let row = getRowFromId(box.id);
        let col = getColFromId(box.id);
        let adjs = getAdjacent(row, col, [], orientationListToJson(orientations));
        for (let i = 0; i < adjs.length; i++) {
            if (visited.includes(adjs[i]) && adjs[i] != original) {
                return true;
            }
        }
        return false;
    }

    function randomDFS(startRow, startCol, visited) {
        shuffle(orientations);
        let currBox = getElementByPos(startRow, startCol);
        visited.push(currBox);
        let validAdj = getAdjacent(startRow, startCol, visited, orientationListToJson(orientations), 
            (box) => { return !nextToVisited(box, visited, currBox); });
        for (let i = 0; i < validAdj.length; i++) {
            if (!nextToVisited(validAdj[i], visited, currBox)) {
                randomDFS(getRowFromId(validAdj[i].id), getColFromId(validAdj[i].id), visited);
            }   
        }
    }
    let whiteVisited = [];
    randomDFS(startRow, startCol, whiteVisited);  // turn white path
    return {"visited": blackVisited, "path": whiteVisited}
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