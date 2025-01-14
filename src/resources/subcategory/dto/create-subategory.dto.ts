import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSubCategoryDto {
  @ApiProperty({
    description: 'SubCategory name',
    example: 'SubCategory name',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Category id',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  categoryId: number;
}
