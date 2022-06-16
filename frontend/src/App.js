import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header class="App-header"> 
        <img src="https://media.giphy.com/media/kG3EDN0eXqq4V1Pd6W/giphy-downsized-large.gif" width="92" height="80"/>
      </header>
      {/* Dropdown menus */}
      <div class="dropdown">
        <button class="dropbtn">Dropdown 1</button>
        <div class="dropdown-content">
          <a href="#">Link 1.1</a>
          <a href="#">Link 1.2</a>
          <a href="#">Link 1.3</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Dropdown 2</button>
        <div class="dropdown-content">
          <a href="#">Link 2.1</a>
          <a href="#">Link 2.2</a>
          <a href="#">Link 2.3</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Dropdown 3</button>
        <div class="dropdown-content">
          <a href="#">Link 3.1</a>
          <a href="#">Link 3.2</a>
          <a href="#">Link 3.3</a>
        </div>
      </div>
    </div>
    
)}

export default App;
