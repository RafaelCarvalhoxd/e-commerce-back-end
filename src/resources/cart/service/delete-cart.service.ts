import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/common/types/user.type';
import { DeleteCartRepositoryContract } from 'src/resources/cart/contract/delete-cart.contract';
import { FindCartRepositoryContract } from 'src/resources/cart/contract/find-cart.contract';
import { DeleteCartUsecase } from 'src/resources/cart/usecase/delete-cart.usecase';

@Injectable()
export class DeleteCartService implements DeleteCartUsecase {
  constructor(
    private readonly findCartRepository: FindCartRepositoryContract,
    private readonly deleteCartRepository: DeleteCartRepositoryContract,
  ) {}

  async execute(input: { user: User; productId: number }): Promise<boolean> {
    const cart = await this.findCartRepository.execute({
      userId: input.user.id,
      productId: input.productId,
    });
    if (!cart) throw new NotFoundException('Product in cart not found!');
    await this.deleteCartRepository.execute({
      userId: input.user.id,
      productId: input.productId,
    });
    return true;
  }
}
