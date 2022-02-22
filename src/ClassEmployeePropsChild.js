import React,{Component} from 'react';

class ClassEmployeePropsChild extends Component{

    render(){
        return (
          <div>
            <h1>Hello, {this.props.name}</h1>
            <h1>Your Emp ID: {this.props.empid}</h1>
          </div>
        );
    }
}

export default ClassEmployeePropsChild;