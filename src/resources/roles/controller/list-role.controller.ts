import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/resources/roles/entity/role.entity';
import { ListRoleUseCase } from 'src/resources/roles/usecase/list-role.usecase';

@ApiTags('Role')
@Controller('role')
export class ListRoleController {
  constructor(private readonly useCase: ListRoleUseCase) {}

  @Get()
  @ApiQuery({
    name: 'name',
    required: false,
    description: 'Filter by Role name',
  })
  async list(@Query('name') name: string): Promise<Role[]> {
    return this.useCase.listRole({
      name: name,
    });
  }
}
