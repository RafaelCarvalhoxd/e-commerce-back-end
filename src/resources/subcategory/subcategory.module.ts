import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from 'src/resources/category/category.module';
import { SubCategoryModel } from 'src/resources/subcategory/model/subcategory.model';

const resources: Provider[] = [];

@Module({
  imports: [TypeOrmModule.forFeature([SubCategoryModel]), CategoryModule],
  providers: [...resources],
  exports: [...resources],
})
export class SubCategoryModule {}
