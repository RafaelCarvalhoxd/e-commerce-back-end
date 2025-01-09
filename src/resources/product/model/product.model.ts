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

  @Column({ name: 'name', type: 'varchar', length: 255 })
  name: string;

  @Column({ nullable: true, name: 'description', type: 'text' })
  description?: string;

  @Column({ name: 'price', type: 'decimal' })
  price: number;

  @Column({ nullable: true, name: 'discount_price', type: 'decimal' })
  discountPrice?: number;

  @ManyToOne(() => SubCategoryModel, (subcategory) => subcategory.id)
  @JoinColumn({ name: 'subcategory_id' })
  subcategoryId?: number;

  @Column({ name: 'active', type: 'boolean' })
  active: boolean;

  @Column({ nullable: true, name: 'image', type: 'text' })
  image?: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true, name: 'updated_at', type: 'timestamp' })
  updatedAt?: Date;
}
