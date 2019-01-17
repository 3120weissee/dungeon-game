import React, { Component } from 'react'
import { getRandomColor } from '../../utils/randomColor'
import './DungeonExplorer.css'

export default class DungeonExplorer extends Component {
  displayEvent() {
    const { eventList, currentEvent } = this.props
    if(currentEvent === eventList.length) {
      return this.showContinue()
    }
    const { name, hp } = eventList[currentEvent]
    return (
      <div>
        <h3>A {name} appears!</h3>
        <div className='event-picture' style={{backgroundColor: getRandomColor()}} />
        <div className='event-details'>
          HP: {hp}
        </div>
      </div>
    )

  }

  showContinue() {
    return (
      <div className='floor-end-buttons'>
        <button>Next Floor</button>
        <button>Back Home</button>
      </div>
    )
  }

  handleAttack() {
    // reduce monster hp
    // if monster hp zero => win condition
    // else monster attack
    this.props.incrementCurrentEvent()
  }

  renderButtons() {
    return (
      <div>
        <button onClick={this.handleAttack.bind(this)}>Attack!</button>
      </div>
    )
  }

  render() {
    const { eventList, currentEvent } = this.props
    if(!eventList) {
      return (
        <div>
          Loading...
        </div>
      )
    }
    if(eventList.length === currentEvent) {
      return this.showContinue()
    }

    return (
      <div>
        {this.displayEvent()}
        {this.renderButtons()}
      </div>
    )
  }
}