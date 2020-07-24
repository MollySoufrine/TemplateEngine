class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
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
    return `My role is ${this.role}`;
  } //Returns employee
}

const e = new Employee();
// console.log(e.name);

// const Manager = new Employee();
// const Intern = new Employee();
// const Engineer = new Employee();
module.exports();
