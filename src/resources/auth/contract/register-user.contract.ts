import { User } from 'src/resources/user/entity/user.entity';

export abstract class RegisterUserRepositoryContract {
  abstract registerCustomer(input: {
    name: string;
    email: string;
    password: string;
    phone: string;
    birthdate: Date;
    gender: 'M' | 'F';
    cpf: string;
    roleId: number;
  }): Promise<User>;
}
