import A_star_run from './A_star'


var visited = []
var distTo = {}
// var edgeTo = {} // may not be necessary
var stack = []
var heuristic = (box1, box2) => { return 0; };
function DijkstrasRun(startRow, startCol, endRow, endCol, orientationList) {
    A_star_run(startRow, startCol, endRow, endCol, orientationList, heuristic=heuristic);
}

export default DijkstrasRun;