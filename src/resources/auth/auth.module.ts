import { Module, Provider } from '@nestjs/common';
import { RegisterUserRepositoryContract } from 'src/resources/auth/contract/register-user.contract';
import { RegisterCustomerController } from 'src/resources/auth/controller/register-customer.controller';
import { RegisterUserRepository } from 'src/resources/auth/repository/register-user.repository';
import { RegisterCustomerService } from 'src/resources/auth/service/register-customer.service';
import { RegisterCustomerUsecase } from 'src/resources/auth/usecase/register-customer.usecase';
import { BcryptModule } from 'src/resources/bcrypt/bcrypt.module';
import { UserModule } from 'src/resources/user/user.module';

const resources: Provider[] = [
  {
    provide: RegisterUserRepositoryContract,
    useClass: RegisterUserRepository,
  },
  {
    provide: RegisterCustomerUsecase,
    useClass: RegisterCustomerService,
  },
];

@Module({
  imports: [UserModule, BcryptModule],
  controllers: [RegisterCustomerController],
  providers: [...resources],
  exports: [...resources],
})
export class AuthModule {}
