export class Category {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
