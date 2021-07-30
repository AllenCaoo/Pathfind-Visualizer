import { FaMarker } from 'react-icons/fa';
import {maxRow, maxCol} from '../components/Board';
import {getAdjacent, nextToVisited, getRowFromId, getColFromId, getElementByPos, 
        shuffle, orientationListToJson} from '../utils';
import {defaultOrientation} from '../components/Settings';

export default function runRecursiveBacktrack(startRow, startCol) {
    var orientations = defaultOrientation;
    var blackVisited = getAllBoxHorizontal(); // turn all black
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