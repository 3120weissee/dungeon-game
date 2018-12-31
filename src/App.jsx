import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { store } from './Store'
import Counter from './components/Counter'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='app-container'>
          <Counter />
        </div>
      </Provider>
    )
  }
}