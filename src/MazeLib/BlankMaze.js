import { setBackgroundColor } from '../utils';
import {maxRow, maxCol} from '../components/Board';

export default function runBlankMaze(startPos, endPos) {
    for (let row = 0; row <= maxRow; row++) {
        for (let col = 0; col <= maxCol; col++) {
            let box = document.getElementById(`${row}-${col}`);
            if (row === startPos[0] && col === startPos[1]) {
                setBackgroundColor(box, "green");
            } else if (row === endPos[0] && col === endPos[1]) {
                setBackgroundColor(box, "red");
            } else {
                setBackgroundColor(box, "white");
            }
        }
    }
    return {"visited": [], "path": []};
}