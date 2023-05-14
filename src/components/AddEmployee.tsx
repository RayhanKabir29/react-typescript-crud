import { useState } from "react";
import { IEmployee } from "./Employee.type";

type BackButtonProps = {
  onClickBackBtn: () => void;
  onSubMitClickHnd: (data: IEmployee) => void;
};
const AddEmployee = (props: BackButtonProps) => {
  const { onClickBackBtn, onSubMitClickHnd } = props;

  const [firstName, setFirstName] = useState("");
  const [lasttName, setLastName] = useState("");
  const [email, setEmail] = useState("");

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
    const data: IEmployee = {
      id: new Date().toJSON.toString(),
      firstName: firstName,
      lastName: lasttName,
      email: email,
    };
    onSubMitClickHnd(data);
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
          <input type="button" value="Add Employee" />
        </div>
      </form>
    </>
  );
};

export default AddEmployee;
