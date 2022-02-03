const getPricingGrid = async () => {
  const apiUrl = `${process.env.API_ORIGIN}/api/canvasproductlanding`;
  let data;
    await fetch(apiUrl)
      .then(res => res.json())
      .then(res => data = res)
      .catch(error => {
          console.log(`Error during fetch: ${error}`);
      })
    return data;
}

export default getPricingGrid;
