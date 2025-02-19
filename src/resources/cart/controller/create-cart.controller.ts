import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { User } from 'src/common/types/user.type';
import { CreateCartDto } from 'src/resources/cart/dto/create-cart.dto';
import { Cart } from 'src/resources/cart/entity/cart.entity';
import { CreateCartUseCase } from 'src/resources/cart/usecase/create-cart.usecase';

@ApiBearerAuth()
@ApiTags('Cart')
@Controller('cart')
export class CreateCartController {
  constructor(private readonly usecase: CreateCartUseCase) {}

  @UseGuards(AuthGuard)
  @Post()
  async index(
    @CurrentUser() user: User,
    @Body() dto: CreateCartDto,
  ): Promise<Cart> {
    return await this.usecase.execute({ user: user, productId: dto.productId });
  }
}
