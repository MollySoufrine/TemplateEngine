class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return `My employee's name is ${this.name}`;
  }
  getId() {
    return `My employee ID is ${this.id}`;
  }
  getEmail() {
    return `My employee email is ${this.email}`;
  }
  getRole() {
    return "employee";
  } //Returns employee
}

const e = new Employee("jim", 3456789, "jim@test.com");
// console.log(e.name);

// const Manager = new Employee();
// const Intern = new Employee();
// const Engineer = new Employee();
