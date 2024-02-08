'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
// import { UserContext } from "./abc";
import ProductContext from "./productContext";
import { UserContext } from "./abc";

interface HomePage {
	image: string;
	name: String;
	price: String;
	alternate: string
	codes: string
	index: number
	
}




const CardLayout:React.FC<HomePage> =({ image, alternate, name, price, codes, index }) => {

	const {setUser, setIndexNo} = useContext(UserContext)
	
	const	router = useRouter()
	function pageForward (prdctCode:string, index: number) {
		
		setUser(prdctCode)
		setIndexNo(index)
		router.push('@/app/productPage')

	}

	return (
		< >
			<Image onClick={ ()=>pageForward(codes, index)} src={image} alt={alternate} width={200} height={300}  />
			<p className="h-auto">{name}</p>
			<p>{price}</p>
		</>
	);
};
export default CardLayout;
