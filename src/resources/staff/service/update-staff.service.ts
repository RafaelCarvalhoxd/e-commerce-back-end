import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { BcryptHashContract } from 'src/resources/bcrypt/contract/bcrypt.hash.contract';
import { FindRoleUseCase } from 'src/resources/roles/usecase/find-role.usecase';
import { FindStaffRepositoryContract } from 'src/resources/staff/contract/find-staff.contract';
import { UpdateStaffRepositoryContract } from 'src/resources/staff/contract/update-staff.contract';
import { Staff } from 'src/resources/staff/entity/staff.entity';
import { UpdateStaffUseCase } from 'src/resources/staff/usecase/update-staff.usecase';

@Injectable()
export class UpdateStaffService implements UpdateStaffUseCase {
  constructor(
    private readonly updateStaffRepository: UpdateStaffRepositoryContract,
    private readonly findStaffRepository: FindStaffRepositoryContract,
    private readonly findRoleUseCase: FindRoleUseCase,
    private readonly bcryptHash: BcryptHashContract,
  ) {}

  async updateStaff(input: {
    id: number;
    name?: string;
    email?: string;
    cpf?: string;
    password?: string;
    passwordConfirmation?: string;
    image?: string;
    active?: boolean;
    phone?: string;
    roleId?: number;
  }): Promise<Staff> {
    const [existingStaff, role] = await Promise.all([
      this.findStaffRepository.findStaff({ email: input.email }),
      this.findRoleUseCase.findRole({ id: input.roleId }),
    ]);
    if (existingStaff && existingStaff.id != input.id)
      throw new ConflictException('Email already exists');
    if (!role) throw new NotFoundException('Role not found');
    if (input.password && input.password !== input.passwordConfirmation) {
      throw new ConflictException('Password confirmation does not match');
    }
    const hashedPassword = input.password
      ? await this.bcryptHash.hash({
          plainText: input.password,
          salt: 10,
        })
      : undefined;

    return this.updateStaffRepository.updateStaff({
      id: input.id,
      name: input.name ?? existingStaff.name,
      email: input.email ?? existingStaff.email,
      cpf: input.cpf ?? existingStaff.cpf,
      password: hashedPassword ?? existingStaff.password,
      image: input.image ?? existingStaff.image,
      active: input.active ?? existingStaff.active,
      phone: input.phone ?? existingStaff.phone,
      roleId: input.roleId ?? existingStaff.role.id,
    });
  }
}
