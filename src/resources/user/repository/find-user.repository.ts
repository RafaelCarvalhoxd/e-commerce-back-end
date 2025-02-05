import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindUserRepositoryContract } from 'src/resources/user/contract/find-user.contract';
import { User } from 'src/resources/user/entity/user.entity';
import { UserModel } from 'src/resources/user/model/user.model';
import { Repository } from 'typeorm';

@Injectable()
export class FindUserRepository implements FindUserRepositoryContract {
  constructor(
    @InjectRepository(UserModel)
    private readonly repository: Repository<UserModel>,
  ) {}

  async findUser(input: {
    id?: number;
    email?: string;
    cpf?: string;
    phone?: string;
  }): Promise<User> {
    const whereConditions = input.email
      ? { email: input.email }
      : input.cpf
        ? { cpf: input.cpf }
        : input.phone
          ? { phone: input.phone }
          : { id: input.id };
    const user = await this.repository.findOne({
      relations: {
        roles: {
          role: true,
        },
      },
      where: whereConditions,
    });
    return UserModel?.toEntity(user);
  }
}
