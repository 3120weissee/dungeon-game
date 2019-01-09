import React from 'react'
import PageLayout from '../../containers/PageLayout'
import FloorPicker from './FloorPicker'

export default class Dungeon extends React.Component {
  render() {
    const { goToMain, floors } = this.props
    const unlockedFloors = floors.filter(floor => !floor.locked)
    return (
      <PageLayout
        mainView={<FloorPicker unlockedFloors={unlockedFloors} />}
        buttonList={[
          <button key='dungeon-1' onClick={goToMain}>Back Home</button>
        ]}
      />
    )
  }
}
