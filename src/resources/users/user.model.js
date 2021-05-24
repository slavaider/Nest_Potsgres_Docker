const { v4 } = require('uuid');

class User {
  /**
   *
   * @param id
   * @param name
   * @param login
   * @param password
   * @returns model of User
   */
  constructor({
                id = v4(),
                name = 'USER',
                login = 'user',
                password = 'P@55w0rd'
              } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
