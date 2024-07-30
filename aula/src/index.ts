import axios from "axios";

async function request(){
    const response = await axios.get("http://localhost:3001/products");
    console.log(response.data);
}

request();
