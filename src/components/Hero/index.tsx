import * as React from 'react'

export default (): JSX.Element => {
  return (
    <div
      style={{
        alignItems: 'flex-end',
        display: 'flex',
        height: '100vh',
        justifyContent: 'space-between',
        paddingBottom: '8px',
        paddingLeft: '8px',
        paddingRight: '8px',
      }}
    >
      <div>Weather</div>
      <div>Image details</div>
    </div>
  )
}