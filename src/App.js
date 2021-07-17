import Header from './components/Header';
import Settings from './components/Settings';
import Board from './components/Board';
import {DFS, BFS, Dijkstras, A_star} from './Algorithms';

function App() {

  const getAlgorithm = () => {
    let alg = document.getElementById('algorithms').options.value;
    console.log(alg);
    if (alg === "BFS") {
      return BFS;
    }
    return BFS;
  }

  return ( // Has to return SINGLE element
    <div className="App">
      <Header/>
      <Settings algorithm={getAlgorithm()} />
      <Board/>
    </div>
  );
}

export default App;
