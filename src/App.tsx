import * as React from 'react'

import * as moment from 'moment-timezone'

// Components
import Main from './components/Main'
import MenuBar from './components/Menu-Bar'

// Mocks
import { MockDetails, MockForecast, MockHeroWeather, MockPrecipitation } from './mocks'

import * as LocationService from './location-service'

interface IAppState {
  city: string
  time: string
}
class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props)

    this.state = { 
      city: '...',
      time: '...'
    }
  }

  public componentDidMount() {
    this.updateLocation()
    this.updateTime()
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
        <MenuBar city={this.state.city} time={this.state.time} />
        <Main 
          details={MockDetails}
          forecast={MockForecast}
          weather={MockHeroWeather}
          precipitation={MockPrecipitation}
        />
      </div>
    )
  }

  private updateLocation(mock: boolean = true) {
    LocationService.getCurrentPosition()
      .then(pos => {
        const { coords } = pos
        LocationService.getCityFromLatitudeLongitude(
          coords.latitude, coords.longitude, mock
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

  private updateTime = () => {
    const zone = moment.tz.guess()
    const time = moment().tz(zone).format('hh:mm z')
    this.setState({ time }, () => {
      window.setTimeout(this.updateTime, 1000)
    })
  }
}

export default App
