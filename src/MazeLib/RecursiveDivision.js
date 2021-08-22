import {maxRow, maxCol} from '../components/Board';
import {getAdjacent, nextToVisited, getRowFromId, getColFromId, getElementByPos, 
        shuffle, orientationListToJson, makeAllWhite} from '../utils';
import {defaultOrientation} from '../components/Settings';

function recursiveDivRun() {
    return {"visited": [], "path": []}
}

function chooseCut() {
    direction = Math.floor((Math.random() * 2)) // 0 = horizontal; 1 = vertical
    if (direction == 0) {
        // horizonatal cut
    } else if (direction == 1) {
        // vertical cut
    }
}

export default recursiveDivRun;