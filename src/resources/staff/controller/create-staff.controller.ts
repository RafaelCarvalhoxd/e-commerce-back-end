import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateStaffDto } from 'src/resources/staff/dto/create-staff.dto';
import { Staff } from 'src/resources/staff/entity/staff.entity';
import { CreateStaffUseCase } from 'src/resources/staff/usecase/create-staff.usecase';

@ApiTags('Staff')
@Controller('Staff')
export class CreateStaffController {
  constructor(private readonly useCase: CreateStaffUseCase) {}

  @Post()
  async createStaff(@Body() input: CreateStaffDto): Promise<Staff> {
    return this.useCase.createStaff({
      name: input.name,
      email: input.email,
      cpf: input.cpf,
      password: input.password,
      passwordConfirmation: input.passwordConfirmation,
      image: input.image,
      active: input.active,
      phone: input.phone,
      roleId: input.roleId,
    });
  }
}
