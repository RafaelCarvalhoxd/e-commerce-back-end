import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';
import { ResourceModule } from 'src/resources/resource.module';

@Module({
  imports: [InfraModule, ResourceModule],
})
export class AppModule {}
