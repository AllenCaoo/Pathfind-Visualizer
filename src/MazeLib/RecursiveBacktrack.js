import {maxRow, maxCol} from '../components/Board';

export default function runRecursiveBacktrack(startRow, startCol, endRow, endCol) {
    return {"visited": getAllBoxHorizontal(), "path": []};
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