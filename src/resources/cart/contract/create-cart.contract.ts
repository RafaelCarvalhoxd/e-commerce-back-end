import { Cart } from 'src/resources/cart/entity/cart.entity';

export abstract class CreateCartRepositoryContract {
  abstract execute(input: {
    userId: number;
    productId: number;
    quantity: number;
  }): Promise<Cart>;
}
