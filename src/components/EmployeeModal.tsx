import { IEmployee } from "./Employee.type";
import "./EmployeeModal.style.css";
type ModalProps = {
  onClose: () => void;
  data: IEmployee;
};
const EmployeeModal = (props: ModalProps) => {
  const { onClose, data } = props;
  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <div>
            <h3>Employee Information</h3>
            <>
              <div>
                <label>First name: {data.firstName}</label>
              </div>
              <div>
                <label>Last name: {data.lastName}</label>
              </div>
              <div>
                <label>Email: {data.email}</label>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeModal;
