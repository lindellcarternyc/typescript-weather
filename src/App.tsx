import * as React from 'react'
import './App.css'

import Icon from './components/Icon'

const DAY_NAMES = [
  'sunny', 'cloudy', 'cloudy-gusts', 'cloudy-windy',
  'fog', 'hail', 'haze', 'lightning', 'rain', 'rain-mix',
].map(n => 'day-' + n)

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        {DAY_NAMES.map(name => {
          return <Icon key={name} name={name} />
        })}
      </div>
    )
  }
}

export default App
