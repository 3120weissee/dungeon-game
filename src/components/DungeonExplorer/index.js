import React, { Component } from 'react'
import { mix } from '../../utils/mix'
import { getRandomColor } from '../../utils/randomColor'
import './DungeonExplorer.css'

export default class DungeonExplorer extends Component {
  constructor(props) {
    super(props)

    const { monster } = props.floor
    this.state = {
      eventList: mix(monster),
      currentEvent: 0
    }
  }

  displayEvent() {
    const { eventList, currentEvent } = this.state
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

  render() {
    return (
      <div>
        {this.displayEvent()}
      </div>
    )
  }
}