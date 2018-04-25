import * as React from 'react'

import AddLocationButton from './components/Add-Location-Button'
import Details from './components/Details'
import Toggle from './components/Toggle'

export default (): JSX.Element => {
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
      <Details />
      <AddLocationButton />
    </div>
  )
}