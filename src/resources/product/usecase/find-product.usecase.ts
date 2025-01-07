import { Product } from 'src/resources/product/entity/product.entity';

export abstract class FindProductUseCase {
  abstract findProduct(input: { id?: number; name?: string }): Promise<Product>;
}
