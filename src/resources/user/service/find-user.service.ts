import { Injectable, NotFoundException } from '@nestjs/common';
import { FindUserRepositoryContract } from 'src/resources/user/contract/find-user.contract';
import { User } from 'src/resources/user/entity/user.entity';
import { FindUserUseCase } from 'src/resources/user/usecase/find-user.usecase';

@Injectable()
export class FindUserService implements FindUserUseCase {
  constructor(
    private readonly findUserRepository: FindUserRepositoryContract,
  ) {}

  async findUser(input: {
    id?: number;
    email?: string;
    cpf?: string;
  }): Promise<User> {
    const user = await this.findUserRepository.findUser({
      id: input.id,
      email: input.email,
      cpf: input.cpf,
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}
