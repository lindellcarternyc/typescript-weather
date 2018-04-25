import * as React from 'react'

interface IDetailsProps {
  city: string
}
export default (props: IDetailsProps): JSX.Element => {
  const { city } = props
  return (
    <div
      style={{textAlign: 'center'}}
    >
      <p>{city}</p>
      <p
        style={{
          fontSize: '0.85rem'
        }}
      >11:48 AM EDT</p>
    </div>
  )
}