import { Cart } from 'src/resources/cart/entity/cart.entity';
import { ProductModel } from 'src/resources/product/model/product.model';
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

@Entity('cart')
export class CartModel {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @ManyToOne(() => UserModel)
  @JoinColumn({ name: 'user_id' })
  user: UserModel;

  @ManyToOne(() => ProductModel)
  @JoinColumn({ name: 'product_id' })
  product: ProductModel;

  @Column({ name: 'quantity', type: 'int' })
  quantity: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  toEntity(): Cart {
    return CartModel.toEntity(this);
  }

  static toEntity(cartModel: CartModel): Cart {
    if (!cartModel) return null;
    return {
      id: cartModel.id,
      product: cartModel.product,
      quantity: cartModel.quantity,
      createdAt: cartModel.createdAt,
      updatedAt: cartModel.updatedAt,
    };
  }
}
