import React from 'react'
import { PageLayout } from '../../components'

export default class MainGame extends React.Component {
  render() {
    return (
      <PageLayout
        mainView={<div>Equipment Panel</div>}
        buttonList={[<button>Store</button>, <button>Dungeon</button>]}
      />
    )
  }
}
