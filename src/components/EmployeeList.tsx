import { IEmployee } from "./Employee.type";
import "./EmployeeList.style.css";
import EmployeeModal from "./EmployeeModal";
import { useState } from "react";
type EmployeeProps = {
  list: IEmployee[];
  onClickDeleteHandler: (data: IEmployee) => void;
  editHandler: (data: IEmployee) => void;
};
const EmployeeList = (props: EmployeeProps) => {
  const { list, onClickDeleteHandler, editHandler } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataTOShow] = useState(null as IEmployee | null);

  const viewEmployeeInfo = (data: IEmployee) => {
    setDataTOShow(data);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <h2>Employee List</h2>

      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {list.map((employee) => {
          return (
            <tr key={employee.id}>
              <td>{`${employee.firstName} ${employee.lastName}`}</td>
              <td>{employee.email}</td>
              <td>
                <div>
                  <input
                    type="button"
                    value="View"
                    onClick={() => viewEmployeeInfo(employee)}
                  />
                  <input
                    type="button"
                    value="Edit"
                    onClick={() => editHandler(employee)}
                  />
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => onClickDeleteHandler(employee)}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
      {showModal && dataToShow !== null && (
        <EmployeeModal onClose={closeModal} data={dataToShow} />
      )}
    </div>
  );
};

export default EmployeeList;
