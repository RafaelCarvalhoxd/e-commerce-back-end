import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRoleRepositoryContract } from 'src/resources/roles/contract/create-role.contract';
import { Role } from 'src/resources/roles/entity/role.entity';
import { RoleModel } from 'src/resources/roles/model/role.model';
import { Repository } from 'typeorm';

@Injectable()
export class CreateRoleRepository implements CreateRoleRepositoryContract {
  constructor(
    @InjectRepository(RoleModel)
    private readonly repository: Repository<RoleModel>,
  ) {}

  async createRole(input: { name: string }): Promise<Role> {
    const role = this.repository.create({
      name: input.name,
    });
    const savedRole = await this.repository.save(role);
    return savedRole;
  }
}
