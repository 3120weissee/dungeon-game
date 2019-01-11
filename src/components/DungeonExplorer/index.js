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

  handleAttack() {
    // reduce monster hp
    // if monster hp zero => win condition
    // else monster attack
    const { goToMain } = this.props
    const { eventList, currentEvent } = this.state
    if(currentEvent+1 >= eventList.length) {
      // End floor (offer next floor or back to main
      goToMain()
      return
    }
    this.setState({currentEvent: currentEvent+1})
  }

  renderButtons() {
    return (
      <div>
        <button onClick={this.handleAttack.bind(this)}>Attack!</button>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.displayEvent()}
        {this.renderButtons()}
      </div>
    )
  }
}