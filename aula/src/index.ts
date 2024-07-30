import { productsApi } from "./api/products.api";

async function request(){
    const response = await productsApi.get("/products");
    console.log(response.data);
}

request();
