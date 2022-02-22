import React,{Component} from "react";
import ClassEmployeePropsChild from "./ClassEmployeePropsChild";

class ClassEmployeePropsParent extends Component {
  render() {
    return (
      <div>
        <h1>Props Using Class Component</h1>
        <ClassEmployeePropsChild name="Naveen" empid={1001} />
      </div>
    );
  }
}

export default ClassEmployeePropsParent;
