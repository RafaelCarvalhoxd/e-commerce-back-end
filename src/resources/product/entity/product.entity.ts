import { SubCategory } from 'src/resources/subcategory/entity/subcategory.entity';

export class Product {
  id: number;
  name: string;
  sku: string;
  description?: string;
  price: string;
  discountPrice?: string;
  subcategory?: SubCategory;
  active: boolean;
  image?: string;
  barcode: string;
  createdAt: Date;
  updatedAt?: Date;

  constructor(
    id: number,
    name: string,
    sku: string,
    description: string,
    price: string,
    discountPrice: string,
    subcategory: SubCategory,
    active: boolean,
    image: string,
    barcode: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.sku = sku;
    this.description = description;
    this.price = price;
    this.discountPrice = discountPrice;
    this.subcategory = subcategory;
    this.active = active;
    this.image = image;
    this.barcode = barcode;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
