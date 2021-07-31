import { makeAllWhite, setBackgroundColor } from '../utils';
import {maxRow, maxCol} from '../components/Board';

export default function runBlankMaze(startPos, endPos) {
    makeAllWhite();
    return {"visited": [], "path": []};
}