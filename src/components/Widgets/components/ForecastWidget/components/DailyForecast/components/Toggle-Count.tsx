import * as React from 'react'

import { AccentColor } from './styles'

interface IToggleCountButtonProps {
  count: 5 | 10
  isCurrentCount: boolean
  onClick: (count: 5 | 10) => void
}
const ToggleCountButton = (props: IToggleCountButtonProps) => {
  const { count, isCurrentCount } = props
  const onClick = () => {
    // tslint:disable-next-line:no-console
    console.log('click')
    props.onClick(props.count)
  }
  return (
    <span 
      style={{
        color: isCurrentCount ? AccentColor : 'white'
      }}
      onClick={onClick}
    >{count}</span>
  )
}

interface IToggleCountProps {
  currentCount: 5 | 10
  onClick: (count: 5 | 10) => void
}
export default (props: IToggleCountProps): JSX.Element => {
  const { currentCount, onClick } = props
  return (
    <div
      style={{
        cursor: 'pointer',
        fontSize:'0.75rem',
        marginTop: '0.5rem'
      }}
    >
      <>
        <ToggleCountButton count={5} 
          isCurrentCount={currentCount === 5} 
          onClick={onClick}
        />
        <span style={{margin: '0 0.25rem'}}>|</span>
        <ToggleCountButton 
          count={10} 
          isCurrentCount={currentCount === 10} 
          onClick={onClick}
        />
      </>
    </div>
  )
}