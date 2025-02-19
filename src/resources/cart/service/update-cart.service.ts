import { Injectable } from '@nestjs/common';
import { User } from 'src/common/types/user.type';
import { UpdateCartRepositoryContract } from 'src/resources/cart/contract/update-cart.contract';
import { Cart } from 'src/resources/cart/entity/cart.entity';
import { FindCartUsecase } from 'src/resources/cart/usecase/find-cart.usecase';
import { UpdateCartUsecase } from 'src/resources/cart/usecase/update-cart.usecase';
import { FindProductUseCase } from 'src/resources/product/usecase/find-product.usecase';

@Injectable()
export class UpdateCartService implements UpdateCartUsecase {
  constructor(
    private readonly findCartUsecase: FindCartUsecase,
    private readonly updateCartRepository: UpdateCartRepositoryContract,
    private readonly findProductUsecase: FindProductUseCase,
  ) {}

  async execute(input: {
    user: User;
    productId: number;
    quantity: number;
  }): Promise<Cart> {
    await Promise.all([
      this.findProductUsecase.findProduct({ id: input.productId }),
      this.findCartUsecase.execute({
        user: input.user,
        productId: input.productId,
      }),
    ]);
    const updatedCart = await this.updateCartRepository.execute({
      userId: input.user.id,
      productId: input.productId,
      quantity: input.quantity,
    });
    return updatedCart;
  }
}
