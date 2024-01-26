'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
// import { UserContext } from "./abc";
import ProductContext from "./productContext";
import { UserContext } from "./abc";

interface HomePage {
	image: string;
	name: String;
	price: String;
	alternate: string
	codes: string
}




const CardLayout:React.FC<HomePage> =({ image, alternate, name, price, codes }) => {

	const {setUser} = useContext(UserContext)
	
	const	router = useRouter()
	function pageForward (prdctCode:string) {
		// ProductContext(prdctCode)
	
		setUser(prdctCode)
		router.push('@/app/productPage')
		
	}

	return (
		< >
			<Image onClick={ ()=>pageForward(codes)} src={image} alt={alternate} width={200} height={350} />
			<p className="">{name}</p>
			<p>{price}</p>
		</>
	);
};
export default CardLayout;
