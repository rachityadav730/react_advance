import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(){
        super()

    }

     handleClick(){
        alert("Hello Moto")
    }

  render() {

    return (
      <div>
        <p>
            Hello class component 
        </p>
        <button onClick={this.handleClick}>
            Click Me
        </button>
      </div>
    )
  }
}
