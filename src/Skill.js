import React from 'react'
import FullDetails from './FullDetails'

const Skill = (props) => {
  return (
    <div>
        <h3>My Skill : {props.empskill}</h3>
        <FullDetails location="Bangalore" />
    </div>
  )
}

export default Skill