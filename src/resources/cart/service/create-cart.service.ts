import { ConflictException, Injectable } from '@nestjs/common';
import { User } from 'src/common/types/user.type';
import { CreateCartRepositoryContract } from 'src/resources/cart/contract/create-cart.contract';
import { FindCartRepositoryContract } from 'src/resources/cart/contract/find-cart.contract';
import { Cart } from 'src/resources/cart/entity/cart.entity';
import { CreateCartUseCase } from 'src/resources/cart/usecase/create-cart.usecase';
import { FindProductUseCase } from 'src/resources/product/usecase/find-product.usecase';

@Injectable()
export class CreateCartService implements CreateCartUseCase {
  constructor(
    private readonly findCartRepository: FindCartRepositoryContract,
    private readonly createCartRepository: CreateCartRepositoryContract,
    private readonly findProductUsecase: FindProductUseCase,
  ) {}

  async execute(input: { user: User; productId: number }): Promise<Cart> {
    await this.findProductUsecase.findProduct({ id: input.productId });
    const cart = await this.findCartRepository.execute({
      userId: input.user.id,
      productId: input.productId,
    });
    if (cart) throw new ConflictException('Product already in cart!');
    const createdCart = await this.createCartRepository.execute({
      userId: input.user.id,
      productId: input.productId,
      quantity: 1,
    });
    return createdCart;
  }
}
