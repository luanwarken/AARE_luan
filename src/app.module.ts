import { Module } from '@nestjs/common';
import { CustumerController } from './custumer/custumer.controller';
import { CustumerService } from './custumer/custumer.service';

@Module({
  imports: [],
  controllers: [CustumerController],
  providers: [CustumerService],
})
export class AppModule {}
