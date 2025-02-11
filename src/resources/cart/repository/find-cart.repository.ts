import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindCartRepositoryContract } from 'src/resources/cart/contract/find-cart.contract';
import { Cart } from 'src/resources/cart/entity/cart.entity';
import { CartModel } from 'src/resources/cart/model/cart.model';
import { Repository } from 'typeorm';

@Injectable()
export class FindCartRepository implements FindCartRepositoryContract {
  constructor(
    @InjectRepository(CartModel)
    private readonly repository: Repository<CartModel>,
  ) {}

  async execute(input: { userId: number; productId: number }): Promise<Cart> {
    const cart = await this.repository.findOne({
      relations: {
        product: true,
      },
      where: {
        user: {
          id: input.userId,
        },
        product: {
          id: input.productId,
        },
      },
    });

    return cart;
  }
}
