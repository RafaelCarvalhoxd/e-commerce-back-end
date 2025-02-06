import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { User } from 'src/resources/user/entity/user.entity';
import { FindUserUseCase } from 'src/resources/user/usecase/find-user.usecase';

@ApiTags('User')
@ApiBearerAuth()
@Controller('user')
export class FindUserController {
  constructor(private readonly usecase: FindUserUseCase) {}

  @UseGuards(AuthGuard)
  @Get(':id')
  async findUser(@Param('id') id: number): Promise<User> {
    return this.usecase.findUser({ id: id });
  }
}
