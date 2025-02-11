import { User } from 'src/common/types/user.type';

export abstract class DeleteCartUsecase {
  abstract execute(input: { user: User; productId: number }): Promise<boolean>;
}
