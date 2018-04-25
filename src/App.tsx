import * as React from 'react'

// Components
import Forecast from './components/Forecast'
import Hero from './components/Hero'
import MenuBar from './components/Menu-Bar'
import Widget from './components/Widget'
// import Widgets from './components/Widgets'

// Mocks
import { MockForecast } from './mocks'

class App extends React.Component {
  public render() {
    return (
      <div className="App"
        style={{
          background: '#202a25',
          color: 'white',
          position: 'relative'
        }}
      >
        <MenuBar />
        <Hero />
        <div
          style={{
            display: 'grid',
            gridGap: '0.5rem',
            padding: '0.5rem'
          }}
        >
          <Forecast forecast={MockForecast} />
          <Widget title="Details" />
          <Widget title="Map" />
          <Widget title="Precipitation" />
          <Widget title="Wind & Pressure" />
          <Widget title="Sun & Moon" />
        </div>
      </div>
    )
  }
}

export default App
