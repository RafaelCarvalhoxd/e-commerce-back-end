import { User } from 'src/resources/user/entity/user.entity';
import { UserRole } from 'src/resources/user/model/user-roles.model';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('user')
export class UserModel {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'cpf', type: 'varchar' })
  cpf: string;

  @Column({ name: 'gender', type: 'varchar' })
  gender: string;

  @Column({ name: 'birthdate', type: 'date' })
  birthdate: Date;

  @Column({ name: 'phone', type: 'varchar' })
  phone: string;

  @Column({ name: 'email', type: 'varchar' })
  email: string;

  @Column({ name: 'password', type: 'varchar' })
  password: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => UserRole, (userRole) => userRole.user)
  roles: UserRole[];

  static toEntity(userModel: UserModel): User {
    if (!userModel) return null;
    return {
      id: userModel.id,
      email: userModel.email,
      cpf: userModel.cpf,
      phone: userModel.phone,
      name: userModel.name,
      gender: userModel.gender,
      birthdate: userModel.birthdate,
      password: userModel.password,
      createdAt: userModel.createdAt,
      updatedAt: userModel.updatedAt,
      roles:
        userModel.roles?.map((userRole) => ({
          id: userRole.role.id,
          name: userRole.role.name,
          createdAt: userRole.role.createdAt,
          updatedAt: userRole.role.updatedAt,
        })) || [],
    };
  }
}
