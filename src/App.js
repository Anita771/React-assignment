import React from 'react'
import './App.css';
import FetchAPI from './API/FetchApi';
import Navbarcom from './Components/Navbarcom';
import "bootstrap/dist/css/bootstrap.min.css";
import Paginationdata from './Components/Paginationdata';


export default function App() {

  return (
    <div className="App">
      
      <div>
        <Navbarcom/>
        <FetchAPI />
        <div>
        <Paginationdata/>
        </div>
        </div>


    </div>

  );
}

