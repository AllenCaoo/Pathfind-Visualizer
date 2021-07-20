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
      <SubHeader text="Page is currently under construction. Some features will be unavailable." 
        color="purple"/>
      <Settings nameToAlgs={nameToAlgs} />
      <SubHeader text="Click on boxes to create walls!" color="black" />
      <Board/>
    </div>
  );
}

export default App;
