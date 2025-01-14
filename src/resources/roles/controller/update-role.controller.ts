import { Body, Controller, Param, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateRoleDto } from 'src/resources/roles/dto/update-role.dto';
import { Role } from 'src/resources/roles/entity/role.entity';
import { UpdateRoleUseCase } from 'src/resources/roles/usecase/update-role.usecase';

@ApiTags('Role')
@Controller('role')
export class UpdateRoleController {
  constructor(private readonly useCase: UpdateRoleUseCase) {}

  @Put(':id')
  async updateRole(
    @Param('id') id: number,
    @Body() input: UpdateRoleDto,
  ): Promise<Role> {
    return this.useCase.updateRole({
      id: id,
      name: input.name,
    });
  }
}
