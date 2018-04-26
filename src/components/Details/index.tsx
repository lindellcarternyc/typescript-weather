import * as React from 'react'

import Box from '../Box'
import Icon from '../Icon'
import Widget from '../Widget'

import DetailsConditions from './components/Details-Conditions'

// types
import { IDetails } from '../../types'

const Description = (props: { text: string }): JSX.Element => {
  const { text } = props
  return (
    <p
      style={{
        fontSize: '0.75rem', lineHeight: '1.5rem'
      }}
    >{text}</p>)
}

interface IDetailsProps {
  details: IDetails
}
export default (props: IDetailsProps): JSX.Element => {
  const { conditions, descriptions } = props.details
  return (
    <Widget title="Details">
      <Box
        styles={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <div
          style={{
            flexGrow: 1,
            textAlign: 'center',
          }}
        >
          <Icon name="cloudy" fontSize="4rem" />
        </div>
        <DetailsConditions conditions={conditions}/>
      </Box>
      <div 
        style={{
          borderTop: '1px solid white',
          marginTop: '1rem',
          padding: '0.75rem'
        }}
      >
        {descriptions.map(description => {
          return <Description key={description} text={description} />
        })}
      </div>
    </Widget>
  )
}
