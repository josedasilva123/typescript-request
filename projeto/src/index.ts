import { productsRequest } from "./data/products/_index";

async function init(){
    /*
    const data = await productsRequest.create({
        name: "Notebook",
        description: "Notebook super bacana",
        price: 5500
    });
    */

    const data = await productsRequest.getMany({ count: 1, skip: 1 });

    console.log(data);
}

init();