import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { FileDto } from 'src/files/dto/files.dto';

export type OrderDocument = HydratedDocument<Order>;

@Schema({ timestamps: true })
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
        invoice: [
          {
            _id: false,
            originalName: String,
            fileName: String,
            fileUrl: String,
          },
        ],
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
    timestamps: true,
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
    documents?: {
      invoice: FileDto[];
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
  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}
export const OrderSchema = SchemaFactory.createForClass(Order);
