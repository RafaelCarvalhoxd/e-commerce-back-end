import { Controller, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteRoleUseCase } from 'src/resources/roles/usecase/delete-role.usecase';

@ApiTags('Role')
@Controller('role')
export class DeleteRoleController {
  constructor(private readonly useCase: DeleteRoleUseCase) {}

  @Delete(':id')
  async deleteRole(@Param('id') id: number): Promise<void> {
    await this.useCase.deleteRole({ id });
  }
}
