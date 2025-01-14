import { ConflictException, Injectable } from '@nestjs/common';
import { CreateRoleRepositoryContract } from 'src/resources/roles/contract/create-role.contract';
import { FindRoleRepositoryContract } from 'src/resources/roles/contract/find-role.contract';
import { Role } from 'src/resources/roles/entity/role.entity';
import { CreateRoleUseCase } from 'src/resources/roles/usecase/create-role.usecase';

@Injectable()
export class CreateRoleService implements CreateRoleUseCase {
  constructor(
    private readonly findRoleRepository: FindRoleRepositoryContract,
    private readonly createRoleRepository: CreateRoleRepositoryContract,
  ) {}

  async createRole(input: { name: string }): Promise<Role> {
    const role = await this.findRoleRepository.findRole({
      name: input.name,
    });
    if (role) throw new ConflictException('Role already exists!');
    const createdRole = await this.createRoleRepository.createRole({
      name: input.name,
    });
    return createdRole;
  }
}
