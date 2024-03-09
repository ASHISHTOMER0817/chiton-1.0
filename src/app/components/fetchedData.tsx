import axios from "axios";


export default async function fetchedData(category: String, path: string, productcode: String|null, currentpage:string, pagesize:string, categories:string|null ) {
  
  const options = {
    method: 'GET',
    url: `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/${category}/${path}`,
    params: {
      lang: 'en',
      country: 'us',
      productcode,
      currentpage,
      pagesize,
      categories
    },
    headers: {
      'X-RapidAPI-Key': '354341de18mshcc5b15c0fa6fd42p1947ebjsn7b6b759452b8',
      'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const data = response.data
    console.log("the products are: ",    data)
    return data

  } catch (error) {
    console.error(error);
  }
}


