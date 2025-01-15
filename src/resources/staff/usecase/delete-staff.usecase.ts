export abstract class DeleteStaffUseCase {
  abstract deleteStaff(input: { id: number }): Promise<void>;
}
