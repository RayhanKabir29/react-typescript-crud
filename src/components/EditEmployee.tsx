import { IEmployee } from "./Employee.type";
import { useState } from "react";
type EditProps = {
  data: IEmployee;
  onClickBackBtn: () => void;
  onUpdateClickHnd: (data: IEmployee) => void;
};
const EditEmployee = (props: EditProps) => {
  const { data, onClickBackBtn, onUpdateClickHnd } = props;

  const [firstName, setFirstName] = useState(data.firstName);
  const [lasttName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);
  const handleFirstnameOnchange = (e: any) => {
    setFirstName(e.target.value);
  };
  const handleLastnameOnchange = (e: any) => {
    setLastName(e.target.value);
  };
  const handleEmailOnchange = (e: any) => {
    setEmail(e.target.value);
  };
  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const updateData: IEmployee = {
      id: data.id,
      firstName: firstName,
      lastName: lasttName,
      email: email,
    };
    onUpdateClickHnd(updateData);
    onClickBackBtn();
  };
  return (
    <>
      <form onSubmit={onSubmitBtnClickHnd}>
        <div>
          <label> First Name : </label>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstnameOnchange}
          />
        </div>
        <div>
          <label> Last Name : </label>
          <input
            type="text"
            value={lasttName}
            onChange={handleLastnameOnchange}
          />
        </div>
        <div>
          <label> Email Add. : </label>
          <input type="email" value={email} onChange={handleEmailOnchange} />
        </div>
        <div>
          <input type="button" value="Back" onClick={onClickBackBtn} />
          <input type="submit" value="Update Employee" />
        </div>
      </form>
    </>
  );
};

export default EditEmployee;
