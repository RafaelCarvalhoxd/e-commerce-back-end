import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Role } from 'src/resources/roles/entity/role.entity';
import { FindRoleUseCase } from 'src/resources/roles/usecase/find-role.usecase';

@ApiTags('Role')
@Controller('role')
export class FindRoleController {
  constructor(private readonly useCase: FindRoleUseCase) {}

  @Get(':id')
  async findRole(@Param('id') id: number): Promise<Role> {
    return this.useCase.findRole({
      id: id,
    });
  }
}
