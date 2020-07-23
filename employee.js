class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return console.log(`My employee's name is ${this.name}`);
  }
  getId() {
    return console.log(`My employee ID is ${this.id}`);
  }
  getEmail() {
    return console.log(`My employee email is ${this.email}`);
  }
  getRole() {
    return "employee";
  } //Returns employee
}

const e = new Employee();
// const Manager = new Employee();
// const Intern = new Employee();
// const Engineer = new Employee();
getEmail("msgmail.com");
getId(667788);
getName("John");
module.exports(Employee.module);
