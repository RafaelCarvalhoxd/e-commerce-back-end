import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterCustomerDto {
  @ApiProperty({ example: 'John Doe' })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name: string;

  @ApiProperty({ example: 'john.doe@example.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password123' })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'password123' })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  confirmPassword: string;

  @ApiProperty({ example: '1990-01-01' })
  @IsNotEmpty()
  @IsDateString()
  birthdate: Date;

  @ApiProperty({ example: '+5511999999999' })
  @IsNotEmpty()
  @IsPhoneNumber('BR')
  phone: string;

  @ApiProperty({ example: 'M' })
  @IsNotEmpty()
  @Matches(/^[MF]$/)
  gender: 'M' | 'F';

  @ApiProperty({ example: '12345678901' })
  @IsNotEmpty()
  @Matches(/^\d{11}$/)
  cpf: string;
}
