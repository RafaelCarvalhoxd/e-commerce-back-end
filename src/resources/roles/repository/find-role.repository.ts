import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindRoleRepositoryContract } from 'src/resources/roles/contract/find-role.contract';
import { Role } from 'src/resources/roles/entity/role.entity';
import { RoleModel } from 'src/resources/roles/model/role.model';
import { Repository } from 'typeorm';

@Injectable()
export class FindRoleRepository implements FindRoleRepositoryContract {
  constructor(
    @InjectRepository(RoleModel)
    private readonly repository: Repository<RoleModel>,
  ) {}

  async findRole(input: { id?: number; name?: string }): Promise<Role> {
    const whereConditions = input.name
      ? { name: input.name }
      : { id: input.id };
    const role = await this.repository.findOne({
      where: {
        ...whereConditions,
      },
    });

    return role;
  }
}
