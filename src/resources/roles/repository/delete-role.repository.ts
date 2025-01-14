import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteRoleRepositoryContract } from 'src/resources/roles/contract/delete-role.contract';
import { RoleModel } from 'src/resources/roles/model/role.model';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteRoleRepository implements DeleteRoleRepositoryContract {
  constructor(
    @InjectRepository(RoleModel)
    private readonly repository: Repository<RoleModel>,
  ) {}

  async deleteRole(input: { id: number }): Promise<void> {
    await this.repository.delete(input.id);
  }
}
