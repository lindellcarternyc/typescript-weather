import * as React from 'react'

import Box from '../Box'
import Widget from '../Widget'

import MoonDetails from './components/Moon-Details'
import SunDetails from './components/Sun-Details'

import { ISunAndMoonDetails } from '../../types'

export default (props: ISunAndMoonDetails): JSX.Element => {
  const { moonDetails, sunDetails } = props
  
  return (
    <Widget title="Sun & Moon">
      <Box bordered padded>
        <SunDetails { ...sunDetails } />
        <MoonDetails { ...moonDetails } />
      </Box>
    </Widget>
  )
}