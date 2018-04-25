import * as React from 'react'

import ToggleCountButton from './components/Toggle-Count-Button'

interface IToggleCountProps {
  currentCount: 5 | 10
  onClick: (count: 5 | 10) => void
}

export default (props: IToggleCountProps) => {
  const { currentCount, onClick } = props

  return (
    <div
      style={{
        fontSize: '0.75rem',
        marginTop: '0.5rem'
      }}
    >
      <>
        <ToggleCountButton count={5} isCurrentCount={currentCount === 5} onClick={onClick} />
        <span style={{margin: '0 0.25rem'}}>|</span>
        <ToggleCountButton count={10} isCurrentCount={currentCount === 10} onClick={onClick} />
      </>
    </div>
  )
}