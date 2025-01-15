import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteStaffRepositoryContract } from 'src/resources/staff/contract/delete-staff.contract';
import { StaffModel } from 'src/resources/staff/model/staff.model';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteStaffRepository implements DeleteStaffRepositoryContract {
  constructor(
    @InjectRepository(StaffModel)
    private readonly repository: Repository<StaffModel>,
  ) {}

  async deleteStaff(input: { id: number }): Promise<void> {
    await this.repository.delete({ id: input.id });
  }
}
