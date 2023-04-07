import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from 'src/schemas/order.schema';
import { Model } from 'mongoose';

import { CreateOrderDto, CreatedOrderDto } from './dto/orders.dto';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async getAll(): Promise<Order[]> {
    const orders = await this.orderModel.find().sort({ createdAt: -1 });

    return orders;
  }
  async create(dto: CreateOrderDto): Promise<Order> {
    return await new this.orderModel(dto).save();
  }
}
