export interface IDailyForecastItem {
  day: string
  icon: string
  temperature: {
    hi: number
    lo: number
  }
}

export interface IHourlyForecastItem {
  time: string
  icon: string
  temperature: number
}