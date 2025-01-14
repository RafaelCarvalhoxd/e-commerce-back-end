import { Injectable, NotFoundException } from '@nestjs/common';
import { FindRoleRepositoryContract } from 'src/resources/roles/contract/find-role.contract';
import { Role } from 'src/resources/roles/entity/role.entity';
import { FindRoleUseCase } from 'src/resources/roles/usecase/find-role.usecase';

@Injectable()
export class FindRoleService implements FindRoleUseCase {
  constructor(
    private readonly findRoleRepository: FindRoleRepositoryContract,
  ) {}

  async findRole(input: { id?: number; name?: string }): Promise<Role> {
    const role = await this.findRoleRepository.findRole({
      id: input.id,
      name: input.name,
    });
    if (!role) throw new NotFoundException('Role not found!');
    return role;
  }
}
