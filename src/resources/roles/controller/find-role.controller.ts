import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { Role } from 'src/resources/roles/entity/role.entity';
import { FindRoleUseCase } from 'src/resources/roles/usecase/find-role.usecase';

@ApiTags('Role')
@ApiBearerAuth()
@Controller('role')
export class FindRoleController {
  constructor(private readonly useCase: FindRoleUseCase) {}

  @UseGuards(AuthGuard)
  @Get(':id')
  async findRole(@Param('id') id: number): Promise<Role> {
    return this.useCase.findRole({
      id: id,
    });
  }
}
