import React from "react";

// props will accept all the arguments
// Function Based Props
function EmployeePropsChild(props) {
  return (
    <div>
      <div>
        <h1>Hello, {props.name}</h1>
        <h1>Your Emp ID: {props.empid}</h1>
      </div>
    </div>
  );
}
export default EmployeePropsChild;
