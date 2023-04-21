import { OptionItem, OrderStatusItem, ProductItem } from 'src/types/orders';

export class CreateOrderDto {
  generalInformation: {
    country: OptionItem | null;
    shop: OptionItem | null;
    parcelName: string;
    orderComposition: ProductItem[];
    customsFees: [{ value: boolean }];
    promocode: string;
    trackNumber: string;
  };
  documents?: {
    invoice: File[] | null;
    lastName: string;
    firstName: string;
    patronymicName: string;
    passport: string;
    birthDate: Date | null;
    passportIssueDate: Date | null;
    passportIssuedBy: string;
    registrationAddress: string;
    identificationNumber: string;
  };
  address: {
    deliveryAddress: string;
    phoneNumber: string;
  };
}

export class CreateOrderDtoWithStatus extends CreateOrderDto {
  readonly progress: OrderStatusItem[];
  readonly status: OrderStatusItem;
}

export class CreatedOrderDto extends CreateOrderDto {
  readonly id: string;
}
