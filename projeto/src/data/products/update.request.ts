import { productsApi } from "../../api/products.api";
import {
  IProduct,
  TUpdateProductBody,
} from "../../interfaces/products.interface";

export async function update(
  id: number,
  body: TUpdateProductBody
): Promise<IProduct | null> {
  try {
    const response = await productsApi.patch<IProduct>(`/products/${id}`, body);

    console.log("Atualização realizada com sucesso!");

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
