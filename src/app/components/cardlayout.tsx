'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { UserContext } from "./abc";
import { FaHeart } from "react-icons/fa";

interface HomePage {
	image: string;
	name: String;
	price: String;
	alternate: string;
	codes: string;
	index:number;
	// favorites: () => void;
	clothColor: string[]
}

const CardLayout: React.FC<HomePage> = ({
	image,
	alternate,
	name,
	price,
	codes,
	index,
	// favorites,
	clothColor
}) => {
	const { setUser, setIndexNo } = useContext(UserContext);

	const router = useRouter();
	function pageForward(prdctCode: string, index: number) {
		setUser(prdctCode);
		setIndexNo(index);
		router.push("@/app/productPage");
	}

	return (
		<>
			<div className="relative">
				<Image
					className=" w-auto h-auto"
					onClick={() => pageForward(codes, index)}
					src={image}
					alt={alternate}
					width={350}
					height={450}
				/>
				<FaHeart
					// onClick={favorites}
					className="absolute top-[10%] text-gray-500 right-[5%] w-5 h-5 -translate-x-[50%] -translate-y-[50%] hover:text-red-500 focus:text-red-500"
				/>
			</div>
			<ul className="grid grid-flow-col grid-rows-1 gap-3 justify-start mt-2">

				{ clothColor && clothColor.length > 0 && clothColor.map((clr, index)=> {
					
					return (
						<>
						<li className={` bg-[${clr}] w-3 h-3 rounded-full `} style={{backgroundColor: clr}} key={index}></li>
						</>
					)
				})}
			</ul>
			<p className="h-auto font-medium text-[13px] mt-3">{name}</p>
			<p className="font-medium text-xs">{price}</p>
		</>
	);
};
export default CardLayout;
