export interface IProduct {
  name: string;
  id: number;
  imageUrl: string;
  listPrice: number;
  sellingPrice: number;
}

export interface IGetProducts {
  res: IProduct[];
}
