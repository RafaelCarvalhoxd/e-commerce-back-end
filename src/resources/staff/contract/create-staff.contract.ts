import { Staff } from 'src/resources/staff/entity/staff.entity';

export abstract class CreateStaffRepositoryContract {
  abstract createStaff(input: {
    name: string;
    email: string;
    password: string;
    image: string;
    active: boolean;
    phone: string;
    roleId: number;
  }): Promise<Staff>;
}
