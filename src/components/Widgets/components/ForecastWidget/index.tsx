import * as React from 'react'

import Widget from '../Widget'

// Components
import DailyForecast from './components/DailyForecast'
import HourlyForecast from './components/HourlyForecast'

// Types
import { IDailyForecastItem, IHourlyForecastItem } from './types'

// mocks
const MOCK_DAILY_FORECAST: IDailyForecastItem[] = [] 
for ( let i = 0; i < 10; i++ ) {
  const item: IDailyForecastItem = {
    day: 'Tuesday',
    icon: 'cloudy',
    temperature: {
      hi: 75,
      lo: 70
    }
  }
  MOCK_DAILY_FORECAST.push(item)
}

const MOCK_HOURLY_FORECAST: IHourlyForecastItem[] = []
for ( let i = 0; i < 24; i++ ) {
  const item: IHourlyForecastItem = {
    icon: 'cloudy',
    temperature: 75,
    time: '2PM'
  }
  MOCK_HOURLY_FORECAST.push(item)
}

export default () => {
  return (
    <Widget title="Forecast">
      <HourlyForecast forecast={MOCK_HOURLY_FORECAST} />
      <DailyForecast forecast={MOCK_DAILY_FORECAST} />
    </Widget>
  )
}