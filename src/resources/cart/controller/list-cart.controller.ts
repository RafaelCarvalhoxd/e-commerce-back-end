import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { User } from 'src/common/types/user.type';
import { Cart } from 'src/resources/cart/entity/cart.entity';
import { ListCartUsecase } from 'src/resources/cart/usecase/list-cart.usecase';

@ApiBearerAuth()
@ApiTags('Cart')
@Controller('cart')
export class ListCartController {
  constructor(private readonly usecase: ListCartUsecase) {}

  @UseGuards(AuthGuard)
  @Get()
  async index(@CurrentUser() user: User): Promise<Cart[]> {
    return await this.usecase.execute({ user: user });
  }
}
