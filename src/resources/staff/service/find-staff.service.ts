import { Injectable, NotFoundException } from '@nestjs/common';
import { FindStaffRepositoryContract } from 'src/resources/staff/contract/find-staff.contract';
import { Staff } from 'src/resources/staff/entity/staff.entity';
import { FindStaffUseCase } from 'src/resources/staff/usecase/find-staff.usecase';

@Injectable()
export class FindStaffService implements FindStaffUseCase {
  constructor(
    private readonly findStaffRepository: FindStaffRepositoryContract,
  ) {}

  async findStaff(input: {
    id?: number;
    email?: string;
    cpf?: string;
  }): Promise<Staff> {
    const staff = await this.findStaffRepository.findStaff({
      id: input.id,
      email: input.email,
      cpf: input.cpf,
    });
    if (!staff) throw new NotFoundException('Staff not found');
    return staff;
  }
}
