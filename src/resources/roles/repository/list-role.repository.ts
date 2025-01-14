import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListRoleRepositoryContract } from 'src/resources/roles/contract/list-role.contract';
import { Role } from 'src/resources/roles/entity/role.entity';
import { RoleModel } from 'src/resources/roles/model/role.model';
import { Repository } from 'typeorm';

@Injectable()
export class ListRoleRepository implements ListRoleRepositoryContract {
  constructor(
    @InjectRepository(RoleModel)
    private readonly repository: Repository<RoleModel>,
  ) {}

  async listRole(input: { name?: string }): Promise<Role[]> {
    const roles = await this.repository.find({
      where: input.name ? { name: input.name } : {},
    });

    return roles;
  }
}
