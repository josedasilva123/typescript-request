export interface IProduct {
  id: number;
  name: string;
  description?: string;
  price: number;
  createdAt: Date;
  updatedAt?: Date;
}

export type TCreateProductBody = Pick<
  IProduct,
  "name" | "description" | "price"
>;

export type TUpdateProductBody = Partial<
  Pick<IProduct, "name" | "description" | "price">
>;
