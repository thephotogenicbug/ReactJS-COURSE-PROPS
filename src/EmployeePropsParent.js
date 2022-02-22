import React from 'react';
import EmployeePropsChild from './EmployeePropsChild';
// Function Based Props
function EmployeePropsParent(){
    return (
      <div>
        <h1>Props Using Functional Component</h1>
        {/* pass arguments here */}
        <EmployeePropsChild name="Naveen" empid={1001} />
      </div>
    );
}
export default EmployeePropsParent;