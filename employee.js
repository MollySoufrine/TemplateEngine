class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  } //Returns employee
}

const employee = new Employee("Alice", 100, "test@test.com");
// console.log(e.name);

// const Manager = new Employee();
// const Intern = new Employee();
// const Engineer = new Employee();
module.exports = Employee;
