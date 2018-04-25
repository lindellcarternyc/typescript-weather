import * as React from 'react'

import Icon from '../../../../Icon'

import { IHourlyForecastItem } from '../../../../../types'

const PARAGRAPH_STYLES = { fontSize: '0.75rem'}

export default (props: IHourlyForecastItem): JSX.Element => {
  const { time, icon, temperature } = props
  return (
    <div style={{
      marginRight: '0.75rem',
      textAlign: 'center'
    }}>
      <p style={PARAGRAPH_STYLES}>{time}</p>
      <Icon name={icon}/>
      <p style={PARAGRAPH_STYLES}>{temperature}</p>
    </div>
  )
}