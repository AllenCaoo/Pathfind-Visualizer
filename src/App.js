import Header from './components/Header';
import Settings from './components/Settings';
import Board from './components/Board';
import {DFS, BFS, Dijkstras, A_star, Greedy} from './Algorithms';
import SubHeader from './components/SubHeader';

function App() {

  const nameToAlgs = {
    "DI": Dijkstras,
    "DFS": DFS,
    "BFS": BFS,
    "A*": A_star,
    "GREEDY": Greedy
  }

  return ( // Has to return SINGLE element
    <div className="App">
      <Header/>
      <hr></hr>
      <Settings nameToAlgs={nameToAlgs} />
      <Board/>
      <br></br>
    </div>
  );
}

export default App;
