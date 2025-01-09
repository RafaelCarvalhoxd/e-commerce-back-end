import { Product } from 'src/resources/product/entity/product.entity';

export abstract class CreateProductUseCase {
  abstract createProduct(input: {
    name: string;
    sku: string;
    barcode: string;
    image?: string;
    description?: string;
    price: number;
    subcategoryId?: number;
    discountPrice?: number;
    active: boolean;
  }): Promise<Product>;
}
