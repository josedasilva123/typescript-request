import { productsApi } from "../../api/products.api";
import {
  IProduct,
  TCreateProductBody,
} from "../../interfaces/products.interface";

export async function create(
  body: TCreateProductBody
): Promise<IProduct | null> {
  try {
    const response = await productsApi.post<IProduct>("/products", body);
    console.log("Produto criado com sucesso!");

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
