import { Role } from 'src/resources/roles/entity/role.entity';

export abstract class CreateRoleRepositoryContract {
  abstract createRole(input: { name: string }): Promise<Role>;
}
