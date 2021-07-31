import {getAdjacent, getRowFromId, getColFromId, getElementByPos,
    getAllBoxes, shuffle, orientationListToJson, nextToVisited, getFrontier, randNum, getBoxBetween, makeAllWhite} from '../utils';
import { maxRow, maxCol } from '../components/Board';
import { defaultOrientation } from '../components/Settings';


export default function runRandomPrims(startRow, startCol) {

    makeAllWhite();

    function isBlocked(box) {
        return blocked.has(box);
    }

    function makePassage(box) {
        whiteVisited.push(box);
        passage.add(box);
        blocked.delete(box);
    }

    var orientations = defaultOrientation.splice();
    var blocked = new Set(getAllBoxHorizontal());
    var passage = new Set();
    let blackVisited = getAllBoxHorizontal();
    let start = getElementByPos(startRow, startCol);
    let whiteVisited = [start];
    let frontiers = getFrontier(startRow, startCol, passage, 
        orientationListToJson(orientations));
    makePassage(start);
    while (frontiers.length > 0) {
        shuffle(orientations);
        let index = randNum(0, frontiers.length);
        let currBox = frontiers[index];
        startRow = getRowFromId(currBox.id);
        startCol = getColFromId(currBox.id);
        let passageNeighbors = getFrontier(startRow, startCol, blocked, 
            orientationListToJson(orientations));
        if (passageNeighbors.length > 0) {
            let oldFrontierBox = passageNeighbors[0];
            let betweenBox = getBoxBetween(oldFrontierBox, currBox);
            makePassage(betweenBox);
            makePassage(currBox);
        }
        let newFrontiers = getFrontier(startRow, startCol, passage, 
            orientationListToJson(orientations));
        newFrontiers.forEach((frontier) => {
            frontiers.push(frontier);
        });
        frontiers.splice(index, 1);
    }
    return {"visited": blackVisited, "path": whiteVisited};
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
