import * as React from 'react'

import Icon from '../../Icon'

import { IMoonDetails } from '../../../types'

export default (props: IMoonDetails): JSX.Element => {
  const { icon, phase } = props
  return (
    <div
      style={{
        position: 'absolute',
        right: '0.5rem',
        top: '0.5rem'
      }}
    >
      <Icon name={icon}/ >
      <span style={{marginLeft: '0.5rem'}}>{phase}</span>
    </div>
  )
}