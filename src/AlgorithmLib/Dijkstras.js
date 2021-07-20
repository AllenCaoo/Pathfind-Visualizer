import {getAdjacent, getRowFromId, getColFromId, getElementByPos, 
        distBetweenBoxes, distBetweenIds, display, MinHeap} from './utils';

function DijkstrasRun(startRow, startCol, endRow, endCol) {
    var source = getElementByPos(startRow, startCol);
    testHeaps();
}

function testHeaps() {
    let source = document.getElementById('10-10');
    let boxes = [document.getElementById('10-10'), document.getElementById('10-11'),
                document.getElementById('10-12'), document.getElementById('10-13'),
                document.getElementById('10-14'), document.getElementById('10-15'),
                document.getElementById('10-16'), document.getElementById('10-17'),
                document.getElementById('10-18'), document.getElementById('10-19')];
    let heap = new MinHeap(boxes, source);
}

export default DijkstrasRun;