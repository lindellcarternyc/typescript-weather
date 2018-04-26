import * as React from 'react'

import AddLocationButton from './components/Add-Location-Button'
import Details from './components/Details'
import Toggle from './components/Toggle'

interface IMenuBarProps {
  city: string
  time: string
}
export default (props: IMenuBarProps): JSX.Element => {
  const { city, time } = props
  return (
    <div
      style={{
        display: 'flex',
        height: '48px',
        justifyContent: 'space-between',
        padding: '8px',
        position: 'fixed',
        width: '100%'
      }}
    >
      <Toggle />
      <Details city={city} time={time} />
      <AddLocationButton />
    </div>
  )
}