import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateRoleRepositoryContract } from 'src/resources/roles/contract/create-role.contract';
import { DeleteRoleRepositoryContract } from 'src/resources/roles/contract/delete-role.contract';
import { FindRoleRepositoryContract } from 'src/resources/roles/contract/find-role.contract';
import { ListRoleRepositoryContract } from 'src/resources/roles/contract/list-role.contract';
import { UpdateRoleRepositoryContract } from 'src/resources/roles/contract/update-role.contract';
import { CreateRoleController } from 'src/resources/roles/controller/create-role.controller';
import { DeleteRoleController } from 'src/resources/roles/controller/delete-role.controller';
import { FindRoleController } from 'src/resources/roles/controller/find-role.controller';
import { ListRoleController } from 'src/resources/roles/controller/list-role.controller';
import { UpdateRoleController } from 'src/resources/roles/controller/update-role.controller';
import { RoleModel } from 'src/resources/roles/model/role.model';
import { CreateRoleRepository } from 'src/resources/roles/repository/create-role.repository';
import { DeleteRoleRepository } from 'src/resources/roles/repository/delete-role.repository';
import { FindRoleRepository } from 'src/resources/roles/repository/find-role.repository';
import { ListRoleRepository } from 'src/resources/roles/repository/list-role.repository';
import { UpdateRoleRepository } from 'src/resources/roles/repository/update-role.repository';
import { CreateRoleService } from 'src/resources/roles/service/create-role.service';
import { DeleteRoleService } from 'src/resources/roles/service/delete-role.service';
import { FindRoleService } from 'src/resources/roles/service/find-role.service';
import { ListRoleService } from 'src/resources/roles/service/list-role.service';
import { UpdateRoleService } from 'src/resources/roles/service/update-role.service';
import { CreateRoleUseCase } from 'src/resources/roles/usecase/create-role.usecase';
import { DeleteRoleUseCase } from 'src/resources/roles/usecase/delete-role.usecase';
import { FindRoleUseCase } from 'src/resources/roles/usecase/find-role.usecase';
import { ListRoleUseCase } from 'src/resources/roles/usecase/list-role.usecase';
import { UpdateRoleUseCase } from 'src/resources/roles/usecase/update-role.usecase';

const resources: Provider[] = [
  {
    provide: CreateRoleRepositoryContract,
    useClass: CreateRoleRepository,
  },
  {
    provide: ListRoleRepositoryContract,
    useClass: ListRoleRepository,
  },
  {
    provide: UpdateRoleRepositoryContract,
    useClass: UpdateRoleRepository,
  },
  {
    provide: FindRoleRepositoryContract,
    useClass: FindRoleRepository,
  },
  {
    provide: DeleteRoleRepositoryContract,
    useClass: DeleteRoleRepository,
  },
  {
    provide: CreateRoleUseCase,
    useClass: CreateRoleService,
  },
  {
    provide: ListRoleUseCase,
    useClass: ListRoleService,
  },
  {
    provide: UpdateRoleUseCase,
    useClass: UpdateRoleService,
  },
  {
    provide: FindRoleUseCase,
    useClass: FindRoleService,
  },
  {
    provide: DeleteRoleUseCase,
    useClass: DeleteRoleService,
  },
];

@Module({
  imports: [TypeOrmModule.forFeature([RoleModel])],
  controllers: [
    CreateRoleController,
    ListRoleController,
    FindRoleController,
    UpdateRoleController,
    DeleteRoleController,
  ],
  providers: [...resources],
  exports: [...resources],
})
export class RoleModule {}
