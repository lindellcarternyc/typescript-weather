import * as React from 'react'

import ForecastWidget from './components/ForecastWidget'
import Widget from './components/Widget'

export default (): JSX.Element => {
  return (
    <div
      style={{
        display: 'grid',
        gridGap: '0.5rem',
        padding: '0.5rem'
      }}
    >
      <ForecastWidget />
      <Widget title="Details" />
      <Widget title="Map" />
      <Widget title="Precipitation" />
      <Widget title="Wind & Pressure" />
      <Widget title="Sun & Moon" />
    </div>
  )
}