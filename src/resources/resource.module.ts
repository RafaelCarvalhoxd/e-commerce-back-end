import { Module } from '@nestjs/common';
import { BcryptModule } from 'src/resources/bcrypt/bcrypt.module';
import { CategoryModule } from 'src/resources/category/category.module';
import { JwtServiceModule } from 'src/resources/jwt/jwt.module';
import { ProductModule } from 'src/resources/product/product.module';
import { RoleModule } from 'src/resources/roles/roles.module';
import { SubCategoryModule } from 'src/resources/subcategory/subcategory.module';
import { UserModule } from 'src/resources/user/user.module';

@Module({
  imports: [
    ProductModule,
    SubCategoryModule,
    CategoryModule,
    BcryptModule,
    RoleModule,
    JwtServiceModule,
    UserModule,
  ],
  exports: [
    ProductModule,
    SubCategoryModule,
    CategoryModule,
    BcryptModule,
    RoleModule,
    JwtServiceModule,
    UserModule,
  ],
})
export class ResourceModule {}
