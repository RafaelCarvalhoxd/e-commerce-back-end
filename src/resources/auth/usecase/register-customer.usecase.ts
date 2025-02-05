import { User } from 'src/resources/user/entity/user.entity';

export abstract class RegisterCustomerUsecase {
  abstract execute(input: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    birthdate: Date;
    phone: string;
    gender: 'M' | 'F';
    cpf: string;
  }): Promise<User>;
}
