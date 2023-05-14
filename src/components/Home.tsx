import {
  EmployeePageEnum,
  IEmployee,
  dummyEmployeeList,
} from "./Employee.type";
import EmployeeList from "./EmployeeList";
import Header from "./Header/Header";
import { useState } from "react";
import "./Home.style.css";
import AddEmployee from "./AddEmployee";
const Home = () => {
  const [employeeList, setEmployeeList] = useState(
    dummyEmployeeList as IEmployee[]
  );
  const [shownPage, setShownPage] = useState(EmployeePageEnum.list);

  const onAddEmployeeHandler = () => {
    setShownPage(EmployeePageEnum.add);
  };
  const showEmployeeList = () => {
    setShownPage(EmployeePageEnum.list);
  };
  const addEmployee = (data: IEmployee) => {
    setEmployeeList([...employeeList, data]);
  };
  return (
    <div>
      <Header />
      <div className="employee-list">
        {shownPage === EmployeePageEnum.list && (
          <>
            <input
              type="button"
              value="Add Employee"
              onClick={onAddEmployeeHandler}
            />
            <EmployeeList list={employeeList} />
          </>
        )}
        {shownPage === EmployeePageEnum.add && (
          <AddEmployee
            onClickBackBtn={showEmployeeList}
            handleSubmit={addEmployee}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
