import React from 'react'
import Employee from './Employee'

const FullDetails = (props) => {
  return (
    <div>
      <Employee name="Naveen" empid={1002} />
      <h4 style={{ color: "orange" }}>Location :{props.location}</h4>
    </div>
  );
}

export default FullDetails