import { Module } from '@nestjs/common';
import { OrdersController } from './orders/orders.controller';
import { OrdersModule } from './orders/orders.module';
import { OrdersService } from './orders/orders.service';

@Module({
  imports: [OrdersModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class AppModule {}
