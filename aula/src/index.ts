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

async function createProduct(){
    // Comportamentos de sucesso e erro
    try {
        const body = {
            description: "Notebook bacana",
            price: 4000
        }
    
        // POST, PUT e PATCH
        const response = await productsApi.post("/products", body);
    
        console.log(response.data);
    } catch (error) {
        console.log("--Ocorreu um erro--");
        console.log(error);
    }   
}

createProduct();