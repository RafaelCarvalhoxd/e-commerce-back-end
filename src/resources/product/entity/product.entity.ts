export class Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  discountPrice?: number;
  categoryId: number;
  subcategoryId?: number;
  active: boolean;
  image?: string;
  createdAt: Date;
  updatedAt?: Date;

  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    discountPrice: number,
    categoryId: number,
    subcategoryId: number,
    active: boolean,
    image: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.discountPrice = discountPrice;
    this.categoryId = categoryId;
    this.subcategoryId = subcategoryId;
    this.active = active;
    this.image = image;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
