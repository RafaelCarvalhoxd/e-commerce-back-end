import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateCartRepositoryContract } from 'src/resources/cart/contract/create-cart.contract';
import { DeleteCartRepositoryContract } from 'src/resources/cart/contract/delete-cart.contract';
import { FindCartRepositoryContract } from 'src/resources/cart/contract/find-cart.contract';
import { ListCartRepositoryContract } from 'src/resources/cart/contract/list-cart.contract';
import { UpdateCartRepositoryContract } from 'src/resources/cart/contract/update-cart.contract';
import { CreateCartController } from 'src/resources/cart/controller/create-cart.controller';
import { DeleteCartController } from 'src/resources/cart/controller/delete-cart.controller';
import { ListCartController } from 'src/resources/cart/controller/list-cart.controller';
import { UpdateCartController } from 'src/resources/cart/controller/update-cart.controller';
import { CartModel } from 'src/resources/cart/model/cart.model';
import { CreateCartRepository } from 'src/resources/cart/repository/create-cart.repository';
import { DeleteCartRepository } from 'src/resources/cart/repository/delete-cart.repository';
import { FindCartRepository } from 'src/resources/cart/repository/find-cart.repository';
import { ListCartRepository } from 'src/resources/cart/repository/list-cart.repository';
import { UpdateCartRepository } from 'src/resources/cart/repository/update-cart.repository';
import { CreateCartService } from 'src/resources/cart/service/create-cart.service';
import { DeleteCartService } from 'src/resources/cart/service/delete-cart.service';
import { FindCartService } from 'src/resources/cart/service/find-cart.service';
import { ListCartService } from 'src/resources/cart/service/list-cart.service';
import { UpdateCartService } from 'src/resources/cart/service/update-cart.service';
import { CreateCartUseCase } from 'src/resources/cart/usecase/create-cart.usecase';
import { DeleteCartUsecase } from 'src/resources/cart/usecase/delete-cart.usecase';
import { FindCartUsecase } from 'src/resources/cart/usecase/find-cart.usecase';
import { ListCartUsecase } from 'src/resources/cart/usecase/list-cart.usecase';
import { UpdateCartUsecase } from 'src/resources/cart/usecase/update-cart.usecase';
import { ProductModule } from 'src/resources/product/product.module';

const resources: Provider[] = [
  {
    provide: CreateCartRepositoryContract,
    useClass: CreateCartRepository,
  },
  {
    provide: ListCartRepositoryContract,
    useClass: ListCartRepository,
  },
  {
    provide: UpdateCartRepositoryContract,
    useClass: UpdateCartRepository,
  },
  {
    provide: FindCartRepositoryContract,
    useClass: FindCartRepository,
  },
  {
    provide: DeleteCartRepositoryContract,
    useClass: DeleteCartRepository,
  },
  {
    provide: CreateCartUseCase,
    useClass: CreateCartService,
  },
  {
    provide: ListCartUsecase,
    useClass: ListCartService,
  },
  {
    provide: UpdateCartUsecase,
    useClass: UpdateCartService,
  },
  {
    provide: FindCartUsecase,
    useClass: FindCartService,
  },
  {
    provide: DeleteCartUsecase,
    useClass: DeleteCartService,
  },
];

@Module({
  imports: [TypeOrmModule.forFeature([CartModel]), ProductModule],
  controllers: [
    CreateCartController,
    ListCartController,
    UpdateCartController,
    DeleteCartController,
  ],
  providers: [...resources],
  exports: [...resources],
})
export class CartModule {}
