export interface IHourlyForecastItem {
  time: string
  icon: string
  temperature: string
}

export interface IDailyForecastItem {
  day: string
  icon: string
  temperature: {
    hi: string
    lo: string
  }
}

export interface IForecast {
  hourly: IHourlyForecastItem[]
  daily: IDailyForecastItem[]
}