import * as React from 'react'

import Icon from '../../../../Icon'
import { Blue } from './styles'

import { IDailyForecastItem } from '../../../../../types'
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
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        padding: '0.5rem 0'
      }}
    >
      <p>{day}</p>
      <div style={{textAlign: 'center', width: '100%'}}>
        <Icon name={icon} />
      </div>
      <p style={{textAlign: 'right'}}>{temperature.hi}&deg; 
        <span style={{color: Blue, marginLeft: '0.5rem'}}>{temperature.lo}&deg;</span>
      </p>
    </div>
  )
}