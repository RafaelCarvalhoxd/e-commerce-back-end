import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BcryptModule } from 'src/resources/bcrypt/bcrypt.module';
import { RoleModule } from 'src/resources/roles/roles.module';
import { StaffModel } from 'src/resources/staff/model/staff.model';

@Module({
  imports: [TypeOrmModule.forFeature([StaffModel]), BcryptModule, RoleModule],
  providers: [],
  exports: [],
})
export class StaffModule {}
