import logo from './logo.svg';
import './App.css';
import ParseFunctionAsProps from './ParseFunctionAsProps';
import New from './New';
function getdata(){
  alert("Helo from App.JS")
}
function App() {
  return (
    <div className="App">
      <h1>This is App.js</h1>
      <ParseFunctionAsProps data={getdata}/>
      <New data={getdata}/>
    </div>
  );
}

export default App;
