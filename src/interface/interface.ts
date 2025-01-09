interface Product{
      name:string
      price:string
      img:string
      colour:string
      articleCode:string
      _id:string
}

interface favorite{
      user:string
      product:Product
      cart:boolean
      favorite:boolean
      _id:string
}