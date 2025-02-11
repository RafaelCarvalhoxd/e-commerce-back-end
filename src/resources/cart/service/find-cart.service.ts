import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/common/types/user.type';
import { FindCartRepositoryContract } from 'src/resources/cart/contract/find-cart.contract';
import { Cart } from 'src/resources/cart/entity/cart.entity';
import { FindCartUsecase } from 'src/resources/cart/usecase/find-cart.usecase';

@Injectable()
export class FindCartService implements FindCartUsecase {
  constructor(
    private readonly findCartRepository: FindCartRepositoryContract,
  ) {}

  async execute(input: { user: User; productId: number }): Promise<Cart> {
    const cart = await this.findCartRepository.execute({
      userId: input.user.id,
      productId: input.productId,
    });
    if (!cart) throw new NotFoundException('Product not in cart!');
    return cart;
  }
}
