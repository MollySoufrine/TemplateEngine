const Employee = require(`./Employee.js`);
class Manager extends Employee {
  constructor(id, name, email, officeNumber, role) {
    super(id, name, email);
    this.officeNumber = officeNumber;
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
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
