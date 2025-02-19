import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateCartRepositoryContract } from 'src/resources/cart/contract/update-cart.contract';
import { Cart } from 'src/resources/cart/entity/cart.entity';
import { CartModel } from 'src/resources/cart/model/cart.model';
import { Repository } from 'typeorm';

@Injectable()
export class UpdateCartRepository implements UpdateCartRepositoryContract {
  constructor(
    @InjectRepository(CartModel)
    private readonly repository: Repository<CartModel>,
  ) {}

  async execute(input: {
    userId: number;
    productId: number;
    quantity: number;
  }): Promise<Cart> {
    this.repository.update(
      {
        user: {
          id: input.userId,
        },
        product: {
          id: input.productId,
        },
      },
      {
        quantity: input.quantity,
      },
    );
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

    return cart.toEntity();
  }
}
