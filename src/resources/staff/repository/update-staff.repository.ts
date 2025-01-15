import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateStaffRepositoryContract } from 'src/resources/staff/contract/update-staff.contract';
import { Staff } from 'src/resources/staff/entity/staff.entity';
import { StaffModel } from 'src/resources/staff/model/staff.model';
import { Repository } from 'typeorm';

@Injectable()
export class UpdateStaffRepository implements UpdateStaffRepositoryContract {
  constructor(
    @InjectRepository(StaffModel)
    private readonly repository: Repository<StaffModel>,
  ) {}

  async updateStaff(input: {
    id: number;
    name?: string;
    email?: string;
    cpf?: string;
    password?: string;
    image?: string;
    active?: boolean;
    phone?: string;
    roleId?: number;
  }): Promise<Staff> {
    await this.repository.update(
      { id: input.id },
      {
        name: input.name,
        email: input.email,
        cpf: input.cpf,
        password: input.password,
        image: input.image,
        active: input.active,
        phone: input.phone,
        role: { id: input.roleId },
      },
    );

    const staff = await this.repository.findOne({
      where: { id: input.id },
      relations: {
        role: true,
      },
    });

    return staff;
  }
}
