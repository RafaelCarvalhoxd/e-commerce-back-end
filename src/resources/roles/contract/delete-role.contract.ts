export abstract class DeleteRoleRepositoryContract {
  abstract deleteRole(input: { id: number }): Promise<void>;
}
