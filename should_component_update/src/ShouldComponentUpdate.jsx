import React, { Component } from 'react'

class ShouldComponentUpdate extends Component {
    constructor(){
        super();
        this.state = {
            count :0
        }
    }
    shouldComponentUpdate(){
        console.log("Should component update")
        return true;
    }
  render() {
    return (
      <>
      <h1>Should Component Update | Lifecyle Method</h1>
      <h2>Count:{this.state.count}</h2>
      <button onClick={()=> {this.setState({count:this.state.count+1})}}>Click Me</button>
      </>
    )
  }
}

export default ShouldComponentUpdate