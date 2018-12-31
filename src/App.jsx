import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import { store, history } from './Store'
import Counter from './components/Counter'
import HomePage from './components/HomePage'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" render={() => <HomePage />} />
            <Route path="/counter" render={() => <Counter />} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  }
}