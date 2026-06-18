import logo from './logo.svg';
import './App.css';
import RenderMethod from './RenderMethod';
import React,{use, useState} from 'react';
function App() {
  const [name,setName] = useState("Farjad")
  return (
    <div className="App">
      <RenderMethod data={name}/>
      <button onClick={()=>setName("Farjad Ali")}>Click Me</button>
    </div>
  );
}

export default App;
