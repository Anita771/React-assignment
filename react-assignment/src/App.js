import './App.css';
import Searchbar from './Components/Searchbar';
import Homepage from './Components/Homepage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='rightside'>
          <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/menu-rounded.png" alt='icon' />
          <p>
            Country
          </p>
        </div>
        <div className='leftside'>
          <img src="https://img.icons8.com/material-sharp/24/FFFFFF/search.png" alt='icon' />
          <Searchbar />
        </div>
      </header>
      <div>
        <Homepage/>
      </div>
    
    </div>

  );
}

export default App;
