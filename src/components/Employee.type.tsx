export interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}
export const dummyEmployeeList: IEmployee[] = [
  {
    id: new Date().toJSON().toString(),
    firstName: "Rayhan",
    lastName: "Kabir",
    email: "kabir@gmail.com",
  },
];
export enum EmployeePageEnum {
  list,
  add,
}
