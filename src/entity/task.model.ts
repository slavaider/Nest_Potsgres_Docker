import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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
  @OneToMany(() => Board,board=>board.id)
  boardId?: Board;
  @OneToMany(() => User,user=>user.id)
  userId?: User | null;
  @OneToMany(() => TaskColumn,column=>column.id)
  columnId?: TaskColumn;
}

export default Task;
