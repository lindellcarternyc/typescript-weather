import * as React from 'react'

// Components
import DailyForecastList from './components/Daily-Forecast-List'
import ToggleCount from './components/Toggle-Count'

// Types
import { IDailyForecastItem } from '../../types'

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
        style={{
          padding: '0.5rem'
        }}
      >
        <DailyForecastList items={forecast.slice(0, currentCount)}/>
        <ToggleCount currentCount={currentCount} onClick={this.toggleCount} />
      </div>
    )
  }

  private toggleCount = (count: 5 | 10) => {
    this.setState({ currentCount: count })
  }
}