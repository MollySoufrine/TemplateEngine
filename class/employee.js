class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
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
}

// console.log(e.name);

// const Manager = new Employee();
// const Intern = new Employee();
// const Engineer = new Employee();
module.exports = Employee;
