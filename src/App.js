import React from 'react'
import {HashRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Menu from './components/Menu';
import Pag1 from './components/Pag1';
import Page2 from './components/Page2';

function App() {
  return (
    <div className="App">


      <HashRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={<Pag1/>}/>
          <Route path='/page2' element={<Page2/>}/>
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
