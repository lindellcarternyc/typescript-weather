import * as React from 'react'

interface IGridProps {
  children?: React.ReactNode
}
export default class Grid extends React.Component<IGridProps> {
  public render() {
    const { children } = this.props
    return (
      <div
        style={{
          display: 'grid',
          gridGap: '0.5rem',
          padding: '0.5rem'
        }}
      >
        {children}
      </div>
    )
  }
}