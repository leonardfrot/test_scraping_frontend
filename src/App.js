import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
  const [show, setShow] = React.useState(false)
  const [show2, setShow2] = React.useState(false)
  return (
    <div className="App">
      <h1 id="titre de test">Titre de test pour click</h1>
      {
        show?<h2 id= "titre cache de test">Titre de test derrière bouton</h2> :null
      }
      <button id="toggle" onClick={()=>setShow(!show)}>Toggle</button>
      <h1 id="titre de test">Titre de test pour double click</h1>
      {
        show2?<h2 id= "titre cache de test2">Titre de test derrière bouton</h2> :null
      }
      <button id="toggle2" onDoubleClick={()=>setShow2(!show2)}>Toggle</button>
    </div>
    
  );
}

export default App;
