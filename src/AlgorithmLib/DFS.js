import {getAdjacent, getRowFromId, getColFromId, getElementByPos} from '../utils';


function DFSRun(startRow, startCol, endRow, endCol, orientationalJson) {
    var visited = [];
    function DFSHelper(startRow, startCol, endRow, endCol, path, orientationalJson) {
        let node = getElementByPos(startRow, startCol)
        visited.push(node);
        path.push(node);
        if (startRow === endRow && startCol === endCol) { return path; }
        let adjacents = getAdjacent(startRow, startCol, visited, orientationalJson);
        if (!adjacents.length) { return null; }
        for (let i = 0; i < adjacents.length; i++) { // return in for each doesn't end the loop...
            if (visited.includes(adjacents[i])) {
                continue;
            }
            let pathCopy = path.slice();
            let row = getRowFromId(adjacents[i].id);
            let col = getColFromId(adjacents[i].id);
            let newPath = DFSHelper(row, col, endRow, endCol, pathCopy, orientationalJson);
            if (newPath) {
                return newPath;
            }
        };
    }
    let DFSPath = DFSHelper(startRow, startCol, endRow, endCol, [], orientationalJson);
    console.log(visited);
    if (DFSPath) {
        return {"visited": visited, "path": DFSPath};
    }
    return {"visited": visited, "path": []};
}

export default DFSRun;