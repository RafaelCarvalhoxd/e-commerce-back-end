import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from 'src/resources/roles/dto/create-role.dto';
import { Role } from 'src/resources/roles/entity/role.entity';
import { CreateRoleUseCase } from 'src/resources/roles/usecase/create-role.usecase';

@ApiTags('Role')
@Controller('role')
export class CreateRoleController {
  constructor(private readonly useCase: CreateRoleUseCase) {}

  @Post()
  async createRole(@Body() input: CreateRoleDto): Promise<Role> {
    return this.useCase.createRole({
      name: input.name,
    });
  }
}
