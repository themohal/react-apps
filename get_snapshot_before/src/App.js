import logo from './logo.svg';
import './App.css';
import GetSnapShot from './GetSnapShot';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("Farjad")
  return (
    <div className="App">
      <GetSnapShot data={name}/>
      <button onClick={()=>setName("Farjad Ali")}>Click Me</button>
    </div>
  );
}

export default App;
