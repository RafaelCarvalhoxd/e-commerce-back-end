import { SubCategoryModel } from 'src/resources/subcategory/model/subcategory.model';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('product')
export class ProductModel {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ nullable: true, name: 'description' })
  description?: string;

  @Column({ name: 'price' })
  price: number;

  @Column({ nullable: true, name: 'discount_price' })
  discountPrice?: number;

  @ManyToOne(() => SubCategoryModel, (subcategory) => subcategory.id)
  @JoinColumn({ name: 'subcategory_id' })
  subcategoryId?: number;

  @Column({ name: 'active' })
  active: boolean;

  @Column({ nullable: true, name: 'image' })
  image?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true, name: 'updated_at' })
  updatedAt?: Date;
}
