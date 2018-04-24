import * as React from 'react'

import { ButtonStyles } from './styles'

const ToggleBar = (props: { id: 1 | 2 | 3 }): JSX.Element => {
  const yPosition: { top: string } | { bottom: string } = props.id === 1
    ? { top: '4px' }
    : props.id === 3
      ? { bottom: '4px' }
      : { top: '13px' }
  return (
    <span 
      style={{
        background: 'white',
        display: 'block',
        height: '4px',
        left: '4px',
        position: 'absolute',
        width: 'calc(100% - 8px)',
        ...yPosition
      }}
    />
  )
}

export default (): JSX.Element => {
  return (
    <button
      style={{
        ...ButtonStyles
      }}
    >
      <ToggleBar id={1} />
      <ToggleBar id={2} />
      <ToggleBar id={3} />
    </button>
  )
}