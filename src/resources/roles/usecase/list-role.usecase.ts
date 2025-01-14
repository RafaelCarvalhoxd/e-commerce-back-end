import { Role } from 'src/resources/roles/entity/role.entity';

export abstract class ListRoleUseCase {
  abstract listRole(input: { name?: string }): Promise<Role[]>;
}
