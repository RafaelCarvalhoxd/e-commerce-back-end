import { Role } from 'src/resources/roles/entity/role.entity';

export abstract class FindRoleUseCase {
  abstract findRole(input: { id?: number; name?: string }): Promise<Role>;
}
