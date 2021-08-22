import {maxRow, maxCol} from '../components/Board';
import {getAdjacent, nextToVisited, getRowFromId, getColFromId, getElementByPos, 
        shuffle, orientationListToJson, makeAllWhite, setBackgroundColor} from '../utils';
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

function generateCut(isVertical, pos, end) {
    if (isVertical) {
        opening = Math.floor((Math.random() * maxCol))
        for (let col = 0; col < end; i++) {
            if (col != opening) {
                setBackgroundColor(getElementByPos(pos, col))
            }
        }
    } else {
        opening = Math.floor((Math.random() * maxRow))
        for (let row = 0; row < end; row++) {
            if (col != opening) {
                setBackgroundColor(getElementByPos(row, pos))
            }
        }
    }
}

export default recursiveDivRun;