import { Role } from 'src/resources/roles/entity/role.entity';

export abstract class CreateRoleUseCase {
  abstract createRole(input: { name: string }): Promise<Role>;
}
