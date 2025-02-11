import { SubCategoryModel } from 'src/resources/subcategory/model/subcategory.model';
import { UserModel } from 'src/resources/user/model/user.model';
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

  @Column({ name: 'sku', type: 'varchar', length: 255 })
  sku: string;

  @Column({ name: 'barcode', type: 'varchar', length: 255 })
  barcode: string;

  @Column({ nullable: true, name: 'description', type: 'text' })
  description?: string;

  @Column({ name: 'price', type: 'decimal' })
  price: string;

  @Column({ nullable: true, name: 'discount_price', type: 'decimal' })
  discountPrice?: string;

  @ManyToOne(() => SubCategoryModel, (subcategory) => subcategory.id)
  @JoinColumn({ name: 'subcategory_id' })
  subcategory?: SubCategoryModel;

  @Column({ name: 'active', type: 'boolean' })
  active: boolean;

  @Column({ nullable: true, name: 'image', type: 'text' })
  image?: string;

  @ManyToOne(() => UserModel)
  @JoinColumn({ name: 'created_by' })
  createdBy: UserModel;

  @ManyToOne(() => UserModel)
  @JoinColumn({ name: 'updated_by' })
  updatedBy: UserModel;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
  })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true, name: 'updated_at', type: 'timestamp' })
  updatedAt?: Date;
}
