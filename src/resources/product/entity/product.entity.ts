export class Product {
  id: number;
  name: string;
  description?: string;
  quantity?: number;
  price: number;
  discountPrice?: number;
  categoryId: number;
  subcategoryId?: number;
  active: boolean;
  photo?: string;
  createdAt: Date;
  updatedAt?: Date;

  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    categoryId: number,
    active: boolean,
    photo: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.categoryId = categoryId;
    this.active = active;
    this.photo = photo;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
