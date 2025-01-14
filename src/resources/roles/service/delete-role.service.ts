import { Injectable } from '@nestjs/common';
import { DeleteRoleRepositoryContract } from 'src/resources/roles/contract/delete-role.contract';
import { DeleteRoleUseCase } from 'src/resources/roles/usecase/delete-role.usecase';
import { FindRoleUseCase } from 'src/resources/roles/usecase/find-role.usecase';

@Injectable()
export class DeleteRoleService implements DeleteRoleUseCase {
  constructor(
    private readonly findRoleUseCase: FindRoleUseCase,
    private readonly deleteRoleRepository: DeleteRoleRepositoryContract,
  ) {}

  async deleteRole(input: { id: number }): Promise<void> {
    const role = await this.findRoleUseCase.findRole({
      id: input.id,
    });
    await this.deleteRoleRepository.deleteRole({ id: role.id });
  }
}
