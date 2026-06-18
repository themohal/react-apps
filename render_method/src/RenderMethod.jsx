import React, { Component } from 'react'

class RenderMethod extends Component {
    // constructor(){
    //     super();
    //     this.state={
    //         dep:"CS"
    //     }
    // }
  render() {
    console.log("Render method",this.props)
    // console.log("This is render method",this.state)
    return (
      <>
    
      <h1>Render | Lifecyle method</h1>
      <h3>Hello {this.props.data}</h3>
      {/* <h2>{this.state.dep} Deparment</h2> */}
      {/* <button onClick={()=> this.setState({dep:"IT"})}>Update State</button> */}
      </>
    )
  }
}

export default RenderMethod;
