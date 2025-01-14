import { RoleModel } from 'src/resources/roles/model/role.model';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('staff')
export class StaffModel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'name' })
  name: string;

  @Column({ type: 'varchar', name: 'email' })
  email: string;

  @Column({ type: 'varchar', name: 'password' })
  password: string;

  @Column({ type: 'varchar', name: 'image' })
  image: string;

  @Column({ type: 'boolean', name: 'active' })
  active: boolean;

  @Column({ type: 'varchar', name: 'phone' })
  phone: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => RoleModel, (role) => role.staff)
  @JoinColumn({ name: 'role_id' })
  role: RoleModel;
}
