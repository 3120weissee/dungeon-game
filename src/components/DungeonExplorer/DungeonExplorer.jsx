import React, { Component } from 'react'
import ContinueButtons from './ContinueButtons'
import './DungeonExplorer.css'
import {roll} from '../../utils/roll'

export default class DungeonExplorer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentEvent: 0,
      attackLog: []
    }
  }

  displayEvent() {
    const { eventList, currentEvent } = this.props
    if(currentEvent === eventList.length) {
      return this.showContinue()
    }
    const { name, hp, picture } = eventList[currentEvent]
    return (
      <div>
        <h3>A {name} appears!</h3>
        <div className='event-picture' style={{backgroundColor: picture}} />
        <div className='event-details'>
          HP: {hp}
        </div>
      </div>
    )
  }

  showContinue() {
    const { goToNextFloor, currentFloor, unlockFloor, isLastFloor } = this.props

    return (
      <ContinueButtons
        goToNextFloor={goToNextFloor}
        currentFloor={currentFloor}
        unlockFloor={unlockFloor}
        isLastFloor={isLastFloor} />
    )
  }

  handleAttack() {
    const { eventList, currentEvent, player, goToMain, incrementCurrentEvent, resetHp } = this.props
    const monster = eventList[currentEvent]

    const attack = (attacker, defender) => {
      const weaponModifier = attacker.weapon ? attacker.weapon.attack : 0
      const damage = attacker.strength + weaponModifier + roll(6) - defender.defense

      defender.hp = defender.hp - damage
      this.setState({attackLog: [`${attacker.name} attacks for ${damage}`].concat(this.state.attackLog)})
    }

    attack(player, monster)

    if(monster.hp <= 0) {
      alert(`You defeated the ${monster.name}!`)
      incrementCurrentEvent()
      this.setState({attackLog: []})
    } else {
      setTimeout(() => {
        attack(monster, player)
        setTimeout( () => {
          if(player.hp <= 0) {
            alert('You were defeated! Back to the start!')
            resetHp()
            goToMain()
          }
        }, 0)
      }, 300)
    }
  }

  renderButtons() {
    return (
      <div>
        <button onClick={this.handleAttack.bind(this)}>Attack!</button>
      </div>
    )
  }

  renderPlayerInfo() {
    const { attackLog } = this.state
    const { player } = this.props

    return (
      <div className='dungeon-player-info'>
        <div>
          Player HP {player.hp}
        </div>
        <div className='dungeon-attack-log'>
          {attackLog.map((log, idx) => {
            return <div key={idx}>{log}</div>
          })}
        </div>
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
        {this.renderPlayerInfo()}
      </div>
    )
  }
}