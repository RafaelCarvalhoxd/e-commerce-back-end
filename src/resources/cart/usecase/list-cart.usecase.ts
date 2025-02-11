import { User } from 'src/common/types/user.type';
import { Cart } from 'src/resources/cart/entity/cart.entity';

export abstract class ListCartUsecase {
  abstract execute(input: { user: User }): Promise<Cart[]>;
}
