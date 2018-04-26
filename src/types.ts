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

export interface ICondition {
  name: string
  data: string
}

export interface IDetails {
  conditions: ICondition[]
  descriptions: string[]
  icon: string
}

export interface IPrecipitationItem {
  time: string
  icon: string
  chance: string
}

export interface IPrecipitation {
  items: IPrecipitationItem[]
}

export interface ITemperatures {
  current: string
  hi: string
  lo: string
}

export interface ICurrentConditions {
  description: string
  icon: string
}

export interface IWeather {
  conditions: ICurrentConditions
  temperatures: ITemperatures
}

export interface IWindAndPressure {
  wind: string
  pressure: string
}