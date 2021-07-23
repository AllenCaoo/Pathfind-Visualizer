import A_star_run from './A_star'

function DijkstrasRun(startRow, startCol, endRow, endCol, orientationList) {
    return A_star_run(startRow, startCol, endRow, endCol, orientationList, heuristic);
}

var heuristic = (box1, box2) => { return 0; };

export default DijkstrasRun;