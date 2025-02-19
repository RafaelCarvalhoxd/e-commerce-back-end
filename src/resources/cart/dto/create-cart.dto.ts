import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCartDto {
  @ApiProperty({
    description: 'The product id',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  productId: number;
}
