import React, { Component } from 'react'
import './FloorPicker.css'

export default class FloorPicker extends Component {
  mapFloors() {
    const { unlockedFloors } = this.props
    return unlockedFloors.map((floor, idx) => {
      const { name } = floor
      return (
        <div className='dungeon-floor-picker-row' key={name+idx}>
          {idx+1} - {name}
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Where to Start?</h1>
        <div className='dungeon-floor-picker-table'>
          {this.mapFloors()}
        </div>
      </div>
    )
  }
}