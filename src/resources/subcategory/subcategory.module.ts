import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubCategoryModel } from 'src/resources/subcategory/model/subcategory.model';

const resources: Provider[] = [];

@Module({
  imports: [TypeOrmModule.forFeature([SubCategoryModel])],
  providers: [...resources],
  exports: [...resources],
})
export class SubCategoryModule {}
