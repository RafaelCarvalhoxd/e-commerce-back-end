import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateCartDto {
  @ApiProperty({
    description: 'The quantity of the product',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
