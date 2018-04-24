import * as React from 'react'

import Icon from '../../../../Icon'

// Types
import { IHourlyForecastItem } from '../types'

const HourlyForecastItem = (props: IHourlyForecastItem): JSX.Element => {
  const { time, icon, temperature } = props
  return (
    <div
      style={{
        marginRight: '0.75rem',
        textAlign: 'center'
      }}
    >
      <p style={{fontSize: '0.75rem'}}>{time}</p>
      <Icon name={icon}/>
      <p style={{fontSize: '0.75rem'}}>{temperature}&deg;</p>
    </div>
  )
}

interface IHourlyForecastProps {
  forecast: IHourlyForecastItem[]
}
export default (props: IHourlyForecastProps): JSX.Element => {
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
        return (
          <HourlyForecastItem key={JSON.stringify(item)} { ...item }/>
        )
      })}
    </div>
  )
}