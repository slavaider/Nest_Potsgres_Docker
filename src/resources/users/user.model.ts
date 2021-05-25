import {v4} from 'uuid'
class User {
  public id: string;
  public name: string;
  public login: string;
  public password: string;
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

  static toResponse(user:User) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
export default User
