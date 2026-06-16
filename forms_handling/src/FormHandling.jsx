import React,{useState} from "react";
function FormHandling(){

    const [name, setName] = useState("")
    const [option,setOption] = useState("")
    const [agree,setAgree] = useState(false)
    function getFormData(e){
        e.preventDefault(); // override auto page referesh on submit button
        
    }
return(
    <div>
        <h1>This is from FormHandling</h1>

        <form onSubmit={getFormData}>
            <input type="text" placeholder="enter the text..." onChange={(e)=>setName(e.target.value)}></input>
            <br></br>
            <select onChange={(e)=>setOption(e.target.value)}>
                <option>Select any option</option>
                <option>first</option>
                <option>second</option>
                <option>third</option>
            </select>
            <br></br>
            <input type="checkbox" onChange={(e)=>setAgree(e.target.checked)}></input>
            <br></br>
            <button type="submit">Submit</button>

        </form>
        <h2>Form Values:</h2>
        <h3>Input Value:{name}</h3>
        <h3>Options:{option}</h3>
        <h3>Check Box:{agree}</h3>
    </div>
)
}

export default FormHandling;