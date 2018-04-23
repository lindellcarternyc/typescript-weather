import * as React from 'react'

export default (props: { name: string }): JSX.Element => {
  const className = 'wi wi-' + props.name
  return <i className={className} />
}