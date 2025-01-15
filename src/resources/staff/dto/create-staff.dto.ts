import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStaffDto {
  @ApiProperty({
    type: String,
    description: 'Name of the staff',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
    description: 'Email of the staff',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    type: String,
    description: 'CPF of the staff',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @ApiProperty({
    type: String,
    description: 'Password of the staff',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    type: String,
    description: 'Password confirmation of the staff',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  passwordConfirmation: string;

  @ApiProperty({
    type: String,
    description: 'Image of the staff',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  image: string;

  @ApiProperty({
    type: Boolean,
    description: 'Status of the staff',
    required: true,
  })
  @IsNotEmpty()
  @IsBoolean()
  active: boolean;

  @ApiProperty({
    type: String,
    description: 'Phone of the staff',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    type: Number,
    description: 'Role ID of the staff',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  roleId: number;
}
