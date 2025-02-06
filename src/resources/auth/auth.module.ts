import { Module, Provider } from '@nestjs/common';
import { RegisterUserRepositoryContract } from 'src/resources/auth/contract/register-user.contract';
import { AuthController } from 'src/resources/auth/controller/auth.controller';
import { RegisterCustomerController } from 'src/resources/auth/controller/register-customer.controller';
import { RegisterUserRepository } from 'src/resources/auth/repository/register-user.repository';
import { AuthService } from 'src/resources/auth/service/auth.service';
import { RegisterCustomerService } from 'src/resources/auth/service/register-customer.service';
import { AuthUsecase } from 'src/resources/auth/usecase/auth.usecase';
import { RegisterCustomerUsecase } from 'src/resources/auth/usecase/register-customer.usecase';
import { BcryptModule } from 'src/resources/bcrypt/bcrypt.module';
import { JwtServiceModule } from 'src/resources/jwt/jwt.module';
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
  {
    provide: AuthUsecase,
    useClass: AuthService,
  },
];

@Module({
  imports: [UserModule, BcryptModule, JwtServiceModule],
  controllers: [RegisterCustomerController, AuthController],
  providers: [...resources],
  exports: [...resources],
})
export class AuthModule {}
