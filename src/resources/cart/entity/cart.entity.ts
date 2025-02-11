import { Product } from 'src/resources/product/entity/product.entity';

export class Cart {
  id: number;
  product: Product;
  createdAt: Date;
  updatedAt: Date;

  constructor(id: number, product: Product, createdAt: Date, updatedAt: Date) {
    this.id = id;
    this.product = product;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
