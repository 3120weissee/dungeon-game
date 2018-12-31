import React from 'react'
import { PageLayout } from '../../components'

export default class StorePage extends React.Component {
  render() {
    return (
      <PageLayout
        mainView={<div>Store List Panel</div>}
        buttonList={[<button>Back Home</button>]}
      />
    )
  }
}
