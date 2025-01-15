import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf,
} from 'class-validator';

export class UpdateStaffDto {
  @ApiProperty({
    type: String,
    description: 'Name of the staff',
    required: false,
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    type: String,
    description: 'Email of the staff',
    required: false,
  })
  @IsString()
  @IsOptional()
  email?: string;

  @ApiProperty({
    type: String,
    description: 'CPF of the staff',
    required: false,
  })
  @IsString()
  @IsOptional()
  cpf?: string;

  @ApiProperty({
    type: String,
    description: 'Password of the staff',
    required: false,
  })
  @IsString()
  @IsOptional()
  password?: string;

  @ApiProperty({
    type: String,
    description: 'Password confirmation of the staff',
    required: false,
  })
  @ValidateIf((o) => o.password !== undefined)
  @IsString()
  passwordConfirmation?: string;

  @ApiProperty({
    type: String,
    description: 'Image of the staff',
    required: false,
  })
  @IsString()
  @IsOptional()
  image?: string;

  @ApiProperty({
    type: Boolean,
    description: 'Status of the staff',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @ApiProperty({
    type: String,
    description: 'Phone of the staff',
    required: false,
  })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({
    type: Number,
    description: 'Role ID of the staff',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  roleId?: number;
}
