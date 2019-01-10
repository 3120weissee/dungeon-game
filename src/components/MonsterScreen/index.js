import React, { Component } from 'react'

export default class MonsterScreen extends Component {
  constructor(props) {
    super(props)

    const { hp } = props.monster  
    this.state = {
      currentHP: hp
    }
  }

  attack() {
    const { loadNextEvent } = this.props
    const { currentHP } = this.state
    const newHP = currentHP - 1
    if(newHP === 0) {
      loadNextEvent()
    } else {
      this.setState({currentHP: newHP})
    }
  }

  render() {
    const { monster } = this.props
    const { currentHP } = this.state
    return (
      <div>
        <h1>A {monster.name} appears!</h1>
        <div className='monster-picture' />
        <div>
          <span>HP: {currentHP}</span>
        </div>
        <button onClick={this.attack}>Attack</button>
      </div>
    )
  }
}