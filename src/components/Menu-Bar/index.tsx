import * as React from 'react'

import { DarkGrey } from '../../styles'

import AddLocationButton from './components/Add-Location-Button'
import Details from './components/Details'
import Toggle from './components/Toggle'

interface IMenuBarProps {
  city: string
  time: string
  openAddLocation: () => void
}
export default (props: IMenuBarProps): JSX.Element => {
  const { city, openAddLocation, time } = props
  return (
    <div
      style={{
        background: DarkGrey,
        display: 'flex',
        height: '48px',
        justifyContent: 'space-between',
        padding: '8px',
        position: 'fixed',
        width: '100%',
        zIndex: 1
      }}
    >
      <Toggle />
      <Details city={city} time={time} />
      <AddLocationButton onClick={openAddLocation} />
    </div>
  )
}