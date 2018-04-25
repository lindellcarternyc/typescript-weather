import * as React from 'react'

import CurrentConditions from './components/Current-Conditions'
import CurrentTemperatures from './components/Current-Temperatures'

import { IWeather } from '../../../../types'

export default (props: IWeather): JSX.Element => {
  const { conditions, temperatures } = props
  
  return (
    <div>
      <CurrentConditions { ...conditions } />
      <CurrentTemperatures { ...temperatures } />
    </div>
  )
}