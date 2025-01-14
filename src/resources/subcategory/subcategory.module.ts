import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from 'src/resources/category/category.module';
import { CreateSubCategoryRepositoryContract } from 'src/resources/subcategory/contract/create-subcategory.contract';
import { DeleteSubCategoryRepositoryContract } from 'src/resources/subcategory/contract/delete-subcategory.contract';
import { FindSubCategoryRepositoryContract } from 'src/resources/subcategory/contract/find-subcategory.contract';
import { ListSubCategoryRepositoryContract } from 'src/resources/subcategory/contract/list-subcategory.contract';
import { UpdateSubCategoryRepositoryContract } from 'src/resources/subcategory/contract/update-subcategory.contract';
import { CreateSubCategoryController } from 'src/resources/subcategory/controller/create-subcategory.controller';
import { DeleteSubCategoryController } from 'src/resources/subcategory/controller/delete-subcategory.controller';
import { FindSubCategoryController } from 'src/resources/subcategory/controller/find-subcategory.controller';
import { ListSubCategoryController } from 'src/resources/subcategory/controller/list-subcategory.controller';
import { UpdateSubCategoryController } from 'src/resources/subcategory/controller/update-subcategory.controller';
import { SubCategoryModel } from 'src/resources/subcategory/model/subcategory.model';
import { CreateSubCategoryRepository } from 'src/resources/subcategory/repository/create-subcategory.repository';
import { DeleteSubCategoryRepository } from 'src/resources/subcategory/repository/delete-subcategory.repository';
import { FindSubCategoryRepository } from 'src/resources/subcategory/repository/find-subcategory.repository';
import { ListSubCategoryRepository } from 'src/resources/subcategory/repository/list-subcategory.repository';
import { UpdateSubCategoryRepository } from 'src/resources/subcategory/repository/update-subcategory.repository';
import { CreateSubCategoryService } from 'src/resources/subcategory/service/create-subcategory.service';
import { DeleteSubCategoryService } from 'src/resources/subcategory/service/delete-subcategory.service';
import { FindSubCategoryService } from 'src/resources/subcategory/service/find-subcategory.service';
import { ListSubCategoryService } from 'src/resources/subcategory/service/list-subcategory.service';
import { UpdateSubCategoryService } from 'src/resources/subcategory/service/update-subcategory.service';
import { CreateSubCategoryUseCase } from 'src/resources/subcategory/usecase/create-subcategory.usecase';
import { DeleteSubCategoryUseCase } from 'src/resources/subcategory/usecase/delete-subcategory.usecase';
import { FindSubCategoryUseCase } from 'src/resources/subcategory/usecase/find-subcategory.usecase';
import { ListSubCategoryUseCase } from 'src/resources/subcategory/usecase/list-subcategory.usecase';
import { UpdateSubCategoryUseCase } from 'src/resources/subcategory/usecase/update-subcategory.usecase';

const resources: Provider[] = [
  {
    provide: CreateSubCategoryRepositoryContract,
    useClass: CreateSubCategoryRepository,
  },
  {
    provide: ListSubCategoryRepositoryContract,
    useClass: ListSubCategoryRepository,
  },
  {
    provide: UpdateSubCategoryRepositoryContract,
    useClass: UpdateSubCategoryRepository,
  },
  {
    provide: FindSubCategoryRepositoryContract,
    useClass: FindSubCategoryRepository,
  },
  {
    provide: DeleteSubCategoryRepositoryContract,
    useClass: DeleteSubCategoryRepository,
  },
  {
    provide: CreateSubCategoryUseCase,
    useClass: CreateSubCategoryService,
  },
  {
    provide: ListSubCategoryUseCase,
    useClass: ListSubCategoryService,
  },
  {
    provide: UpdateSubCategoryUseCase,
    useClass: UpdateSubCategoryService,
  },
  {
    provide: FindSubCategoryUseCase,
    useClass: FindSubCategoryService,
  },
  {
    provide: DeleteSubCategoryUseCase,
    useClass: DeleteSubCategoryService,
  },
];

@Module({
  imports: [TypeOrmModule.forFeature([SubCategoryModel]), CategoryModule],
  controllers: [
    CreateSubCategoryController,
    ListSubCategoryController,
    FindSubCategoryController,
    UpdateSubCategoryController,
    DeleteSubCategoryController,
  ],
  providers: [...resources],
  exports: [...resources],
})
export class SubCategoryModule {}
