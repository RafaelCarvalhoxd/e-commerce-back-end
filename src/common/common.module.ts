import { Module } from '@nestjs/common';
import { GuardModule } from 'src/common/guard/guard.module';

@Module({
  imports: [GuardModule],
  exports: [GuardModule],
})
export class CommonModule {}
