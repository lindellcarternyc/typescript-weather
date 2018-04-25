import * as React from 'react'

import HeroWeather from './components/Hero-Weather'

import { IWeather } from '../../types'

export default (props: { weather: IWeather }): JSX.Element => {
  const { weather } = props
  return (
    <div
      style={{
        alignItems: 'flex-end',
        display: 'flex',
        height: '100vh',
        justifyContent: 'space-between',
        paddingBottom: '8px',
        paddingLeft: '8px',
        paddingRight: '8px',
      }}
    >
      <HeroWeather { ...weather }/>
      <div>Image details</div>
    </div>
  )
}