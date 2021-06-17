import TaskColumn from './column.model';
import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Board {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title!: string;

  @OneToMany(() => TaskColumn, board => board, { cascade: true})
  @JoinTable()
  columns?: TaskColumn[];
}

export default Board;
