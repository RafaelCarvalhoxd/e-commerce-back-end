import { Module } from '@nestjs/common';
import { AuthModule } from 'src/resources/auth/auth.module';
import { BcryptModule } from 'src/resources/shared/bcrypt/bcrypt.module';
import { CategoryModule } from 'src/resources/category/category.module';
import { JwtServiceModule } from 'src/resources/shared/jwt/jwt.module';
import { ProductModule } from 'src/resources/product/product.module';
import { RoleModule } from 'src/resources/roles/roles.module';
import { SubCategoryModule } from 'src/resources/subcategory/subcategory.module';
import { UserModule } from 'src/resources/user/user.module';
import { CartModule } from 'src/resources/cart/cart.module';

@Module({
  imports: [
    ProductModule,
    SubCategoryModule,
    CategoryModule,
    BcryptModule,
    RoleModule,
    JwtServiceModule,
    UserModule,
    AuthModule,
    CartModule,
  ],
  exports: [
    ProductModule,
    SubCategoryModule,
    CategoryModule,
    BcryptModule,
    RoleModule,
    JwtServiceModule,
    UserModule,
    AuthModule,
    CartModule,
  ],
})
export class ResourceModule {}
