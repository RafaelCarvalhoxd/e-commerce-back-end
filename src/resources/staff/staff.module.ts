import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BcryptModule } from 'src/resources/bcrypt/bcrypt.module';
import { RoleModule } from 'src/resources/roles/roles.module';
import { CreateStaffRepositoryContract } from 'src/resources/staff/contract/create-staff.contract';
import { DeleteStaffRepositoryContract } from 'src/resources/staff/contract/delete-staff.contract';
import { FindStaffRepositoryContract } from 'src/resources/staff/contract/find-staff.contract';
import { ListStaffRepositoryContract } from 'src/resources/staff/contract/list-staff.contract';
import { UpdateStaffRepositoryContract } from 'src/resources/staff/contract/update-staff.contract';
import { CreateStaffController } from 'src/resources/staff/controller/create-staff.controller';
import { DeleteStaffController } from 'src/resources/staff/controller/delete-staff.controller';
import { FindStaffController } from 'src/resources/staff/controller/find-staff.controller';
import { ListStaffController } from 'src/resources/staff/controller/list-product.controller';
import { UpdateStaffController } from 'src/resources/staff/controller/update-product.controller';
import { StaffModel } from 'src/resources/staff/model/staff.model';
import { CreateStaffRepository } from 'src/resources/staff/repository/create-staff.repository';
import { DeleteStaffRepository } from 'src/resources/staff/repository/delete-staff.repository';
import { FindStaffRepository } from 'src/resources/staff/repository/find-staff.repository';
import { ListStaffRepository } from 'src/resources/staff/repository/list-staff.repository';
import { UpdateStaffRepository } from 'src/resources/staff/repository/update-staff.repository';
import { CreateStaffService } from 'src/resources/staff/service/create-staff.service';
import { DeleteStaffService } from 'src/resources/staff/service/delete-staff.service';
import { FindStaffService } from 'src/resources/staff/service/find-staff.service';
import { ListStaffService } from 'src/resources/staff/service/list-staff.service';
import { UpdateStaffService } from 'src/resources/staff/service/update-staff.service';
import { CreateStaffUseCase } from 'src/resources/staff/usecase/create-staff.usecase';
import { DeleteStaffUseCase } from 'src/resources/staff/usecase/delete-staff.usecase';
import { FindStaffUseCase } from 'src/resources/staff/usecase/find-staff.usecase';
import { ListStaffUseCase } from 'src/resources/staff/usecase/list-staff.usecase';
import { UpdateStaffUseCase } from 'src/resources/staff/usecase/update-staff.usecase';

const resources: Provider[] = [
  {
    provide: CreateStaffRepositoryContract,
    useClass: CreateStaffRepository,
  },
  {
    provide: ListStaffRepositoryContract,
    useClass: ListStaffRepository,
  },
  {
    provide: UpdateStaffRepositoryContract,
    useClass: UpdateStaffRepository,
  },
  {
    provide: FindStaffRepositoryContract,
    useClass: FindStaffRepository,
  },
  {
    provide: DeleteStaffRepositoryContract,
    useClass: DeleteStaffRepository,
  },
  {
    provide: CreateStaffUseCase,
    useClass: CreateStaffService,
  },
  {
    provide: ListStaffUseCase,
    useClass: ListStaffService,
  },
  {
    provide: UpdateStaffUseCase,
    useClass: UpdateStaffService,
  },
  {
    provide: FindStaffUseCase,
    useClass: FindStaffService,
  },
  {
    provide: DeleteStaffUseCase,
    useClass: DeleteStaffService,
  },
];

@Module({
  imports: [TypeOrmModule.forFeature([StaffModel]), BcryptModule, RoleModule],
  controllers: [
    CreateStaffController,
    ListStaffController,
    FindStaffController,
    UpdateStaffController,
    DeleteStaffController,
  ],
  providers: [...resources],
  exports: [...resources],
})
export class StaffModule {}
