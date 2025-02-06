import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { CreateRoleDto } from 'src/resources/roles/dto/create-role.dto';
import { Role } from 'src/resources/roles/entity/role.entity';
import { CreateRoleUseCase } from 'src/resources/roles/usecase/create-role.usecase';

@ApiTags('Role')
@ApiBearerAuth()
@Controller('role')
export class CreateRoleController {
  constructor(private readonly useCase: CreateRoleUseCase) {}

  @UseGuards(AuthGuard)
  @Post()
  async createRole(@Body() input: CreateRoleDto): Promise<Role> {
    return this.useCase.createRole({
      name: input.name,
    });
  }
}
