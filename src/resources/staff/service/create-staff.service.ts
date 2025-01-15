import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { BcryptHashContract } from 'src/resources/bcrypt/contract/bcrypt.hash.contract';
import { FindRoleUseCase } from 'src/resources/roles/usecase/find-role.usecase';
import { CreateStaffRepositoryContract } from 'src/resources/staff/contract/create-staff.contract';
import { FindStaffRepositoryContract } from 'src/resources/staff/contract/find-staff.contract';
import { Staff } from 'src/resources/staff/entity/staff.entity';
import { CreateStaffUseCase } from 'src/resources/staff/usecase/create-staff.usecase';

@Injectable()
export class CreateStaffService implements CreateStaffUseCase {
  constructor(
    private readonly createStaffRepository: CreateStaffRepositoryContract,
    private readonly findStaffRepository: FindStaffRepositoryContract,
    private readonly findRoleUseCase: FindRoleUseCase,
    private readonly bcryptHash: BcryptHashContract,
  ) {}

  async createStaff(input: {
    name: string;
    email: string;
    cpf: string;
    password: string;
    passwordConfirmation: string;
    image: string;
    active: boolean;
    phone: string;
    roleId: number;
  }): Promise<Staff> {
    const [existingStaff, role] = await Promise.all([
      this.findStaffRepository.findStaff({ email: input.email }),
      this.findRoleUseCase.findRole({ id: input.roleId }),
    ]);
    if (existingStaff) throw new ConflictException('Email already exists');
    if (!role) throw new NotFoundException('Role not found');
    if (input.password !== input.passwordConfirmation)
      throw new ConflictException('Password confirmation does not match');
    const hashedPassword = await this.bcryptHash.hash({
      plainText: input.password,
      salt: 10,
    });
    return this.createStaffRepository.createStaff({
      name: input.name,
      email: input.email,
      cpf: input.cpf,
      password: hashedPassword,
      image: input.image,
      active: input.active,
      phone: input.phone,
      roleId: input.roleId,
    });
  }
}
