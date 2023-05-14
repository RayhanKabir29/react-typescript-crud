export interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export enum EmployeePageEnum {
  list,
  add,
  edit,
}
