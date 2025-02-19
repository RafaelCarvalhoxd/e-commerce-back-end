import { ConflictException, Injectable } from '@nestjs/common';
import { RegisterUserRepositoryContract } from 'src/resources/auth/contract/register-user.contract';
import { RegisterCustomerUsecase } from 'src/resources/auth/usecase/register-customer.usecase';
import { BcryptHashContract } from 'src/resources/shared/bcrypt/contract/bcrypt.hash.contract';
import { FindUserRepositoryContract } from 'src/resources/user/contract/find-user.contract';
import { User } from 'src/resources/user/entity/user.entity';

@Injectable()
export class RegisterCustomerService implements RegisterCustomerUsecase {
  constructor(
    private readonly findUserRepository: FindUserRepositoryContract,
    private readonly registerUserRepository: RegisterUserRepositoryContract,
    private readonly bcrypt: BcryptHashContract,
  ) {}

  async execute(input: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    birthdate: Date;
    phone: string;
    gender: 'M' | 'F';
    cpf: string;
  }): Promise<User> {
    const [existingUserEmail, existingUserCpf, existingPhoneNumber] =
      await Promise.all([
        this.findUserRepository.findUser({ email: input.email }),
        this.findUserRepository.findUser({ cpf: input.cpf }),
        this.findUserRepository.findUser({ phone: input.phone }),
      ]);
    if (existingUserEmail) throw new ConflictException('Email already in use');
    if (existingUserCpf) throw new ConflictException('CPF already in use');
    if (existingPhoneNumber)
      throw new ConflictException('Phone number already in use');
    if (input.password !== input.confirmPassword)
      throw new ConflictException('Passwords do not match');
    const passwordHash = await this.bcrypt.hash({
      plainText: input.password,
      salt: 10,
    });
    return this.registerUserRepository.registerCustomer({
      name: input.name,
      email: input.email,
      password: passwordHash,
      phone: input.phone,
      birthdate: input.birthdate,
      cpf: input.cpf,
      gender: input.gender,
      roleId: 7,
    });
  }
}
