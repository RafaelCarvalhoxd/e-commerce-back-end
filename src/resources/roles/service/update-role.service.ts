import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { FindRoleRepositoryContract } from 'src/resources/roles/contract/find-role.contract';
import { UpdateRoleRepositoryContract } from 'src/resources/roles/contract/update-role.contract';
import { Role } from 'src/resources/roles/entity/role.entity';
import { UpdateRoleUseCase } from 'src/resources/roles/usecase/update-role.usecase';

@Injectable()
export class UpdateRoleService implements UpdateRoleUseCase {
  constructor(
    private readonly findRoleRepository: FindRoleRepositoryContract,
    private readonly updateRoleRepository: UpdateRoleRepositoryContract,
  ) {}

  async updateRole(input: { id: number; name: string }): Promise<Role> {
    const [role, existingRole] = await Promise.all([
      this.findRoleRepository.findRole({ id: input.id }),
      this.findRoleRepository.findRole({ name: input.name }),
    ]);
    if (!role) throw new NotFoundException('Role not found!');
    if (existingRole && existingRole.id !== role.id)
      throw new ConflictException('Role already exists!');
    const updatedRole = await this.updateRoleRepository.updateRole({
      id: role.id,
      name: input.name,
    });
    return updatedRole;
  }
}
