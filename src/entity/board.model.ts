import TaskColumn from './column.model';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Board {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title!: string;

  @OneToMany(() => TaskColumn, column => column.board)
  @JoinColumn()
  columns?: TaskColumn[];
}

export default Board;
