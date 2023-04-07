import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop({
    type: {
      _id: false,
      generalInformation: {
        country: {
          _id: false,
          id: String,
          name: String,
          label: String,
          icon: { type: String, required: false },
        },
        shop: {
          _id: false,
          id: String,
          name: String,
          label: String,
          icon: { type: String, required: false },
        },
        parcelName: String,
        orderComposition: [
          {
            _id: false,
            id: String,
            productName: String,
            quantity: Number,
            totalPrice: Number,
          },
        ],
        customsFees: [{ _id: false, value: { type: Boolean } }],
        promocode: String,
        trackNumber: String,
      },
      documents: {
        _id: false,
        lastName: String,
        firstName: String,
        patronymicName: String,
        passport: String,
        birthDate: Date,
        passportIssueDate: Date,
        passportIssuedBy: String,
        registrationAddress: String,
        identificationNumber: String,
      },
      address: {
        _id: false,
        deliveryAddress: String,
        phoneNumber: String,
      },
    },
  })
  data: {
    generalInformation: {
      country: {
        id: string;
        name: string;
        label: string;
        icon: string;
      };
      shop: {
        id: string;
        name: string;
        label: string;
        icon: string;
      };
      parcelName: string;
      orderComposition: [
        {
          id: string;
          productName: string;
          quantity: number;
          totalPrice: number;
        },
      ];
      customsFees: [{ value: boolean }];
      promocode: string;
      trackNumber: string;
    };
    documents: {
      lastName: string;
      firstName: string;
      patronymicName: string;
      passport: string;
      birthDate: string;
      passportIssueDate: string;
      passportIssuedBy: string;
      registrationAddress: string;
      identificationNumber: string;
    };
    address: {
      deliveryAddress: string;
      phoneNumber: string;
    };
  };
}
export const OrderSchema = SchemaFactory.createForClass(Order);
