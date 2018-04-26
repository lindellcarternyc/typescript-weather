import * as React from 'react'

import Box from '../Box'
import Widget from '../Widget'

interface IWindAndPressureProps {
  wind: string
  pressure: string
}
export default (props: IWindAndPressureProps): JSX.Element => {
  const { pressure, wind } = props
  return (
    <Widget title="Wind & Pressure">
      <Box bordered>
        <div>Wind {wind}</div>
        <div>Pressure {pressure}</div>
      </Box>
    </Widget>
  )
}