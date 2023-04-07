import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    OrdersModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:wwwwww@multistepformcluster.htxwevl.mongodb.net/?retryWrites=true&w=majority',
      {
        dbName: 'ordersdb',
      },
    ),
  ],
})
export class AppModule {}
