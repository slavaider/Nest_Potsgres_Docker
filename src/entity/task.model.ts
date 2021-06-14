import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Board from './board.model';
import TaskColumn from './column.model';
import User from './user.model';

@Entity()
class Task {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  title?: string;
  @Column()
  order?: number = 0;
  @Column()
  description?: string;
  @OneToOne(() => Board,board=>board.id)
  boardId?: Board;
  @OneToOne(() => User,user=>user.id)
  userId?: User | null;
  @OneToOne(() => TaskColumn,column=>column.id)
  columnId?: TaskColumn;

}

export default Task;
