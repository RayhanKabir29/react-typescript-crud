import { IEmployee, dummyEmployeeList } from "./Employee.type";
import Header from "./Header/Header";
import { useState } from "react";
const Home = () => {
  const [employeeList, setEmployeeList] = useState(
    dummyEmployeeList as IEmployee[]
  );
  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
