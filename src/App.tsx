import * as React from 'react'

// Components
import Forecast from './components/Forecast'
import Grid from './components/Grid'
import Hero from './components/Hero'
import MenuBar from './components/Menu-Bar'
import Widget from './components/Widget'

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
        <Grid>
          <Forecast forecast={MockForecast} />
          <Widget title="Details" />
          <Widget title="Map" />
          <Widget title="Precipitation" />
          <Widget title="Wind & Pressure" />
          <Widget title="Sun & Moon" />
        </Grid>
      </div>
    )
  }
}

export default App
