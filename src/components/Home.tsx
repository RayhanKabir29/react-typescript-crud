import { EmployeePageEnum, IEmployee } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import Header from "./Header/Header";
import { useState } from "react";
import "./Home.style.css";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
const Home = () => {
  const [employeeList, setEmployeeList] = useState([] as IEmployee[]);
  const [shownPage, setShownPage] = useState(EmployeePageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IEmployee);
  const onAddEmployeeHandler = () => {
    setShownPage(EmployeePageEnum.add);
  };
  const showEmployeeList = () => {
    setShownPage(EmployeePageEnum.list);
  };
  const addEmployee = (data: IEmployee) => {
    setEmployeeList([...employeeList, data]);
  };
  const handleDelete = (data: IEmployee) => {
    const indexOfData = employeeList.indexOf(data);
    const temp = [...employeeList];

    temp.splice(indexOfData, 1);
    setEmployeeList(temp);
  };
  const editEmployeeData = (data: IEmployee) => {
    setShownPage(EmployeePageEnum.edit);
    setDataToEdit(data);
  };
  const updateRecord = (data: IEmployee) => {
    const filterData = employeeList.filter(
      (singleEmployee) => singleEmployee.id === data.id
    )[0];
    const indexRecord = employeeList.indexOf(filterData);
    const tempData = [...employeeList];
    tempData[indexRecord] = data;
    setEmployeeList(tempData);
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
            <EmployeeList
              list={employeeList}
              onClickDeleteHandler={handleDelete}
              editHandler={editEmployeeData}
            />
          </>
        )}
        {shownPage === EmployeePageEnum.add && (
          <AddEmployee
            onClickBackBtn={showEmployeeList}
            onSubMitClickHnd={addEmployee}
          />
        )}
        {shownPage === EmployeePageEnum.edit && (
          <EditEmployee
            data={dataToEdit}
            onClickBackBtn={showEmployeeList}
            onUpdateClickHnd={updateRecord}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
