import { Body, Controller, Param, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { User } from 'src/common/types/user.type';
import { UpdateCartDto } from 'src/resources/cart/dto/update-cart.dto';
import { Cart } from 'src/resources/cart/entity/cart.entity';
import { UpdateCartUsecase } from 'src/resources/cart/usecase/update-cart.usecase';

@ApiBearerAuth()
@ApiTags('Cart')
@Controller('cart')
export class UpdateCartController {
  constructor(private readonly usecase: UpdateCartUsecase) {}

  @UseGuards(AuthGuard)
  @Put(':productId')
  async index(
    @CurrentUser() user: User,
    @Param('productId') productId: number,
    @Body() dto: UpdateCartDto,
  ): Promise<Cart> {
    return await this.usecase.execute({
      user: user,
      productId: productId,
      quantity: dto.quantity,
    });
  }
}
