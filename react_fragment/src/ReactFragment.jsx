import React from 'react'

function ReactFragment() {
  return (
    // <React.Fragment>
    //             <h1>React Fragment...</h1>
        

    // </React.Fragment>
    //below is short hand
     <>
                <h1>React Fragment...</h1>
        

    </>
    
    //</React.Fragment> used for optimzied it stops creating more
    //div tags we use our own component in index.js 
  )
}

export default ReactFragment