import * as React from 'react'

import { DarkGrey } from '../../styles'

interface IMenuProps {
  isOpen: boolean
  close: () => void
}
export default (props: IMenuProps): JSX.Element => {
  const { close, isOpen } = props
  return (
    <div
      style={{
        background: DarkGrey,
        height: '100vh',
        left: isOpen ? 0 : '-100%',
        padding: '0.5rem',
        position: 'fixed',
        transition: 'left 0.3s ease-in-out',
        width: '100%',
        zIndex: 5
      }}
    >
      <div
        style={{display: 'flex', justifyContent: 'space-between'}}
      >
        <p>Sign In / Sign Up</p>
        <button
          style={{
            background: DarkGrey,
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            lineHeight: '1rem',
          }}
          onClick={close}
        >x</button>
      </div>
    </div>
  )
}