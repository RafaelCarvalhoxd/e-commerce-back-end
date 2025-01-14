import { Role } from 'src/resources/roles/entity/role.entity';

export abstract class FindRoleRepositoryContract {
  abstract findRole(input: { id?: number; name?: string }): Promise<Role>;
}
