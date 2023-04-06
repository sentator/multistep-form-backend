import { Module } from '@nestjs/common';
import { OrdersController } from './orders/orders.controller';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [OrdersModule],
  controllers: [OrdersController],
  providers: [],
})
export class AppModule {}
