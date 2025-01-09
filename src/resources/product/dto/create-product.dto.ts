import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'The name of the product',
    example: 'Example Product',
    maxLength: 255,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @ApiProperty({
    description: 'The SKU (Stock Keeping Unit) of the product',
    example: 'SKU12345',
    maxLength: 255,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  sku: string;

  @ApiProperty({
    description: 'The barcode of the product',
    example: '1234567890123',
    maxLength: 255,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  barcode: string;

  @ApiProperty({
    description: 'The URL of the product image',
    example: 'https://example.com/product-image.jpg',
    required: false,
  })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiProperty({
    description: 'A detailed description of the product',
    example: 'This is a detailed description of the product.',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'The price of the product',
    example: '199.99',
  })
  @IsNotEmpty()
  @IsDecimal({ decimal_digits: '0,2' })
  price: number;

  @ApiProperty({
    description: 'The ID of the subcategory the product belongs to',
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsInt()
  subcategoryId?: number;

  @ApiProperty({
    description: 'The discount price of the product, if applicable',
    example: '149.99',
    required: false,
  })
  @IsOptional()
  @IsDecimal({ decimal_digits: '0,2' })
  discountPrice?: number;

  @ApiProperty({
    description: 'Whether the product is active',
    example: true,
  })
  @IsNotEmpty()
  @IsBoolean()
  active: boolean;
}
