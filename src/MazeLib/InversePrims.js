import {getAdjacent, getRowFromId, getColFromId, getElementByPos,
    getAllBoxes, shuffle, orientationListToJson, nextToVisited, getFrontier, randNum, getBoxBetween, makeAllWhite} from '../utils';
import { maxRow, maxCol } from '../components/Board';
import { defaultOrientation } from '../components/Settings';


export default function runRandomInversePrims(startRow, startCol) {
    makeAllWhite();

    var orientations = defaultOrientation.splice();
    var blocked = new Set(getAllBoxHorizontal());
    let blackVisited = getAllBoxHorizontal();
    let whiteVisited = [getElementByPos(startRow, startCol)];
    let frontiers = [getElementByPos(startRow, startCol)];
    while (frontiers.length > 0) {
        shuffle(orientations);
        let index = randNum(0, frontiers.length);
        let currBox = frontiers[index];
        frontiers.splice(index, 1)
        startRow = getRowFromId(currBox.id);
        startCol = getColFromId(currBox.id);
        let adjsFrontiers = getFrontier(startRow, startCol, whiteVisited, 
            orientationListToJson(orientations));
        if (adjsFrontiers.length > 0) {
            let frontierBox = adjsFrontiers[0];
            let betweenBox = getBoxBetween(frontierBox, currBox);
            whiteVisited.push(currBox);
            whiteVisited.push(betweenBox);
            whiteVisited.push(frontierBox);
            adjsFrontiers.forEach((adj) => {
                frontiers.push(adj);
            });
        }
    }
    return {"visited": whiteVisited, "path": []};
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