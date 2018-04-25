import * as React from 'react'

interface IWidgetProps {
  title: string
  children?: React.ReactNode
}
export default (props: IWidgetProps): JSX.Element => {
  const { title, children } = props
  return (
    <div
      style={{
        border: '1px solid white',
        overflow: 'hidden',
        padding: '0.5rem'
      }}
    >
      <h4 
        style={{
          borderBottom: '1px solid white',
          fontWeight: 100,
          marginBottom: '0.25rem',
          paddingBottom: '0.25rem'
        }}
      >{title}</h4>
      {children}
    </div>
  )
}