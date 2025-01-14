export abstract class DeleteRoleUseCase {
  abstract deleteRole(input: { id: number }): Promise<void>;
}
