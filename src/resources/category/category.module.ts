import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModel } from 'src/resources/category/model/category.model';

const resources: Provider[] = [];

@Module({
  imports: [TypeOrmModule.forFeature([CategoryModel])],
  providers: [...resources],
  exports: [...resources],
})
export class CategoryModule {}
