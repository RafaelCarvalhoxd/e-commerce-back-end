import { Staff } from 'src/resources/staff/entity/staff.entity';

export abstract class FindStaffUseCase {
  abstract findStaff(input: { id?: number; email?: string }): Promise<Staff>;
}
