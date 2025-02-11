import { Cart } from 'src/resources/cart/entity/cart.entity';

export abstract class ListCartRepositoryContract {
  abstract execute(input: { userId: number }): Promise<Cart[]>;
}
