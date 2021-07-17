import Header from './components/Header';
import Settings from './components/Settings';
import Board from './components/Board';
import {DFS, BFS, Dijkstras, A_star} from './Algorithms';

function App() {


  return ( // Has to return SINGLE element
    <div className="App">
      <Header/>
      <Settings/>
      <Board/>
    </div>
  );
}

export default App;
