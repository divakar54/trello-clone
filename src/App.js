import './App.css';
import BoardInfoBar from './Components/BoardInfoBar/BoardInfoBar';
import Header from './Components/Header/Header';
import Router from './Container/Router';
import Layout from './layouts';

function App() {
  return (
      <div className="App">
        <Layout />
        <Router />
        <BoardInfoBar />
      </div>
  );
}

export default App;
