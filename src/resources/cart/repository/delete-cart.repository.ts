import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteCartRepositoryContract } from 'src/resources/cart/contract/delete-cart.contract';
import { CartModel } from 'src/resources/cart/model/cart.model';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteCartRepository implements DeleteCartRepositoryContract {
  constructor(
    @InjectRepository(CartModel)
    private readonly repository: Repository<CartModel>,
  ) {}

  async execute(input: {
    userId: number;
    productId: number;
  }): Promise<boolean> {
    await this.repository.delete({
      user: {
        id: input.userId,
      },
      product: {
        id: input.productId,
      },
    });

    return;
  }
}
