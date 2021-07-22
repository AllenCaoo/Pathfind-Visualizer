import Header from './components/Header';
import Settings from './components/Settings';
import Board from './components/Board';
import {DFS, BFS, Dijkstras, A_star} from './Algorithms';
import SubHeader from './components/SubHeader';

function App() {

  const nameToAlgs = {
    "DI": Dijkstras,
    "DFS": DFS,
    "BFS": BFS,
    "A*": A_star
  }

  return ( // Has to return SINGLE element
    <div className="App">
      <Header/>
      <Settings nameToAlgs={nameToAlgs} />
      <Board/>
      <br></br>
    </div>
  );
}

export default App;
