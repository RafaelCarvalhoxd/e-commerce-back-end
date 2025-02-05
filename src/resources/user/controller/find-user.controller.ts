import { Controller, Get, Param } from '@nestjs/common';
import { User } from 'src/resources/user/entity/user.entity';
import { FindUserUseCase } from 'src/resources/user/usecase/find-user.usecase';

@Controller('user')
export class FindUserController {
  constructor(private readonly usecase: FindUserUseCase) {}

  @Get(':id')
  async findUser(@Param('id') id: number): Promise<User> {
    return this.usecase.findUser({ id: id });
  }
}
