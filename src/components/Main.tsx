import * as React from 'react'

// Components
import Grid from './Grid'

// Widgets
import Details from './Details'
import Forecast from './Forecast'
import Hero from './Hero'
import Map from './Map'
import Precipitation from './Precipitation'
import SunAndMoon from './Sun-And-Moon'
import WindAndPressure from './Wind-And-Pressure'

// Types
import { IDetails, IForecast, IPrecipitation, ISunAndMoonDetails, IWeather, IWindAndPressure } from '../types'

interface IMainProps {
  details: IDetails
  forecast: IForecast
  weather: IWeather
  windAndPressure: IWindAndPressure
  precipitation: IPrecipitation,
  sunAndMoon: ISunAndMoonDetails
}
export default (props: IMainProps): JSX.Element => {
  const { details, forecast, precipitation, sunAndMoon, weather, windAndPressure } = props
  return (
    <>
      <Hero weather={weather} />
      <Grid>
        <Forecast forecast={forecast} />
        <Details details={details} />
        <Map />
        <Precipitation precipitation={precipitation}/>
        <WindAndPressure { ...windAndPressure } />
        <SunAndMoon { ...sunAndMoon } />
      </Grid>
    </>
  )
}