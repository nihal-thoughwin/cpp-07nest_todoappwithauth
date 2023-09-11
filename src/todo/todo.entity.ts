import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity()
export class TodoEntity {
  @PrimaryGeneratedColumn()
  todo_id: number;

  @Column()
  title: string;

  @ManyToOne(() => UserEntity, (user) => user.todos)
  user: UserEntity;
}
