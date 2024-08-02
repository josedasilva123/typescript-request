import { productsApi } from "../../api/products.api";
import { IProduct } from "../../interfaces/products.interface";

interface Params {
  search?: string;
  count?: number;
  skip?: number;
}

interface Response {
  count: number;
  pagedResults: IProduct[];
}

export async function getMany(params: Params = {}) {
  try {
    const response = await productsApi.get<Response>("/products", {
      params,
    });

    console.log("Leitura realizada com sucesso!");

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
