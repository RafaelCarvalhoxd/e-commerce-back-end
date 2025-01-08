import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ name: 'category_id' })
  categoryId: number;

  @Column({ nullable: true, name: 'subcategory_id' })
  subcategoryId?: number;

  @Column({ name: 'active' })
  active: boolean;

  @Column({ nullable: true, name: 'image' })
  image?: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ nullable: true, name: 'updated_at' })
  updatedAt?: Date;
}
