import {v4} from 'uuid';

class Task {
  public id: string;
  public title: string;
  public order: number;
  public description: string | null;
  public boardId: string | null;
  public userId: string | null;
  public columnId: string | null;
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

export default Task;
