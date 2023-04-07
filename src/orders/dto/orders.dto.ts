import { DeliveryFormState } from 'src/types/orders';

export class CreateOrderDto {
  readonly data: DeliveryFormState;
}

export class CreatedOrderDto extends CreateOrderDto {
  readonly id: string;
}
