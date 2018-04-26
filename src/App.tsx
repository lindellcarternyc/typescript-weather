import * as React from 'react'

// Components
import Main from './components/Main'
import MenuBar from './components/Menu-Bar'

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
          coords.latitude, coords.longitude, false
        ).then(city => {
          // tslint:disable-next-line:no-console
          console.log(city)
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
        <MenuBar city={this.state.city || 'Loading...'} />
        <Main 
          details={MockDetails}
          forecast={MockForecast}
          weather={MockHeroWeather}
          precipitation={MockPrecipitation}
        />
      </div>
    )
  }
}

export default App
