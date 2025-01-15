import { Staff } from 'src/resources/staff/entity/staff.entity';

export abstract class FindStaffRepositoryContract {
  abstract findStaff(input: {
    id?: number;
    email?: string;
    cpf?: string;
  }): Promise<Staff>;
}
