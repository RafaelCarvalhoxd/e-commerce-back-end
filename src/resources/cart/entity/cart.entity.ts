import { Product } from 'src/resources/product/entity/product.entity';

export class Cart {
  id: number;
  product: Product;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: number,
    product: Product,
    createdAt: Date,
    updatedAt: Date,
    quantity: number,
  ) {
    this.id = id;
    this.product = product;
    this.quantity = quantity;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
