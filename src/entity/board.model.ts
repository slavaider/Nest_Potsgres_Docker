import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import TaskColumn from './column.model';

@Entity()
class Board {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title?: string;

  @ManyToMany(() => TaskColumn)
  @JoinTable()
  columns?: TaskColumn[];
}

export default Board;
