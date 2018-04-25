import * as React from 'react'

import { Blue } from '../../styles'

interface IToggleCountButtonProps {
  count: 5 | 10
  isCurrentCount: boolean
  onClick: (count: 5 | 10) => void
}

export default (props: IToggleCountButtonProps): JSX.Element => {
  const { count, isCurrentCount, onClick } = props
  const handleClick = () => { onClick(count) }
  return (
    <span
      style={{
        color: isCurrentCount ? Blue : 'white',
        cursor: 'pointer'
      }}
      onClick={handleClick}
    >{count}d</span>
  )
}