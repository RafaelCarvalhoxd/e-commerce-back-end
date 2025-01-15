import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStaffRepositoryContract } from 'src/resources/staff/contract/create-staff.contract';
import { Staff } from 'src/resources/staff/entity/staff.entity';
import { StaffModel } from 'src/resources/staff/model/staff.model';
import { Repository } from 'typeorm';

@Injectable()
export class CreateStaffRepository implements CreateStaffRepositoryContract {
  constructor(
    @InjectRepository(StaffModel)
    private readonly repository: Repository<StaffModel>,
  ) {}

  async createStaff(input: {
    name: string;
    email: string;
    cpf: string;
    password: string;
    image: string;
    active: boolean;
    phone: string;
    roleId: number;
  }): Promise<Staff> {
    const staff = this.repository.create({
      name: input.name,
      email: input.email,
      cpf: input.cpf,
      password: input.password,
      image: input.image,
      active: input.active,
      phone: input.phone,
      role: { id: input.roleId },
    });
    const savedStaff = await this.repository.save(staff);
    return savedStaff;
  }
}
