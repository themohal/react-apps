import React,{useState} from "react";
function HideShowToggle(){

    const [result,setResult] = useState(true)
    function toggle(){
        if (result === true) 
            setResult(false)
        else {setResult(true)}
}
    return (
        <div>
            <h2> This is a simple hide/show toggle component </h2>

            {
                result ? <h3>Helllo......</h3> : null
            }
            
            {/* <button style={{marginRight:"20px"}} onClick={()=> setResult(false)}> Hide</button>
            <button onClick={()=> setResult(true)}>Show</button> */}
            <button onClick={()=>setResult(!result)}> Toggle</button>
        </div>
    )};


export default HideShowToggle;
