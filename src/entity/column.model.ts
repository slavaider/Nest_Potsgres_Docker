import { Column, Entity, ManyToOne,PrimaryGeneratedColumn } from 'typeorm';
import Board from './board.model';
@Entity()
class TaskColumn {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title?: string = 'title';

  @Column()
  order?: number = 0;

  @ManyToOne(() => Board, board => board.columns)
  board?: Board;
}

export default TaskColumn;
