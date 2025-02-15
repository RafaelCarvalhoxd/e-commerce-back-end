import { Injectable } from '@nestjs/common';
import { RegisterUserRepositoryContract } from 'src/resources/auth/contract/register-user.contract';
import { User } from 'src/resources/user/entity/user.entity';
import { UserRole } from 'src/resources/user/model/user-roles.model';
import { UserModel } from 'src/resources/user/model/user.model';
import { DataSource } from 'typeorm';

@Injectable()
export class RegisterUserRepository implements RegisterUserRepositoryContract {
  constructor(private readonly ds: DataSource) {}

  async registerCustomer(input: {
    name: string;
    email: string;
    password: string;
    phone: string;
    birthdate: Date;
    gender: 'M' | 'F';
    cpf: string;
    roleId: number;
  }): Promise<User> {
    return await this.ds.transaction(async (manager) => {
      const user = manager.getRepository(UserModel).create({
        name: input.name,
        email: input.email,
        password: input.password,
        phone: input.phone,
        cpf: input.cpf,
        gender: input.gender,
        birthdate: input.birthdate,
      });
      const savedUser = await manager.getRepository(UserModel).save(user);

      const userRole = manager.getRepository(UserRole).create({
        roleId: input.roleId,
        userId: savedUser.id,
      });
      await manager.getRepository(UserRole).save(userRole);

      const newUser = await manager.getRepository(UserModel).findOne({
        where: { id: savedUser.id },
        relations: {
          roles: {
            role: true,
          },
        },
      });

      return UserModel.toEntity(newUser);
    });
  }
}
