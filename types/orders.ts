interface OptionItem {
  id: string;
  name: string;
  label: string;
  icon?: string;
}

interface ProductItem {
  id: string;
  productName: string;
  quantity: number;
  totalPrice: number;
}

export interface StepGeneralInformationValues {
  country: OptionItem | null;
  shop: OptionItem | null;
  parcelName: string;
  orderComposition: ProductItem[];
  customsFees: [{ value: boolean }];
  promocode: string;
  trackNumber: string;
}
export interface StepDocumentsValues {
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
}
export interface StepAddressValues {
  deliveryAddress: string;
  phoneNumber: string;
}

export interface DeliveryFormState {
  generalInformation: StepGeneralInformationValues;
  documents?: StepDocumentsValues;
  address: StepAddressValues;
}
