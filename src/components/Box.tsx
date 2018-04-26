import * as React from 'react'

interface IBoxProps {
  children?: React.ReactNode
  styles?: {
    alignItems?: 'center'
    display?: 'flex'
    justifyContent?: string
  }
  bordered?: boolean
  padded?: boolean
}
export default (props: IBoxProps): JSX.Element => {
  const { bordered, children, padded, styles } = props
  return (
    <div style={{
      border: bordered ? '1px solid white' : undefined,
      margin: '1rem auto 0.5rem',
      maxWidth: '600px',
      padding: padded ? '0.5rem' : 0,
      position: 'relative',
      ...styles
    }}>
      {children}
    </div>
  )
}