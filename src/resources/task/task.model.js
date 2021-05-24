const { v4 } = require('uuid');

class Task {

  /**
   *
   * @param id
   * @param title
   * @param order
   * @param description
   * @param boardId
   * @param userId
   * @param columnId
   * @returns model of Task
   */
  constructor({
                id = v4(),
                title = 'title',
                order = 0,
                description = null,
                boardId = null,
                userId = null,
                columnId = null
              } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;
