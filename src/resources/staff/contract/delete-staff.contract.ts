export abstract class DeleteStaffRepositoryContract {
  abstract deleteStaff(input: { id: number }): Promise<void>;
}
