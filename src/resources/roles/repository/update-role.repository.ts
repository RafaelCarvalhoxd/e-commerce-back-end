import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateRoleRepositoryContract } from 'src/resources/roles/contract/update-role.contract';
import { Role } from 'src/resources/roles/entity/role.entity';
import { RoleModel } from 'src/resources/roles/model/role.model';
import { Repository } from 'typeorm';

@Injectable()
export class UpdateRoleRepository implements UpdateRoleRepositoryContract {
  constructor(
    @InjectRepository(RoleModel)
    private readonly repository: Repository<RoleModel>,
  ) {}

  async updateRole(input: { id: number; name: string }): Promise<Role> {
    await this.repository.update(input.id, { name: input.name });
    const role = await this.repository.findOne({
      where: { id: input.id },
    });
    return role;
  }
}
