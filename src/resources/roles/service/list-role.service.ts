import { Injectable } from '@nestjs/common';
import { ListRoleRepositoryContract } from 'src/resources/roles/contract/list-role.contract';
import { Role } from 'src/resources/roles/entity/role.entity';
import { ListRoleUseCase } from 'src/resources/roles/usecase/list-role.usecase';

@Injectable()
export class ListRoleService implements ListRoleUseCase {
  constructor(
    private readonly listRoleRepository: ListRoleRepositoryContract,
  ) {}

  async listRole(input: { name?: string }): Promise<Role[]> {
    const roles = await this.listRoleRepository.listRole({
      name: input.name,
    });
    return roles;
  }
}
