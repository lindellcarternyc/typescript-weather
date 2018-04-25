import * as React from 'react'

interface IIconProps {
  name: string
  fontSize?: string
}
export default (props: IIconProps): JSX.Element => {
  const { name, fontSize } = props
  const className = 'wi wi-' + name
  return <i className={className} style={{fontSize}} />
}