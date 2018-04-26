import * as React from 'react'

import { ButtonStyles } from './styles'

interface IAddLocationButtonProps {
  onClick: () => void
}
export default (props: IAddLocationButtonProps): JSX.Element => {
  return (
    <button 
      style={{
        ...ButtonStyles,
      }}
      onClick={props.onClick}
    >
      <span
        style={{
          fontSize: '1.5rem',
          left: '50%',
          position: 'absolute',
          top: 'calc(50% - 2px)',
          transform: 'translate(-50%, -50%)'
        }}
      >+</span>
    </button>
  )
}