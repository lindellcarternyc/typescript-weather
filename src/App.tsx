import * as React from 'react'

import * as moment from 'moment-timezone'

// Styles
import { DarkGrey } from './styles'

// Components
import AddLocation from './components/Add-Location'
import Main from './components/Main'
import Menu from './components/Menu'
import MenuBar from './components/Menu-Bar'

// Mocks
import { 
  MockDetails, 
  MockForecast, 
  MockHeroWeather, 
  MockPrecipitation,
  MockSunAndMoonDetails,
  MockWindAndPressure
} from './mocks'

import * as LocationService from './location-service'

interface IAppState {
  city: string
  time: string
  addLocationIsOpen: boolean
  menuIsOpen: boolean
}
class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props)

    this.state = { 
      addLocationIsOpen: true,
      city: '...',
      menuIsOpen: false,
      time: '...'
    }
  }

  public componentDidMount() {
    this.updateLocation()
    this.updateTime()
  }

  public render() {
    const {
      addLocationIsOpen,
      city,
      menuIsOpen,
      time
    } = this.state
    return (
      <div className="App"
        style={{
          background: DarkGrey,
          color: 'white',
          position: 'relative'
        }}
      >
        <MenuBar 
          city={city} 
          time={time} 
          openAddLocation={this.openAddLocation} 
          openMenu={this.openMenu}
        />
        <Menu isOpen={menuIsOpen} close={this.closeMenu}/>
        <AddLocation isOpen={addLocationIsOpen} close={this.closeAddLocation}/>
        <Main 
          details={MockDetails}
          forecast={MockForecast}
          weather={MockHeroWeather}
          precipitation={MockPrecipitation}
          windAndPressure={MockWindAndPressure}
          sunAndMoon={MockSunAndMoonDetails}
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

  private openAddLocation = () => {
    this.setState({ addLocationIsOpen: true })
  }

  private closeAddLocation = () => {
    this.setState({ addLocationIsOpen: false })
  }

  private openMenu = () => { 
    this.setState({ menuIsOpen: true })
  }

  private closeMenu = () => {
    this.setState({ menuIsOpen: false })
  }
}

export default App
