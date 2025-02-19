import { Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { User } from 'src/common/types/user.type';
import { DeleteCartUsecase } from 'src/resources/cart/usecase/delete-cart.usecase';

@ApiBearerAuth()
@ApiTags('Cart')
@Controller('cart')
export class DeleteCartController {
  constructor(private readonly usecase: DeleteCartUsecase) {}

  @UseGuards(AuthGuard)
  @Delete(':productId')
  async index(
    @CurrentUser() user: User,
    @Param('productId') productId: number,
  ): Promise<boolean> {
    return await this.usecase.execute({ user: user, productId });
  }
}
