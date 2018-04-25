import * as React from 'react'

import { ICondition } from '../../../types'

const Condition = (props: ICondition): JSX.Element => {
  const { data, name } = props
  return (
    <li 
      style={{
        borderBottom: '1px solid white',
        borderTop: '1px solid white',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.25rem 0.5rem'
      }}
    >
      <span style={{fontSize: '0.75rem', paddingTop: '0.25rem'}}>{name}</span>
      <span>{data}</span>
    </li>
  )
}

interface IConditionsProps {
  conditions: ICondition[]
}
export default (props: IConditionsProps): JSX.Element => {
  const { conditions } = props
  return (
    <ul 
      style={{
        flexGrow: 1,
        listStyle: 'none'
      }}
    >
      {conditions.map(condition => {
        return <Condition key={JSON.stringify(condition)} { ...condition }/>
      })}
    </ul>
  )
}