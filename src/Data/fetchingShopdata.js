export const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    if(!res.ok) throw Error("Url might be not found.");

    return data;
}