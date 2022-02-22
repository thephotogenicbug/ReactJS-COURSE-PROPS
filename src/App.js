import logo from './logo.svg';
import './App.css';
import EmployeePropsParent from './EmployeePropsParent';
import ClassEmployeePropsParent from './ClassEmployeePropsParent';
import Employees from './Employee';

function App() {
  return (
    <div className="App">
      <EmployeePropsParent />
      <hr />
      <ClassEmployeePropsParent />
      <hr />
      <Employees />
    </div>
  );
}

export default App;
