import * as React from 'react'

import Icon from '../../../../Icon'

import { ITemperatures } from '../../../../../types'

const TemperatureIcon = (props: { temperature: string, hi?: boolean, lo?: boolean }): JSX.Element => {
  const { hi, lo, temperature } = props
  let icon: string = ''
  if ( hi ) {
    icon = 'direction-up'
  } else if ( lo ) {
    icon = 'direction-down'
  }

  return (
    <span style={{marginRight: '0.5rem'}}>
      <Icon name={icon} />
      <span style={{marginLeft: '0.5rem'}}>{temperature}&deg;</span>
    </span>
  )
}

export default (props: ITemperatures): JSX.Element => {
  const { current, hi, lo } = props
  return (
    <>
    <div>
      <TemperatureIcon temperature={hi} hi />
      <TemperatureIcon temperature={lo} lo />
    </div>
    <p 
      style={{
        fontSize: '4rem',
        fontWeight: 100,
        lineHeight: '3.5rem'
      }}
    >{current}&deg;</p>
    </>
  )
}