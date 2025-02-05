import { User } from 'src/resources/user/entity/user.entity';

export abstract class FindUserRepositoryContract {
  abstract findUser(input: {
    id?: number;
    email?: string;
    cpf?: string;
    phone?: string;
  }): Promise<User>;
}
