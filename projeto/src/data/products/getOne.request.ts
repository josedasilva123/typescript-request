import { productsApi } from "../../api/products.api";
import { IProduct } from "../../interfaces/products.interface";

export async function getOne(id: number): Promise<IProduct | null> {
  try {
    const response = await productsApi.get<IProduct>(`/products/${id}`);

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
