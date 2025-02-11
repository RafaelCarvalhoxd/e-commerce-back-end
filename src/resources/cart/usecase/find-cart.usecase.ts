import { User } from 'src/common/types/user.type';
import { Cart } from 'src/resources/cart/entity/cart.entity';

export abstract class FindCartUsecase {
  abstract execute(input: { user: User; productId: number }): Promise<Cart>;
}
