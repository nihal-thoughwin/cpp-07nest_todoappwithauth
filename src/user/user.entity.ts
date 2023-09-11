import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TodoEntity } from '../todo/todo.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => TodoEntity, (todo) => todo.user)
  todos: TodoEntity[];
}
