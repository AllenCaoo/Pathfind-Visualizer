import Header from './components/Header';
import Settings from './components/Settings';
import Board from './components/Board';

function App() {

  return ( // Has to return SINGLE element
    <div className="App">
      <Header/>
      <hr></hr>
      <Settings />
      <Board/>
      <br></br>
    </div>
  );
}

export default App;
