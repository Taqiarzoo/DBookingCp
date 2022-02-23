export interface GeneralAlert {
  header: string;
  message: string;
  actionButtonText: string;
  cancleButtonText: string;
}

export interface Place {
  id: number;
  name: string;
  discription: string;
  src: string;
  price: number;
}
