import { Controller, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteStaffUseCase } from 'src/resources/staff/usecase/delete-staff.usecase';

@ApiTags('Staff')
@Controller('staff')
export class DeleteStaffController {
  constructor(private readonly useCase: DeleteStaffUseCase) {}

  @Delete(':id')
  async deleteStaff(@Param('id') id: number): Promise<void> {
    await this.useCase.deleteStaff({ id });
  }
}
