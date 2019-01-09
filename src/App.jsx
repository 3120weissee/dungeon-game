import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import { store, history } from './Store'
import StartPage from './containers/StartPage'
import MainGame from './containers/MainGame'
import StorePage from './containers/StorePage'
import Dungeon from './containers/Dungeon'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" render={() => <StartPage />} />
            <Route path="/main" render={() => <MainGame />} />
            <Route path="/store" render={() => <StorePage />} />
            <Route path="/dungeon" render={() => <Dungeon />} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  }
}