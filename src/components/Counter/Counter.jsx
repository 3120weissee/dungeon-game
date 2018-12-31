import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    const { value, incrementCounter, decrementCounter } = this.props
    return (
      <div>
        <div>{String(value)}</div>
        <button onClick={incrementCounter}>+</button>
        <button onClick={decrementCounter}>-</button>
      </div>
    )
  }
}