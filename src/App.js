import logo from './logo.svg';
import './App.css';
import Mvc from './SecondComponent.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Mvc />

      </header>
    </div>
  );
}

export default App;
