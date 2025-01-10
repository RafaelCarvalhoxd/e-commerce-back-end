import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateProductRepositoryContract } from 'src/resources/product/contract/create-product.contract';
import { DeleteProductRepositoryContract } from 'src/resources/product/contract/delete-product.contract';
import { FindProductRepositoryContract } from 'src/resources/product/contract/find-product.contract';
import { ListProductRepositoryContract } from 'src/resources/product/contract/list-product.contract';
import { UpdateProductRepositoryContract } from 'src/resources/product/contract/update-product.contract';
import { CreateProductController } from 'src/resources/product/controller/create-product.controller';
import { DeleteProductController } from 'src/resources/product/controller/delete-product.controller';
import { FindProductController } from 'src/resources/product/controller/find-product.controller';
import { ListProductController } from 'src/resources/product/controller/list-product.controller';
import { UpdateProductController } from 'src/resources/product/controller/update-product.controller';
import { ProductModel } from 'src/resources/product/model/product.model';
import { CreateProductRepository } from 'src/resources/product/repository/create-product.repository';
import { DeleteProductRepository } from 'src/resources/product/repository/delete-product.repository';
import { FindProductRepository } from 'src/resources/product/repository/find-product.repository';
import { ListProductRepository } from 'src/resources/product/repository/list-product.repository';
import { UpdateProductRepository } from 'src/resources/product/repository/update-product.repository';
import { CreateProductService } from 'src/resources/product/service/create-product.service';
import { DeleteProductService } from 'src/resources/product/service/delete-product.service';
import { FindProductService } from 'src/resources/product/service/find-product.service';
import { ListProductService } from 'src/resources/product/service/list-product.service';
import { UpdateProductService } from 'src/resources/product/service/update-product.service';
import { CreateProductUseCase } from 'src/resources/product/usecase/create-product.usecase';
import { DeleteProductUseCase } from 'src/resources/product/usecase/delete-product.usecase';
import { FindProductUseCase } from 'src/resources/product/usecase/find-product.usecase';
import { ListProductUseCase } from 'src/resources/product/usecase/list-product.usecase';
import { UpdateProductUseCase } from 'src/resources/product/usecase/update-product.usecase';

const resources: Provider[] = [
  {
    provide: CreateProductRepositoryContract,
    useClass: CreateProductRepository,
  },
  {
    provide: ListProductRepositoryContract,
    useClass: ListProductRepository,
  },
  {
    provide: UpdateProductRepositoryContract,
    useClass: UpdateProductRepository,
  },
  {
    provide: FindProductRepositoryContract,
    useClass: FindProductRepository,
  },
  {
    provide: DeleteProductRepositoryContract,
    useClass: DeleteProductRepository,
  },
  {
    provide: CreateProductUseCase,
    useClass: CreateProductService,
  },
  {
    provide: ListProductUseCase,
    useClass: ListProductService,
  },
  {
    provide: UpdateProductUseCase,
    useClass: UpdateProductService,
  },
  {
    provide: FindProductUseCase,
    useClass: FindProductService,
  },
  {
    provide: DeleteProductUseCase,
    useClass: DeleteProductService,
  },
];

@Module({
  imports: [TypeOrmModule.forFeature([ProductModel])],
  controllers: [
    CreateProductController,
    ListProductController,
    FindProductController,
    UpdateProductController,
    DeleteProductController,
  ],
  providers: [...resources],
  exports: [...resources],
})
export class ProductModule {}
