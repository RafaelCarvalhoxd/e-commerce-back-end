import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCartRepositoryContract } from 'src/resources/cart/contract/create-cart.contract';
import { Cart } from 'src/resources/cart/entity/cart.entity';
import { CartModel } from 'src/resources/cart/model/cart.model';
import { Repository } from 'typeorm';

@Injectable()
export class CreateCartRepository implements CreateCartRepositoryContract {
  constructor(
    @InjectRepository(CartModel)
    private readonly repository: Repository<CartModel>,
  ) {}

  async execute(input: {
    userId: number;
    productId: number;
    quantity: number;
  }): Promise<Cart> {
    const cart = this.repository.create({
      user: {
        id: input.userId,
      },
      product: {
        id: input.productId,
      },
      quantity: input.quantity,
    });

    const savedCart = await this.repository.save(cart);

    return savedCart;
  }
}
