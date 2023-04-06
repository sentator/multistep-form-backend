import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CreateOrderDto, CreatedOrderDto } from './orders.dto';

@Injectable()
export class OrdersService {
  orders: CreatedOrderDto[];

  constructor() {
    this.orders = [
      {
        id: uuidv4(),
        data: {
          generalInformation: {
            country: null,
            shop: null,
            parcelName: '',
            orderComposition: [
              { id: uuidv4(), productName: '', quantity: 1, totalPrice: 0 },
            ],
            customsFees: [{ value: true }],
            promocode: '',
            trackNumber: '',
          },
          documents: {
            invoice: null,
            lastName: '',
            firstName: '',
            patronymicName: '',
            passport: '',
            birthDate: null,
            passportIssueDate: null,
            passportIssuedBy: '',
            registrationAddress: '',
            identificationNumber: '',
          },
          address: {
            deliveryAddress: '',
            phoneNumber: '',
          },
        },
      },
    ];
  }

  getAll() {
    return this.orders;
  }

  create(dto: CreateOrderDto) {
    const order = { ...dto, id: uuidv4() };
    this.orders = [...this.orders, order];

    return order;
  }
}
