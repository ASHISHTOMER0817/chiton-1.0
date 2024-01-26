import axios from "axios";


export default async function fetchedData(path: String, productcode: string, index: String, pagesize:string ) {
  
  const options = {
    method: 'GET',
    url: `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/${path}`,
    params: {
      lang: 'en',
      country: 'us',
      productcode: productcode,
      currentpage: index,
      pagesize: pagesize,
    },
    headers: {
      'X-RapidAPI-Key': 'b1de8876damsh6882c98db67483bp17156djsnced71ceb7ee8',
      'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const products = response.data
    console.log("the products are: ", products)
    return products

  } catch (error) {
    console.error(error);
  }
}


