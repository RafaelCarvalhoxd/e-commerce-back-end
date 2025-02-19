import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListCartRepositoryContract } from 'src/resources/cart/contract/list-cart.contract';
import { Cart } from 'src/resources/cart/entity/cart.entity';
import { CartModel } from 'src/resources/cart/model/cart.model';
import { Repository } from 'typeorm';

@Injectable()
export class ListCartRepository implements ListCartRepositoryContract {
  constructor(
    @InjectRepository(CartModel)
    private readonly repository: Repository<CartModel>,
  ) {}

  async execute(input: { userId: number }): Promise<Cart[]> {
    const carts = await this.repository.find({
      relations: {
        product: true,
      },
      where: {
        user: {
          id: input.userId,
        },
      },
    });

    return carts.map((cart) => cart.toEntity());
  }
}
