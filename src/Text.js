import React, { Component } from 'react'
import Button from '@mui/material/Button';

export default class Classdemo extends Component {
constructor(props){
    super(props);
    this.state={value:false};
}
handleShow = () => {
    this.setState({
        value:true
    });
}
handleHide= () => {
    this.setState({
        value:false
    });
}

  render() {
    if(this.state.value){
    return (
      <div>
      <h3>Hello Everybody!</h3>
      <Button onClick={this.handleHide} variant="contained" size="large" >Hide</Button>
      </div>
      )}
      else{
        return( 
          <Button onClick={this.handleShow} variant="contained" size="large" >Show</Button>
        )
      }
    }

  }