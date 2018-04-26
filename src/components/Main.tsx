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

// Types
import { IDetails, IForecast, IPrecipitation, IWeather } from '../types'

interface IMainProps {
  details: IDetails
  forecast: IForecast
  weather: IWeather
  precipitation: IPrecipitation
}
export default (props: IMainProps): JSX.Element => {
  const { details, forecast, precipitation, weather } = props
  return (
    <>
      <Hero weather={weather} />
      <Grid>
        <Forecast forecast={forecast} />
        <Details details={details} />
        <Map />
        <Precipitation precipitation={precipitation}/>
        <Widget title="Wind & Pressure" />
        <Widget title="Sun & Moon" />
      </Grid>
    </>
  )
}