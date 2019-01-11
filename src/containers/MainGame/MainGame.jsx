import React from 'react'
import PageLayout from '../../components/PageLayout/index'
import EquipmentScreen from '../../components/EquipmentScreen'

export default class MainGame extends React.Component {
  render() {
    const { goToStore, goToDungeon, player } = this.props
    return (
      <PageLayout
        mainView={<EquipmentScreen {...player} />}
        buttonList={[
          <button key='main-1' onClick={goToStore}>Store</button>,
          <button key='main-2' onClick={goToDungeon}>Dungeon</button>
        ]}
      />
    )
  }
}
