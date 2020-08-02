const Employee = require(`./Employee.js`);
class Intern extends Employee {
  constructor(id, name, email, school, role) {
    super(id, name, email);
    this.school = school;
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
    return this.role;
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
