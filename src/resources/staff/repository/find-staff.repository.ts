import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindStaffRepositoryContract } from 'src/resources/staff/contract/find-staff.contract';
import { Staff } from 'src/resources/staff/entity/staff.entity';
import { StaffModel } from 'src/resources/staff/model/staff.model';
import { Repository } from 'typeorm';

@Injectable()
export class FindStaffRepository implements FindStaffRepositoryContract {
  constructor(
    @InjectRepository(StaffModel)
    private readonly repository: Repository<StaffModel>,
  ) {}

  async findStaff(input: {
    id?: number;
    email?: string;
    cpf?: string;
  }): Promise<Staff> {
    const whereCondition = input.email
      ? { email: input.email }
      : input.cpf
        ? { cpf: input.cpf }
        : { id: input.id };
    const staff = await this.repository.findOne({
      where: whereCondition,
      relations: {
        role: true,
      },
    });
    return staff;
  }
}
