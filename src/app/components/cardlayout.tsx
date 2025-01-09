"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { UserContext } from "./abc";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";

interface HomePage {
	name: String;
	price: String;
	alternate: string;
	code: string;
	index: number;
	// favorites: () => void;
	clothColor: string[];
	colorName: string;

	defaultImage: string;
	regularImage: string;
}

const CardLayout: React.FC<HomePage> = ({
	alternate,
	name,
	price,
	code,
	index,
	// favorites,
	clothColor,
	colorName,

	defaultImage,
	regularImage,
}) => {
	const { setUser, setIndexNo } = useContext(UserContext);
	const router = useRouter();
	const [displayImage, setDisplayImage] = useState(defaultImage);

	function pageForward(prdctCode: string, index: number) {
		setUser(prdctCode);
		setIndexNo(index);
		router.push("@/app/productPage");
	}

	async function addFavorite(e:React.MouseEvent<SVGElement, MouseEvent>) {
		e.preventDefault();
		e.stopPropagation();

		try {
			const favProduct = {
				img: defaultImage,
				name,
				price,
				articleCode: code,
				colour: colorName,
			};
			console.log("this favProduct", favProduct);
			const res = await axios.post(
				"/api/users/favorite/addtoFavorite?query=addtoFavorite",
				favProduct
			);
			console.log(res.data.message);
		} catch (err) {
			console.error(err);
		}
	}
	return (
		<div className="mb-3 mr-3 flex flex-col flex-wrap  text-left text-sm">
			<Link
				className="relative cursor-pointer"
				href={`/productPage/${code}`}
			>
				<Image
					onMouseEnter={() => setDisplayImage(regularImage)}
					onMouseLeave={() => setDisplayImage(defaultImage)}
					className=" w-auto h-auto"
					onClick={() => pageForward(code, index)}
					src={displayImage}
					alt={alternate}
					width={350}
					height={450}
				/>
				<FaHeart
					onClick={(e) => {
						e.preventDefault();
						e.stopPropagation();
						addFavorite(e);
					}}
					className="absolute top-[10%] z-10 text-gray-500 right-[5%] w-5 h-5 -translate-x-[50%] -translate-y-[50%] hover:text-red-500 focus:text-red-500"
				/>
			</Link>
			<ul className="grid grid-flow-col grid-rows-1 gap-3 justify-start mt-2">
				{clothColor &&
					clothColor.length > 0 &&
					clothColor.map((clr, index) => {
						return (
							<>
								<li
									className={` bg-[${clr}] w-3 h-3 rounded-full`}
									style={{
										backgroundColor:
											clr,
									}}
									key={index}
								></li>
							</>
						);
					})}
			</ul>
			<Link
				href={`/productPage/${code}`}
				className="h-auto font-medium text-[13px] mt-3 hover:underline underline-offset-0"
			>
				{name}
			</Link>
			<p className="font-medium text-xs">{price}</p>
		</div>
	);
};
export default CardLayout;
