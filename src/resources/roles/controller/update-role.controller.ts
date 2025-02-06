import { Body, Controller, Param, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { UpdateRoleDto } from 'src/resources/roles/dto/update-role.dto';
import { Role } from 'src/resources/roles/entity/role.entity';
import { UpdateRoleUseCase } from 'src/resources/roles/usecase/update-role.usecase';

@ApiTags('Role')
@ApiBearerAuth()
@Controller('role')
export class UpdateRoleController {
  constructor(private readonly useCase: UpdateRoleUseCase) {}

  @UseGuards(AuthGuard)
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
