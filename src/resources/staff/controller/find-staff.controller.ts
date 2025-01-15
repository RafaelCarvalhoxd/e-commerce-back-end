import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Staff } from 'src/resources/staff/entity/staff.entity';
import { FindStaffUseCase } from 'src/resources/staff/usecase/find-staff.usecase';

@ApiTags('Staff')
@Controller('staff')
export class FindStaffController {
  constructor(private readonly useCase: FindStaffUseCase) {}

  @Get(':id')
  async findStaff(@Param('id') id: number): Promise<Staff> {
    return this.useCase.findStaff({
      id: id,
    });
  }
}
