import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { Roles } from 'src/common/decorators/roles.decorator';
import { UserRoles } from 'src/common/enums/roles.enum';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { User } from 'src/common/types/user.type';
import { CreateProductDto } from 'src/resources/product/dto/create-product.dto';
import { Product } from 'src/resources/product/entity/product.entity';
import { CreateProductUseCase } from 'src/resources/product/usecase/create-product.usecase';

@ApiTags('Product')
@ApiBearerAuth()
@Controller('product')
export class CreateProductController {
  constructor(private readonly useCase: CreateProductUseCase) {}

  @Roles(UserRoles.OPERATIONS)
  @UseGuards(AuthGuard)
  @Post()
  async createProduct(
    @Body() input: CreateProductDto,
    @CurrentUser() user: User,
  ): Promise<Product> {
    return this.useCase.createProduct({
      name: input.name,
      sku: input.sku,
      barcode: input.barcode,
      image: input.image,
      description: input.description,
      price: input.price,
      subcategoryId: input.subcategoryId,
      discountPrice: input.discountPrice,
      active: input.active,
      user: user,
    });
  }
}
