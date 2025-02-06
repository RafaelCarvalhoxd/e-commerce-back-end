import { Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { DeleteRoleUseCase } from 'src/resources/roles/usecase/delete-role.usecase';

@ApiTags('Role')
@ApiBearerAuth()
@Controller('role')
export class DeleteRoleController {
  constructor(private readonly useCase: DeleteRoleUseCase) {}

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteRole(@Param('id') id: number): Promise<void> {
    await this.useCase.deleteRole({ id });
  }
}
