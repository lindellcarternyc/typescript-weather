import * as React from 'react'

import { DarkGrey } from '../../styles'

interface IAddLocationProps {
  isOpen: boolean
  close: () => void
}
export default (props: IAddLocationProps): JSX.Element => {
  const { isOpen } = props

  const onClickCancel = (evt: React.SyntheticEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    evt.stopPropagation()

    props.close()
  }

  const onSubmit = (evt: React.SyntheticEvent<HTMLElement>) => {
    evt.preventDefault()
    evt.stopPropagation()

    props.close()
  }
  return (
    <div
      style={{
        background: DarkGrey,
        height: '100vh',
        padding: '0.5rem',
        position: 'fixed',
        top: isOpen ? 0 : '100%',
        transition: 'top 0.3s ease-in-out',
        width: '100%',
        zIndex: 5
      }}
    >
      <form onSubmit={onSubmit}>
        <div
          style={{display: 'flex'}}
        >
          <input
            style={{
              background: DarkGrey,
              border: '1px solid white',
              color: 'white',
              fontSize: '1rem',
              marginRight: '0.5rem',
              padding: '0.25rem',
              width: '100%'
            }}
            type="text" placeholder="Enter a city name" />
          <button 
            style={{
              background: DarkGrey,
              border: 0,
              borderBottom: '1px solid white',
              color: 'white'
            }}
            type="button" onClick={onClickCancel}
          >Cancel</button>
        </div>
      </form>
    </div>
  )
}