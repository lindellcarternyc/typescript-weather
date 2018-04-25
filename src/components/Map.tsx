import * as React from 'react'

import Widget from './Widget'

export default (): JSX.Element => {
  return (
    <Widget title="Map">
      <div
        style={{
          border: '1px solid white',
          height: '300px',
          margin: '0.75rem auto 0.5rem',
          maxWidth: '400px',
          position: 'relative'
        }}
      >Map</div>
    </Widget>
  )
}