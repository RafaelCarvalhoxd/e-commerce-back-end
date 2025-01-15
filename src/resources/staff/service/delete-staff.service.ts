import { Injectable } from '@nestjs/common';
import { DeleteStaffRepositoryContract } from 'src/resources/staff/contract/delete-staff.contract';
import { DeleteStaffUseCase } from 'src/resources/staff/usecase/delete-staff.usecase';
import { FindStaffUseCase } from 'src/resources/staff/usecase/find-staff.usecase';

@Injectable()
export class DeleteStaffService implements DeleteStaffUseCase {
  constructor(
    private readonly deleteStaffRepository: DeleteStaffRepositoryContract,
    private readonly findStaffUseCase: FindStaffUseCase,
  ) {}

  async deleteStaff(input: { id: number }): Promise<void> {
    const staff = await this.findStaffUseCase.findStaff({ id: input.id });
    await this.deleteStaffRepository.deleteStaff({ id: staff.id });
  }
}
