import * as React from 'react'

import DailyForecastItem from './Daily-Forecast-Item'

// Types
import { IDailyForecastItem } from '../../../types'

interface IDailyForecastListProps {
  items: IDailyForecastItem[]
}
export default (props: IDailyForecastListProps): JSX.Element => {
  const { items } = props
  return (
    <ul
      style={{
        listStyle: 'none',
        padding: '0.5rem'
      }}
    >{items.map(item => {
      return (
        <DailyForecastItem key={JSON.stringify(item)} {...item}/>
      )
    })}
    </ul>
  )
}