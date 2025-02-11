import { Cart } from 'src/resources/cart/entity/cart.entity';

export abstract class FindCartRepositoryContract {
  abstract execute(input: { userId: number; productId: number }): Promise<Cart>;
}
