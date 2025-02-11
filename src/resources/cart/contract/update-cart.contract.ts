import { Cart } from 'src/resources/cart/entity/cart.entity';

export abstract class UpdateCartRepositoryContract {
  abstract execute(input: {
    userId: number;
    productId: number;
    quantity: number;
  }): Promise<Cart>;
}
