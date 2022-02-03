
const getCartItems = async () => {
    const apiUrl = `${process.env.API_ORIGIN}/api/cart/count`;
    let data;
    await fetch(apiUrl)
        .then(res => res.json())
        .then(res => data = res)
        .catch(error => {
            console.log(`Error during fetch: ${error}`);
        })
    return data;
}

export default getCartItems;
