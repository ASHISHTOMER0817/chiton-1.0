'use client'
import { useContext } from "react"
import { UserContext } from "./abc"

export default function ShoppingData ({url,quantity,productName,articleNo,price, size}:{url:string,quantity:string,productName:string,articleNo:string,price:string, size:string}) {
      const {setShoppingData} = useContext(UserContext)
      const shoppingstats = {
            url: url,
            quantity: quantity,
            productName: productName,
            articleNo: articleNo,
            price: price,
            size: size
            
      }
      setShoppingData(shoppingstats)
}