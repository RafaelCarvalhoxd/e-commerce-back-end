import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RegisterCustomerDto } from 'src/resources/auth/dto/register-customer.dto';
import { RegisterCustomerUsecase } from 'src/resources/auth/usecase/register-customer.usecase';
import { User } from 'src/resources/user/entity/user.entity';

@ApiTags('Auth')
@Controller('auth/register-customer')
export class RegisterCustomerController {
  constructor(private readonly usecase: RegisterCustomerUsecase) {}

  @Post()
  async handle(@Body() dto: RegisterCustomerDto): Promise<User> {
    return this.usecase.execute(dto);
  }
}
