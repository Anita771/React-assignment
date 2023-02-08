import React from 'react'
import './App.css';
import Searchbar from './Components/Searchbar';
import FetchAPI from './API/FetchApi';


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
        <FetchAPI/>
        
      </div>
      
    
    </div>

  );
}

export default App;