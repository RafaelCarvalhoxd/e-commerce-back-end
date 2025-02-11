import { Injectable } from '@nestjs/common';
import { User } from 'src/common/types/user.type';
import { ListCartRepositoryContract } from 'src/resources/cart/contract/list-cart.contract';
import { Cart } from 'src/resources/cart/entity/cart.entity';
import { ListCartUsecase } from 'src/resources/cart/usecase/list-cart.usecase';

@Injectable()
export class ListCartService implements ListCartUsecase {
  constructor(
    private readonly listCartRepository: ListCartRepositoryContract,
  ) {}

  async execute(input: { user: User }): Promise<Cart[]> {
    return await this.listCartRepository.execute({ userId: input.user.id });
  }
}
