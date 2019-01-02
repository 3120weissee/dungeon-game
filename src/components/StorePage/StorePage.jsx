import React from 'react'
import PageLayout from '../../containers/PageLayout'

export default class StorePage extends React.Component {
  render() {
    const { goToMain } = this.props
    return (
      <PageLayout
        mainView={<div>Store List Panel</div>}
        buttonList={[<button key='store-1' onClick={goToMain}>Back Home</button>]}
      />
    )
  }
}
