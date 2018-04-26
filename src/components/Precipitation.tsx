import * as React from 'react'

import Box from './Box'
import Icon from './Icon'
import Widget from './Widget'

import { IPrecipitation, IPrecipitationItem, } from '../types'

const PrecipitationItem = (props: IPrecipitationItem): JSX.Element => {
  const { chance, icon, time } = props
  return (
    <div style={{textAlign: 'center'}}>
      <p style={{fontSize: '0.75rem', marginBottom: '0.5rem'}}>
        {time}
      </p>
      <Icon name={icon} fontSize="2.5rem" />
      <p style={{fontSize: '0.95rem', marginTop: '0.5rem'}}>
        {chance}
      </p>
    </div>
  )
}

interface IPrecipitationProps {
  precipitation: IPrecipitation
}
export default (props: IPrecipitationProps): JSX.Element => {
  const { precipitation } = props
  return (
    <Widget title="Precipitation">
      <Box styles={{
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        {precipitation.items.map(item => {
          return <PrecipitationItem key={JSON.stringify(item)} { ...item }/>
        })}
      </Box>
    </Widget>
  )
}