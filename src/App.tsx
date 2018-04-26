import * as React from 'react'

// Components
import Details from './components/Details'
import Forecast from './components/Forecast'
import Grid from './components/Grid'
import Hero from './components/Hero'
import Map from './components/Map'
import MenuBar from './components/Menu-Bar'
import Precipitation from './components/Precipitation'
import Widget from './components/Widget'

// Mocks
import { MockDetails, MockForecast, MockHeroWeather, MockPrecipitation } from './mocks'

import * as LocationService from './location-service'

interface IAppState {
  city: string | null
}
class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props)

    this.state = { 
      city: null,
    }
  }

  public componentDidMount() {
    LocationService.getCurrentPosition()
      .then(pos => {
        const { coords } = pos
        LocationService.getCityFromLatitudeLongitude(
          coords.latitude, coords.longitude
        ).then(city => {
          this.setState({ city })
        }).catch(err => {
          throw err
        })
      })
      .catch(err => {
        throw err
      })
  }

  public render() {
    return (
      <div className="App"
        style={{
          background: '#202a25',
          color: 'white',
          position: 'relative'
        }}
      >
        <MenuBar city={this.state.city || 'Loading'} />
        <Hero weather={MockHeroWeather} />
        <Grid>
          <Forecast forecast={MockForecast} />
          <Details details={MockDetails} />
          <Map />
          <Precipitation precipitation={MockPrecipitation}/>
          <Widget title="Wind & Pressure" />
          <Widget title="Sun & Moon" />
        </Grid>
      </div>
    )
  }
}

export default App
