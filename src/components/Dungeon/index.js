import React from 'react'
import { PageLayout } from '../../components'

export default class Dungeon extends React.Component {
  render() {
    return (
      <PageLayout
        mainView={<div>Event Panel</div>}
        buttonList={[<button>Back Home</button>, <button>Continue</button>]}
      />
    )
  }
}
