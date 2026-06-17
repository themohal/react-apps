import React from 'react'

function ParseFunctionAsProps(props) {
  return (
    <div>

        <h1> This is from Parse Function </h1>
        {/* <button onClick={props.data}>Get Data</button> */}
        <button onClick={()=>props.data()}>Get Data</button>
    </div>
  )
}

export default ParseFunctionAsProps