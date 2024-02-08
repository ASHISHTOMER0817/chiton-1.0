import axios from "axios";


export default async function fetchedData(path: String, productcode: string, index: String, pagesize:string ) {
  
  const options = {
    method: 'GET',
    url: `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/${path}`,
    params: {
      lang: 'en',
      country: 'us',
      productcode: productcode?productcode:'' ,
      currentpage: index,
      pagesize: pagesize,
    },
    headers: {
      'X-RapidAPI-Key': '354341de18mshcc5b15c0fa6fd42p1947ebjsn7b6b759452b8',
      'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const products = response.data
    console.log("the products are: ",    products.results)
    return products

  } catch (error) {
    console.error(error);
  }
}


