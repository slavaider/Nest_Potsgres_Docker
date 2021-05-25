import {v4} from 'uuid';

class Column {
  public id: string;

  public title: string;

  public order: number;

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

export default Column;
