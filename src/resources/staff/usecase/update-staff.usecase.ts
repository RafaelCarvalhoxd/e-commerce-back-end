import { Staff } from 'src/resources/staff/entity/staff.entity';

export abstract class UpdateStaffUseCase {
  abstract updateStaff(input: {
    id: number;
    name?: string;
    cpf?: string;
    email?: string;
    password?: string;
    passwordConfirmation?: string;
    image?: string;
    active?: boolean;
    phone?: string;
    roleId?: number;
  }): Promise<Staff>;
}
