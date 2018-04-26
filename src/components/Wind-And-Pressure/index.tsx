import * as React from 'react'

import Widget from '../Widget'

interface IWindAndPressureProps {
  wind: string
  pressure: string
}
export default (props: IWindAndPressureProps): JSX.Element => {
  const { pressure, wind } = props
  return (
    <Widget title="Wind & Pressure">
      <div style={{
        border: '1px solid white',
        margin: '1rem auto 0.5rem',
        maxWidth: '600px'
      }}>
        <div>Wind {wind}</div>
        <div>Pressure {pressure}</div>
      </div>
    </Widget>
  )
}