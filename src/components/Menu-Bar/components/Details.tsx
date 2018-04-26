import * as React from 'react'

interface IDetailsProps {
  city: string
  time: string
}
export default (props: IDetailsProps): JSX.Element => {
  const { city, time } = props
  return (
    <div
      style={{textAlign: 'center'}}
    >
      <p>{city}</p>
      <p
        style={{
          fontSize: '0.85rem'
        }}
      >{time}</p>
    </div>
  )
}