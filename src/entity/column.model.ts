import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
class TaskColumn {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title?: string;

  @Column()
  order?: number;

}

export default TaskColumn;
