import React, { Component } from 'react'

export default class HomePage extends Component {
  render() {
    const { value, goToCounter } = this.props
    return (
      <div>
        <div>
          {`Counter at ${value}`}
        </div>
        <button onClick={goToCounter}>
                    To Counter
        </button>
      </div>
    )
  }
}