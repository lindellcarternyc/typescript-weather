import * as React from 'react'

export default (props: { title: string }): JSX.Element => {
  const { title } = props
  return (
    <div
      style={{
        border: '1px solid white',
        padding: '0.5rem'
      }}
    >
      <h4 
        style={{
          borderBottom: '1px solid white',
          fontWeight: 100,
          paddingBottom: '0.25rem'
        }}
      >{title}</h4>
    </div>
  )
}