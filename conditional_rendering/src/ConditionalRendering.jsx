import React,{useState} from "react"

function ConditionalRendering(){
    const [age,setAge] = useState(18)

    // if (vote===true){
    // return(
    //     <div>
    //         <h1>you can vote    </h1>
    //     </div>
    // )}
    // else {
    //     return (
    //         <div>
    //         <h1>you cant vote    </h1>
    //     </div>
    // )}

    // return(
    //     <div>
    //     {vote && <h1>you can vote</h1>}
    //     </div>
    // )
    return (
        <div>
            {
    age > 18 ? <h1>hello</h1> : <h1>Not hello</h1>
            }
    </div>
    )

}



export default ConditionalRendering;