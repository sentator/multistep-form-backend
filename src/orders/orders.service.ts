import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from 'src/schemas/order.schema';
import { Model } from 'mongoose';

import {
  CreateOrderDto,
  CreateOrderDtoWithStatus,
  CreatedOrderDto,
} from './dto/orders.dto';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async getAll(): Promise<Order[]> {
    const orders = await this.orderModel.find().sort({ createdAt: -1 });

    return orders;
  }

  async create(dto: CreateOrderDto): Promise<Order> {
    const status = {
      id: 'processed',
      label: 'PROCESSED',
      name: 'Заявка оброблена',
      createdAt: new Date(Date.now()).toISOString(),
    };
    const order: CreateOrderDtoWithStatus = {
      ...dto,
      progress: [status],
      status,
    };

    return await new this.orderModel(order).save();
  }

  // async updateOne(id: string, dto: CreateOrderDtoWithStatus): Promise<Order> {
  //   const order = await this.orderModel.findByIdAndUpdate(id, dto, {
  //     returnDocument: 'after',
  //   });

  //   if (!order) return null;

  //   return order;
  // }

  async updateOne(id: string, dto: CreateOrderDtoWithStatus): Promise<Order> {
    // If status exists, the request is sent by admin. Otherwise, the request is sent by user
    const status = dto.status
      ? { ...dto.status, createdAt: new Date(Date.now()).toISOString() }
      : null;
    const updateQuery = status
      ? { $set: { ...dto, status }, $push: { progress: status } }
      : dto;

    const order = await this.orderModel.findByIdAndUpdate(id, updateQuery, {
      returnDocument: 'after',
    });

    if (!order) return null;

    return order;
  }
}
