import React, { Component } from 'react'
import AppContainer from '../AppContainer'
import './PageLayout.css'

export default class PageLayout extends Component {
  render() {
    const { mainView, buttonList } = this.props
    return (
      <AppContainer>
        <div className="main-view">
          {mainView}
        </div>
        <div className="button-list">
          {buttonList}
        </div>
      </AppContainer>
    )
  }
}