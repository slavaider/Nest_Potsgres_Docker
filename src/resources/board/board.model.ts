import {v4} from 'uuid';
import Column from '../column/column.model';

class Board {
  public id: string;

  public title: string;

  public columns?: Column[];

  /**
   *
   * @param id
   * @param title
   * @param columns
   * @returns model of Board
   */
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

export default Board;
