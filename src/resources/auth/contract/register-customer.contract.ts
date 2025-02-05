import { User } from 'src/resources/user/entity/user.entity';

export abstract class RegisterCustomerRepositoryContract {
  abstract registerCustomer(input: {
    name: string;
    email: string;
    password: string;
    phone: string;
    gender: 'M' | 'F';
    cpf: string;
    roleId: number;
  }): Promise<User>;
}
