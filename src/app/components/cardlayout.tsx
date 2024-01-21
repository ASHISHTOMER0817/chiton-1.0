'use client'

import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface HomePage {
	image: string;
	name: String;
	price: String;
	alternate: string
	codes: String

}

const CardLayout:React.FC<HomePage> =({ image, alternate, name, price, codes }) => {
		// const photos = image.toString()
		// const alternative = alternate.toString()
		const route = useRouter()
		const pageForward = () => {
			route.push('../productPage')
		}
	return (
		< >
			<Image onClick={ ()=>pageForward()} src={image} alt={alternate} width={200} height={350} />
			<p className="">{name}</p>
			<p>{price}</p>
		</>
	);
};
export default CardLayout;
