import { CategoryModel } from 'src/resources/category/model/category.model';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'subcategory' })
export class SubCategoryModel {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 255 })
  name: string;

  @ManyToOne(() => CategoryModel, (category) => category.id)
  @JoinColumn({ name: 'category_id' })
  categoryId: number;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true, name: 'updated_at', type: 'timestamp' })
  updatedAt?: Date;
}
