import * as React from 'react'

import Icon from '../../../../../../Icon'
import { AccentColor } from './styles'

// types 
import { IDailyForecastItem } from '../../../types'
export default (props: IDailyForecastItem): JSX.Element => {
  const {
    day,
    icon,
    temperature
  } = props
  return (
    <div
      style={{
        borderBottom: '1px solid white',
        borderTop: '1px solid white',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.5rem 0'
      }}
    >
      <p>{day}</p>
      <Icon name={icon} />
      <p>{temperature.hi}&deg; 
        <span style={{color: AccentColor, marginLeft: '0.5rem'}}>{temperature.lo}&deg;</span>
      </p>
    </div>
  )
}