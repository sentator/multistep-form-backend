import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto, CreateOrderDtoWithStatus } from './dto/orders.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async getAll() {
    const orders = this.ordersService.getAll();

    return orders;
  }

  @Post()
  async create(@Body() dto: CreateOrderDto) {
    const order = await this.ordersService.create(dto);
    return order;
  }

  @Put(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() dto: CreateOrderDtoWithStatus,
  ) {
    const order = await this.ordersService.updateOne(id, dto);

    return order;
  }
}
