import { IEmployee, dummyEmployeeList } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import Header from "./Header/Header";
import { useState } from "react";
const Home = () => {
  const [employeeList, setEmployeeList] = useState(
    dummyEmployeeList as IEmployee[]
  );
  return (
    <div>
      <Header />
      <EmployeeList />
    </div>
  );
};

export default Home;
