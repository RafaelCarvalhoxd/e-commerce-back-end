import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FindUserRepositoryContract } from 'src/resources/user/contract/find-user.contract';
import { FindUserController } from 'src/resources/user/controller/find-user.controller';
import { UserModel } from 'src/resources/user/model/user.model';
import { FindUserRepository } from 'src/resources/user/repository/find-user.repository';
import { FindUserService } from 'src/resources/user/service/find-user.service';
import { FindUserUseCase } from 'src/resources/user/usecase/find-user.usecase';

const resources: Provider[] = [
  {
    provide: FindUserRepositoryContract,
    useClass: FindUserRepository,
  },
  {
    provide: FindUserUseCase,
    useClass: FindUserService,
  },
];

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  controllers: [FindUserController],
  providers: [...resources],
  exports: [...resources],
})
export class UserModule {}
