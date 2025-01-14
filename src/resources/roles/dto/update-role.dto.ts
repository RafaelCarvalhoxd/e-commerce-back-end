import { PartialType } from '@nestjs/swagger';
import { CreateRoleDto } from 'src/resources/roles/dto/create-role.dto';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {}
