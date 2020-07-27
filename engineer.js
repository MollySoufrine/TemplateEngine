const Employee = require(`./Employee`);
class Engineer extends Employee {
  constructor(id, name, email, github, role) {
    super(id, name, email);
    this.github = github;
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
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
