import { IDailyForecastItem, IForecast, IHourlyForecastItem,  } from './types'

const MockHourlyForecast: IHourlyForecastItem[] = []
for ( let i = 0; i < 24; i++ ) {
  MockHourlyForecast.push({
    icon: 'cloudy',
    temperature: '75',
    time: `${i}PM`
  })
}

const MockDailyForecast: IDailyForecastItem[] = []
for ( let i = 0; i < 10; i++ ) {
  MockDailyForecast.push({
    day: 'Monday',
    icon: 'cloudy',
    temperature: {
      hi: '65', lo: '55'
    }
  })
}

export const MockForecast: IForecast = {
  daily: MockDailyForecast,
  hourly: MockHourlyForecast
}