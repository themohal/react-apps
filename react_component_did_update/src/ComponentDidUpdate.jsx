import React, { Component } from 'react'

class ComponentDidUpdate extends Component {
    constructor(){
        super();
        console.log("Constructor")
        this.state= {
            count:0
        }

    }
    componentDidUpdate(prevProp,prevState,snapshot){
        console.log("Component did upadate",prevState,this.state)
        // if (prevState.count===this.state.count){
        //     alert("Counts are Same value")
        // }
        this.setState(this.state.count+1)
    }
    render() {

        
        console.log("Render...")
    return (
        <>
      <h1>Component Did Update | Lifecycle Method</h1>
      <h3>{this.state.count}</h3>
      <button onClick={()=>{this.setState({count:4})}}>Click Me</button>
      </>
    )
  }
}

export default ComponentDidUpdate;
