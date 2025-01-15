import { Injectable } from '@nestjs/common';
import { ListStaffRepositoryContract } from 'src/resources/staff/contract/list-staff.contract';
import { Staff } from 'src/resources/staff/entity/staff.entity';
import { ListStaffUseCase } from 'src/resources/staff/usecase/list-staff.usecase';

@Injectable()
export class ListStaffService implements ListStaffUseCase {
  constructor(
    private readonly listStaffRepository: ListStaffRepositoryContract,
  ) {}

  async listStaff(input: {
    ids?: number[];
    roleIds?: number[];
    name?: string;
  }): Promise<Staff[]> {
    const staff = await this.listStaffRepository.listStaff({
      ids: input.ids,
      roleIds: input.roleIds,
      name: input.name,
    });
    return staff;
  }
}
