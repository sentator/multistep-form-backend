import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { OrdersModule } from './orders/orders.module';
import { FilesService } from './files/files.service';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    OrdersModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:wwwwww@multistepformcluster.htxwevl.mongodb.net/?retryWrites=true&w=majority',
      {
        dbName: 'ordersdb',
      },
    ),
    FilesModule,
  ],
  // providers: [FilesService],
})
export class AppModule {}
