import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { ToArrayNumberPipe } from 'src/common/pipes/to-array-number.pipe';
import { Staff } from 'src/resources/staff/entity/staff.entity';
import { ListStaffUseCase } from 'src/resources/staff/usecase/list-staff.usecase';

@ApiTags('Staff')
@Controller('Staff')
export class ListStaffController {
  constructor(private readonly useCase: ListStaffUseCase) {}

  @ApiQuery({
    name: 'ids',
    required: false,
    isArray: true,
    description: 'List of staff ids',
  })
  @ApiQuery({
    name: 'roleIds',
    required: false,
    isArray: true,
    description: 'List of role ids',
  })
  @ApiQuery({
    name: 'name',
    required: false,
    type: String,
    description: 'Staff name',
  })
  @Get()
  async list(
    @Query('ids', ToArrayNumberPipe) ids?: number[],
    @Query('roleIds', ToArrayNumberPipe) roleIds?: number[],
    @Query('name') name?: string,
  ): Promise<Staff[]> {
    return this.useCase.listStaff({
      ids: ids,
      roleIds: roleIds,
      name: name,
    });
  }
}
