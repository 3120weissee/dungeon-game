import React, { Component } from 'react'

export default class EquipmentScreen extends Component {
  render() {
    const { weapon, armor, hp } = this.props
    return (
      <div>
        <h3>Player Status</h3>
        <div>
          <div>
            HP: {hp}
          </div>
          <div>
            Weapon: {weapon.name}
          </div>
          <div>
            Armor: {armor.name}
          </div>
        </div>
      </div>
    )
  }
}