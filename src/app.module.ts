import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { InfraModule } from 'src/infra/infra.module';
import { ResourceModule } from 'src/resources/resource.module';

@Module({
  imports: [InfraModule, ResourceModule, CommonModule],
})
export class AppModule {}
