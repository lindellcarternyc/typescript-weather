import * as React from 'react'

import DailForeCastItem from './components/Daily-Forecast-Item'
import ToggleCount from './components/Toggle-Count'

import { IDailyForecastItem } from '../../../../types'

interface IDailyForecastProps {
  forecast: IDailyForecastItem[]
}
interface IDailyForecastState {
  currentCount: 5 | 10
}

export default class DailyForecast extends React.Component<IDailyForecastProps, IDailyForecastState> {
  constructor(props: IDailyForecastProps) {
    super(props)

    this.state = { currentCount: 5 }
  }

  public render() {
    const { currentCount } = this.state
    const { forecast } = this.props

    return (
      <div
        style={{padding: '0.5rem'}}
      >
        {forecast.slice(0, currentCount).map(item => {
          return <DailForeCastItem key={JSON.stringify(item)} { ...item } />
        })}
        <ToggleCount currentCount={currentCount} onClick={this.toggleCurrentCount}/>
      </div>
    )
  }

  private toggleCurrentCount = (count: 5 | 10) => {
    this.setState({ currentCount: count })
  }
}