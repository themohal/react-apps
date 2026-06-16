import React,{useState} from 'react';
function GetInputFieldValue() {
const [inputValue, setInputValue] = useState(null);
const [print, setPrint] = useState(false);


function handleInputChange(value) {
    setInputValue(value.target.value);
    setPrint(false);
}
return (
<div>
    {
        print ? <h1>{inputValue}</h1> : null
    }
    {/* <h1>Input Value: {inputValue}</h1> */}
    <input type="text" id="myInput" value={inputValue} onChange={(e) => handleInputChange(e)} />
    
    <button onClick={() => {
        setPrint(true);
    }}>
        Get Input Value
    </button>               
</div>
);}

export default GetInputFieldValue;