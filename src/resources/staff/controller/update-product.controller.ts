import { Body, Controller, Param, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateStaffDto } from 'src/resources/Staff/dto/update-Staff.dto';
import { Staff } from 'src/resources/staff/entity/staff.entity';
import { UpdateStaffUseCase } from 'src/resources/staff/usecase/update-staff.usecase';

@ApiTags('Staff')
@Controller('staff')
export class UpdateStaffController {
  constructor(private readonly useCase: UpdateStaffUseCase) {}

  @Patch(':id')
  async updateStaff(
    @Param('id') id: number,
    @Body() input: UpdateStaffDto,
  ): Promise<Staff> {
    return this.useCase.updateStaff({
      id,
      name: input.name,
      email: input.email,
      password: input.password,
      passwordConfirmation: input.passwordConfirmation,
      image: input.image,
      active: input.active,
      phone: input.phone,
      roleId: input.roleId,
    });
  }
}
