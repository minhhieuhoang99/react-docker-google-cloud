import logo from './logo.svg';
import mangoooo from './mangoooo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mangoooo} className="App-logo" alt="logo" />
        <p>
        Hoàng Minh Hiếu v1.0.0
        </p>
        <a
          className="App-link"
          href="http://mango.viecrew.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mango viecrew
        </a>
      </header>
    </div>
  );
}

export default App;
