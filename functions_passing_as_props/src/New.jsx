import React from 'react'

function New(props) {
  return (
    <div>
        <h1>New Component</h1>
    
        {/* <button onClick={props.data}>Get Data</button> */}
        <button onClick={()=>props.data()}>Get Data</button>
    </div>
  )
  
}

export default New