const {v4} = require('uuid');

class Board {
  constructor({
                id = v4(),
                title = 'title',
                columns = []
              } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
