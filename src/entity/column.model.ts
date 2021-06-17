import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
class TaskColumn {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title?: string = 'title';

  @Column()
  order?: number = 0;
}

export default TaskColumn;
