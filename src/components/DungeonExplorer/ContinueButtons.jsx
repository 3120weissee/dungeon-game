import React, { Component } from 'react'

export default class ContinueButtons extends Component {
  componentDidMount() {
    const { currentFloor, unlockFloor, isLastFloor } = this.props
    if(!isLastFloor) unlockFloor(currentFloor+1)
  }

  getContent() {
    const { goToNextFloor, currentFloor, isLastFloor } = this.props
    if(isLastFloor) {
      return <p>You have reached the end!</p>
    }

    return <button onClick={() => goToNextFloor(currentFloor+1)}>Next Floor</button>
  }

  render() {
    return (
      <div className='floor-end-buttons'>
        {this.getContent()}
      </div>
    )
  }
}