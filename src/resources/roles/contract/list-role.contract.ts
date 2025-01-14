import { Role } from 'src/resources/roles/entity/role.entity';

export abstract class ListRoleRepositoryContract {
  abstract listRole(input: { name?: string }): Promise<Role[]>;
}
