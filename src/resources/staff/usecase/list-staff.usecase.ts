import { Staff } from 'src/resources/staff/entity/staff.entity';

export abstract class ListStaffUseCase {
  abstract listStaff(input: {
    ids?: number[];
    roleIds?: number[];
    name?: string;
  }): Promise<Staff[]>;
}
