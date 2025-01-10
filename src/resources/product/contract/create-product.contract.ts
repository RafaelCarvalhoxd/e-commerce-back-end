import { Product } from 'src/resources/product/entity/product.entity';

export abstract class CreateProductRepositoryContract {
  abstract createProduct(input: {
    name: string;
    sku: string;
    barcode: string;
    image?: string;
    description?: string;
    price: string;
    subcategoryId?: number;
    discountPrice?: string;
    active: boolean;
  }): Promise<Product>;
}
