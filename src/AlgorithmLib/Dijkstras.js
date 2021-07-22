import A_star_run from './A_star'


var visited = []
var distTo = {}
// var edgeTo = {} // may not be necessary
var stack = []
var heuristic = (box1, box2) => { return 1 };
function DijkstrasRun(startRow, startCol, endRow, endCol) {
    A_star_run(startRow, startCol, endRow, endCol, heuristic=heuristic);
}

export default DijkstrasRun;