import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { Role } from 'src/resources/roles/entity/role.entity';
import { ListRoleUseCase } from 'src/resources/roles/usecase/list-role.usecase';

@ApiTags('Role')
@ApiBearerAuth()
@Controller('role')
export class ListRoleController {
  constructor(private readonly useCase: ListRoleUseCase) {}

  @UseGuards(AuthGuard)
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
