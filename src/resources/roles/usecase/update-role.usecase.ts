import { Role } from 'src/resources/roles/entity/role.entity';

export abstract class UpdateRoleUseCase {
  abstract updateRole(input: { id: number; name: string }): Promise<Role>;
}
