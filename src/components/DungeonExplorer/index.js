import React, { Component } from 'react'

export default class DungeonExplorer extends Component {
  render() {
    const { floor } = this.props
    return (
      <div>
        <h1>Welcome to Floor {floor.name}</h1>
      </div>
    )
  }
}