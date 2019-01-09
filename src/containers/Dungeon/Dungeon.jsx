import React from 'react'
import PageLayout from '../../components/PageLayout/index'
import FloorPicker from '../../components/FloorPicker/index'
import DungeonExplorer from '../../components/DungeonExplorer/index'

export default class Dungeon extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showFloorPicker: true
    }
  }

  loadFloor(event) {
    this.setState({
      showFloorPicker: false,
      currentFloor: event.target.id
    })
  }

  render() {
    const { goToMain, floors } = this.props
    const { showFloorPicker, currentFloor } = this.state
    const unlockedFloors = floors.filter(floor => !floor.locked)

    const mainView = showFloorPicker ?
      <FloorPicker unlockedFloors={unlockedFloors} loadFloor={this.loadFloor.bind(this)} /> :
      <DungeonExplorer floor={floors[currentFloor]} />

    return (
      <PageLayout
        mainView={mainView}
        buttonList={[
          <button key='dungeon-1' onClick={goToMain}>Back Home</button>
        ]}
      />
    )
  }
}
