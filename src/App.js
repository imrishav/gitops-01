import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div style={{ fontSize: 30 }}>
          Version <span style={{ color: 'red' }}>First Commit....!!!</span>
        </div>
      </header>
    </div>
  );
}

export default App;
