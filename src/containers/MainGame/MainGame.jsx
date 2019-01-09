import React from 'react'
import PageLayout from '../../components/PageLayout/index'

export default class MainGame extends React.Component {
  render() {
    const { goToStore, goToDungeon } = this.props
    return (
      <PageLayout
        mainView={<div>Equipment Panel</div>}
        buttonList={[
          <button key='main-1' onClick={goToStore}>Store</button>,
          <button key='main-2' onClick={goToDungeon}>Dungeon</button>
        ]}
      />
    )
  }
}
