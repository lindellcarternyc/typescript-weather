import * as React from 'react'

import HourlyForecastItem from './components/Hourly-Forecast-Item'

import { IHourlyForecastItem } from '../../../../types'

interface IHourlyForecastProps {
  forecast: IHourlyForecastItem[]
}

export default (props: IHourlyForecastProps) => {
  const { forecast } = props
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        overflowX: 'scroll',
        padding: '0.5rem'
      }}
    >
      {forecast.map(item => {
        return(
          <HourlyForecastItem key={JSON.stringify(item)} { ...item }/>
        )
      })}
    </div>
  )
}