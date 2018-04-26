import * as React from 'react'

// Components
import Grid from './Grid'

// Widgets
import Details from './Details'
import Forecast from './Forecast'
import Hero from './Hero'
import Map from './Map'
import Precipitation from './Precipitation'
import Widget from './Widget'
import WindAndPressure from './Wind-And-Pressure'

// Types
import { IDetails, IForecast, IPrecipitation, IWeather, IWindAndPressure } from '../types'

interface IMainProps {
  details: IDetails
  forecast: IForecast
  weather: IWeather
  windAndPressure: IWindAndPressure
  precipitation: IPrecipitation
}
export default (props: IMainProps): JSX.Element => {
  const { details, forecast, precipitation, weather, windAndPressure } = props
  return (
    <>
      <Hero weather={weather} />
      <Grid>
        <Forecast forecast={forecast} />
        <Details details={details} />
        <Map />
        <Precipitation precipitation={precipitation}/>
        <WindAndPressure { ...windAndPressure } />
        <Widget title="Sun & Moon" />
      </Grid>
    </>
  )
}