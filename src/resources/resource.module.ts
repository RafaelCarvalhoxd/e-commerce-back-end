import { Module } from '@nestjs/common';
import { BcryptModule } from 'src/resources/bcrypt/bcrypt.module';
import { CategoryModule } from 'src/resources/category/category.module';
import { JwtServiceModule } from 'src/resources/jwt/jwt.module';
import { ProductModule } from 'src/resources/product/product.module';
import { RoleModule } from 'src/resources/roles/roles.module';
import { StaffModule } from 'src/resources/staff/staff.module';
import { SubCategoryModule } from 'src/resources/subcategory/subcategory.module';

@Module({
  imports: [
    ProductModule,
    SubCategoryModule,
    CategoryModule,
    StaffModule,
    BcryptModule,
    RoleModule,
    JwtServiceModule,
  ],
  exports: [
    ProductModule,
    SubCategoryModule,
    CategoryModule,
    StaffModule,
    BcryptModule,
    RoleModule,
    JwtServiceModule,
  ],
})
export class ResourceModule {}
