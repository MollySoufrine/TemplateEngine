const Employee = require("./employee");
class Engineer extends Employee {
  constructor(id, github) {
    super(id, name, email);
    this.github = github;
    this.id = id;
  }
}
