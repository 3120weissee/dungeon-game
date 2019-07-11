import React, { Component } from 'react'
import './Component.css'

export default class EquipmentScreen extends Component {
  render() {
    const { weapon, strength, defense, armor, hp } = this.props
    return (
      <div>
        <h3>Player Status</h3>
        <div className='equipment-display-container'>
          <div className='equipment-display-flex'>
            <div>
              HP: {hp}
            </div>
          </div>
          <div className='equipment-display-flex equipment-display-columns'>
            <div>
              Strength: {strength}
            </div>
            <div>
              Defense: {defense}
            </div>
          </div>
          <div className='equipment-display-flex equipment-display-columns'>
            <div>
              Weapon: {weapon.name}
            </div>
            <div>
              Armor: {armor.name}
            </div>
          </div>
        </div>
      </div>
    )
  }
}