import {
  ICondition,
  ICurrentConditions,
  IDailyForecastItem, 
  IDetails,
  IForecast, 
  IHourlyForecastItem,
  IMoonDetails,
  IPrecipitation,
  ISunAndMoonDetails,
  ISunDetails,
  ITemperatures,
  IWeather,
  IWindAndPressure
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
const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
for ( let i = 0; i < 10; i++ ) {
  MockDailyForecast.push({
    day: Days[i % Days.length],
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

export const MockPrecipitation: IPrecipitation = {
  items: [
    {
      chance: '100%',
      icon: 'cloudy',
      time: 'Afternoon'
    },
    {
      chance: '100%',
      icon: 'cloudy',
      time: 'Evening'
    },
    {
      chance: '100%',
      icon: 'cloudy',
      time: 'Overnight'
    },
    {
      chance: '100%',
      icon: 'cloudy',
      time: 'Morning'
    }
  ]
}

const MockCurrentConditions: ICurrentConditions = {
  description: 'Cloudy',
  icon: 'cloudy'
}

const MockTemperatures: ITemperatures = {
  current: '75',
  hi: '80',
  lo: '65'
}

export const MockHeroWeather: IWeather = {
  conditions: MockCurrentConditions,
  temperatures: MockTemperatures
}

export const MockWindAndPressure: IWindAndPressure  = {
  pressure: '29.68 in HG',
  wind: '14mph W'
}

const MockMoonDetails: IMoonDetails = {
  icon: 'moon-waxing-crescent-3',
  phase: 'Waxing Crescent'
}
const MockSunDetails: ISunDetails = {
  sunrise: '6:01',
  sunset: '7:15'
}

export const MockSunAndMoonDetails: ISunAndMoonDetails = {
  moonDetails: MockMoonDetails,
  sunDetails: MockSunDetails
}