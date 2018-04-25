import {
  ICondition,
  IDailyForecastItem, 
  IDetails,
  IForecast, 
  IHourlyForecastItem, 
} from './types'

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

export const MockConditions: ICondition[] = [
  {name: 'Feels Like', data: '50*'},
  {name: 'Humidity', data: '90%'},
  {name: 'Visibility', data: '4 mi'},
  {name: 'UV Index', data: 'Low 1'}
]

export const MockDetails: IDetails = {
  conditions: MockConditions,
  descriptions: [
    'Description 1 looks like this',
    'And this is description 2'
  ],
  icon: 'cloudy'
}