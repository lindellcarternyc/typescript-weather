import * as React from 'react'

import { ISunDetails } from '../../../types'

export default (props: ISunDetails): JSX.Element => {
  const { sunrise, sunset } = props
  return (
    <div style={{
      paddingTop: '1.5rem'
    }}>{sunrise} | {sunset}</div>
  )
}