import * as React from 'react'

import { IForecast } from '../../types'

import Widget from '../Widget'

import DailyForecast from './components/DailyForecast'
import HourlyForecast from './components/Hourly-Forecast'

export default (props: { forecast: IForecast }): JSX.Element => {
  const { forecast } = props
  return (
    <Widget title="Forecast">
      <HourlyForecast forecast={forecast.hourly} />
      <DailyForecast forecast={forecast.daily} />
    </Widget>
  )
}