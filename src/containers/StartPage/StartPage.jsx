import React from 'react'
import AppContainer from '../../components/AppContainer/index'

export default class StartPage extends React.Component {
  render() {
    const { goToMain } = this.props
    return (
      <AppContainer>
        <h1>Welcome to the dungeon</h1>
        <button onClick={goToMain}>Start the Game</button>
      </AppContainer>
    )
  }
}