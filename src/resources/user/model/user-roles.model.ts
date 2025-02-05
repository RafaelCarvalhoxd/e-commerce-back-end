import { RoleModel } from 'src/resources/roles/model/role.model';
import { UserModel } from 'src/resources/user/model/user.model';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user_roles')
export class UserRole {
  @PrimaryColumn({ name: 'user_id', type: 'int' })
  userId: number;

  @PrimaryColumn({ name: 'role_id', type: 'int' })
  roleId: number;

  @ManyToOne(() => UserModel, (user) => user.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: UserModel;

  @ManyToOne(() => RoleModel, (role) => role.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'role_id' })
  role: RoleModel;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
