const { v4 } = require('uuid');

class Column {
  /**
   *
   * @param id
   * @param title
   * @param order
   * @returns model of Column
   */
  constructor({
                id = v4(),
                title = 'title',
                order = 0
              } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

module.exports = Column;
