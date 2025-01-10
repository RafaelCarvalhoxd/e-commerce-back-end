import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from 'src/resources/product/dto/create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {}
