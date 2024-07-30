async function request(){
    const response = await fetch("http://localhost:3001/products");
    const json = await response.json();
    console.log(json);
}

request();
