import { Module } from '@nestjs/common';
import { CategoryModule } from 'src/resources/category/category.module';
import { ProductModule } from 'src/resources/product/product.module';
import { SubCategoryModule } from 'src/resources/subcategory/subcategory.module';

@Module({
  imports: [ProductModule, SubCategoryModule, CategoryModule],
})
export class ResourceModule {}
