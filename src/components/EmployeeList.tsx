import { IEmployee } from "./Employee.type";
import "./EmployeeList.style.css";
type EmployeeProps = {
  list: IEmployee[];
};
const EmployeeList = (props: EmployeeProps) => {
  const { list } = props;
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
                  <input type="button" value="View" />
                  <input type="button" value="Edit" />
                  <input type="button" value="Delete" />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default EmployeeList;
