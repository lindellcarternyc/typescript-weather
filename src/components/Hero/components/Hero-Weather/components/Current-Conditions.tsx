import * as React from 'react'

import Icon from '../../../../Icon'

import { ICurrentConditions } from '../../../../../types'

export default (props: ICurrentConditions ): JSX.Element => {
  const { description, icon } = props
  return (
    <div>
      <Icon name={icon} />
      <span style={{marginLeft: '0.5rem'}}>{description}</span>
    </div>
  )
}