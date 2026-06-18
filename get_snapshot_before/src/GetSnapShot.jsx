import React, { Component } from 'react'

class GetSnapShot extends Component {
    componentDidUpdate(prevProp,prevState,snapshot){
        console.log("Component did update",snapshot,this.props.data)
    
}
getSnapshotBeforeUpdate(prepops,preState){
    console.log("getSnapshotBeforeUpdate",prepops)
    return "Hello" +prepops;
}

  render() {
    return (
      <>
        <h1>Get SnapShot Before Update | Lifecycle</h1>
        <h2>{this.props.data}</h2>
      </>
    )
  }
}

export default GetSnapShot