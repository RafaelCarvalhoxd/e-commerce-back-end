import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateCategoryRepositoryContract } from 'src/resources/category/contract/create-category.contract';
import { DeleteCategoryRepositoryContract } from 'src/resources/category/contract/delete-category.contract';
import { FindCategoryRepositoryContract } from 'src/resources/category/contract/find-category.contract';
import { ListCategoryRepositoryContract } from 'src/resources/category/contract/list-category.contract';
import { UpdateCategoryRepositoryContract } from 'src/resources/category/contract/update-category.contract';
import { CreateCategoryController } from 'src/resources/category/controller/create-category.controller';
import { DeleteCategoryController } from 'src/resources/category/controller/delete-category.controller';
import { FindCategoryController } from 'src/resources/category/controller/find-category.controller';
import { ListCategoryController } from 'src/resources/category/controller/list-category.controller';
import { UpdateCategoryController } from 'src/resources/category/controller/update-category.controller';
import { CategoryModel } from 'src/resources/category/model/category.model';
import { CreateCategoryRepository } from 'src/resources/category/repository/create-category.repository';
import { DeleteCategoryRepository } from 'src/resources/category/repository/delete-category.repository';
import { FindCategoryRepository } from 'src/resources/category/repository/find-category.repository';
import { ListCategoryRepository } from 'src/resources/category/repository/list-category.repository';
import { UpdateCategoryRepository } from 'src/resources/category/repository/update-category.repository';
import { CreateCategoryService } from 'src/resources/category/service/create-category.service';
import { DeleteCategoryService } from 'src/resources/category/service/delete-category.service';
import { FindCategoryService } from 'src/resources/category/service/find-category.service';
import { ListCategoryService } from 'src/resources/category/service/list-category.service';
import { UpdateCategoryService } from 'src/resources/category/service/update-category.service';
import { CreateCategoryUseCase } from 'src/resources/category/usecase/create-category.usecase';
import { DeleteCategoryUseCase } from 'src/resources/category/usecase/delete-category.usecase';
import { FindCategoryUseCase } from 'src/resources/category/usecase/find-category.usecase';
import { ListCategoryUseCase } from 'src/resources/category/usecase/list-category.usecase';
import { UpdateCategoryUseCase } from 'src/resources/category/usecase/update-category.usecase';

const resources: Provider[] = [
  {
    provide: CreateCategoryRepositoryContract,
    useClass: CreateCategoryRepository,
  },
  {
    provide: ListCategoryRepositoryContract,
    useClass: ListCategoryRepository,
  },
  {
    provide: UpdateCategoryRepositoryContract,
    useClass: UpdateCategoryRepository,
  },
  {
    provide: FindCategoryRepositoryContract,
    useClass: FindCategoryRepository,
  },
  {
    provide: DeleteCategoryRepositoryContract,
    useClass: DeleteCategoryRepository,
  },
  {
    provide: CreateCategoryUseCase,
    useClass: CreateCategoryService,
  },
  {
    provide: ListCategoryUseCase,
    useClass: ListCategoryService,
  },
  {
    provide: UpdateCategoryUseCase,
    useClass: UpdateCategoryService,
  },
  {
    provide: FindCategoryUseCase,
    useClass: FindCategoryService,
  },
  {
    provide: DeleteCategoryUseCase,
    useClass: DeleteCategoryService,
  },
];

@Module({
  imports: [TypeOrmModule.forFeature([CategoryModel])],
  controllers: [
    CreateCategoryController,
    ListCategoryController,
    FindCategoryController,
    UpdateCategoryController,
    DeleteCategoryController,
  ],
  providers: [...resources],
  exports: [...resources],
})
export class CategoryModule {}
