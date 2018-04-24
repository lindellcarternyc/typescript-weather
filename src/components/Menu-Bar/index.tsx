import * as React from 'react'

import AddLocationButton from './components/Add-Location-Button'
import Details from './components/Details'
import Toggle from './components/Toggle'

export default (): JSX.Element => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px'
      }}
    >
      <Toggle />
      <Details />
      <AddLocationButton />
    </div>
  )
}