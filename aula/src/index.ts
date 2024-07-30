import { AxiosError } from "axios";
import { productsApi } from "./api/products.api";

async function getProducts(){
    const response = await productsApi.get("/products", {
        /* headers: {
            Authorization: "abc123"
        }, */
        params: {
            search: "note"
        }
    });

    console.log(response.data);
}

async function getOneProduct(){
    const response = await productsApi.get("/products/2");

    console.log(response.data);
}

/*
{
  "id": 1,
  "name": "Notebook Gamer",
  "description": "Notebook gamer top",
  "price": 3000,
  "createdAt": "2024-07-29T21:44:23.601Z"
}
*/

interface IProduct{
    id: number;
    name: string;
    description?: string;
    price: number;
    createdAt: Date;
}

async function createProduct(){
    // Comportamentos de sucesso e erro
    try {
        const body = {
            description: "Notebook bacana",
            price: 4000
        }
    
        // POST, PUT e PATCH
        const response = await productsApi.post<IProduct>("/products", body);
    
        console.log(response.data);
    } catch (error) {
        if(error instanceof AxiosError){
            const currentError = error as AxiosError<{ error: string }>;
            console.log(currentError.response?.data.error);
        }
        
        console.log(error);
    }   
}

createProduct();