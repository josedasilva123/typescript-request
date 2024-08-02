import { productsApi } from "../../api/products.api";

interface Response {
  message: string;
}

export async function remove(id: number): Promise<Response | null> {
  try {
    const response = await productsApi.delete<Response>(`/products/${id}`);

    console.log("Exclusão realizada com sucesso!");

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
