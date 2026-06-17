import React, { Component } from 'react'

export class Constructor extends Component {
    constructor(){
        super()
        // console.log("Main constructor hon...")
        this.state={
            name:"Hello!.. Farjad Ali"
        }
    }
  render() {
    // console.log("Main render hon...")
    return (
      <>
      <h1>Constructor | Lifecyle method</h1>
      <h3>{this.state.name}</h3>
      </>
    )
  }
}

export default Constructor