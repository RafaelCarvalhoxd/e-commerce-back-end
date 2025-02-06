export class Pagination<T> {
  readonly data: T[];
  readonly pagination: {
    current_page: number;
    per_page: number;
    total: number;
    total_pages: number;
  };

  private constructor(
    items: T[],
    per_page: number,
    current_page: number,
    total: number,
    total_pages: number,
  ) {
    this.data = items;
    this.pagination = {
      current_page,
      per_page,
      total,
      total_pages,
    };
  }

  public static from<T>(
    items: T[],
    total: number,
    page: number,
    limit: number,
  ): Pagination<T> {
    const totalPages = Math.ceil(total / limit);
    return new Pagination<T>(items, limit, page, total, totalPages);
  }
}
