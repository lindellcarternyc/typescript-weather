import * as React from 'react'

interface IBoxProps {
  children?: React.ReactNode
  styles?: { 
    display?: 'flex'
    justifyContent?: string
  }
  bordered?: boolean
}
export default (props: IBoxProps): JSX.Element => {
  const { bordered, children, styles } = props
  return (
    <div style={{
      border: bordered ? '1px solid white' : undefined,
      margin: '1rem auto 0.5rem',
      maxWidth: '600px',
      position: 'relative',
      ...styles
    }}>
      {children}
    </div>
  )
}