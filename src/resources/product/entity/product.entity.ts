import { SubCategory } from 'src/resources/subcategory/entity/subcategory.entity';

export class Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  discountPrice?: number;
  subcategory?: SubCategory;
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
    subcategory: SubCategory,
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
    this.subcategory = subcategory;
    this.active = active;
    this.image = image;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
