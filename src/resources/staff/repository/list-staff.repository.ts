import { Injectable } from '@nestjs/common';
import { ListStaffRepositoryContract } from 'src/resources/staff/contract/list-staff.contract';
import { Staff } from 'src/resources/staff/entity/staff.entity';
import { StaffModel } from 'src/resources/staff/model/staff.model';
import { DataSource } from 'typeorm';

@Injectable()
export class ListStaffRepository implements ListStaffRepositoryContract {
  constructor(private readonly ds: DataSource) {}

  async listStaff(input: {
    ids?: number[];
    roleIds?: number[];
    name?: string;
  }): Promise<Staff[]> {
    const staffs = this.ds
      .getRepository(StaffModel)
      .createQueryBuilder('s')
      .leftJoinAndSelect('s.role', 'r');

    if (input.ids) {
      staffs.andWhere('s.id IN (:...ids)', { ids: input.ids });
    }

    if (input.roleIds) {
      staffs.andWhere('r.id IN (:...roleIds)', { roleIds: input.roleIds });
    }

    if (input.name) {
      staffs.andWhere('s.name LIKE :name', { name: `%${input.name}%` });
    }

    return await staffs.getMany();
  }
}
