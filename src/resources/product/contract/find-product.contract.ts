import { Product } from 'src/resources/product/entity/product.entity';

export abstract class FindProductRepositoryContract {
  abstract findProduct(input: { id?: number; name?: string }): Promise<Product>;
}
