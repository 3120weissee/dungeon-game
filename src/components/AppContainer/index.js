import React, { Component } from 'react'
import './AppContainer.css'

export default class AppContainer extends Component {
  render() {
    const { children } = this.props
    return (
      <div className='main-container'>
        {children}
      </div>
    )
  }
}