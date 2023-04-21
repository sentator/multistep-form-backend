export interface OptionItem {
  id: string;
  name: string;
  label: string;
  icon?: string;
}

export interface ProductItem {
  id: string;
  productName: string;
  quantity: number;
  totalPrice: number;
}

export interface OrderStatusItem {
  id?: string;
  label: string;
  name: string;
  createdAt: string;
}
