"use client";
//  import Image from 'Next/Image'
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
const Favorites = () => {
	const [data, setData] = useState<favorite[]>([]);
	const [render, setRender] = useState(false);

	useEffect(() => {
		async function getData() {
			try {
				const res = await axios.get(
					"/api/users/favorite/showFavorites"
				);
				const {message, data, status} = res.data;
				console.log( message, data);
				status === 200 && setData(res.data.data);
			} catch (err) {
				console.error(err);
			}
		}
		getData();
	}, [render]);

	async function addtoCart(_id:string) {
		try {
			console.log('frontend- _id:')
			const res = await axios.post(
				`/api/users/favorite/addtoFavorite?query=addtoCart`,{_id}
			);
			setRender(!render);
			console.log(res.data.message);
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<div className="">
			<div className="text-3xl font-bold text-center my-10">
				Favorites
			</div>
			{data.length >= 1 ? (
				<div className="flex justify-between flex-wrap items-start mb-10 border w-4/5 mx-auto text-sm border-black">
					{data.map(({ product, _id }, index) => {
						const {
							img,
							colour,
							name,
							price,
							articleCode,
							
						} = product;
						return (
							<div
								key={index}
								className="inline-block"
							>
								<Image
									src={img}
									className="w-64 h-auto"
									width={350}
									height={450}
									alt=""
								/>
								<div>
									<Link href={articleCode}>
										{name}{" "}
									</Link>
									<div className="text-xs">
										{price}{" "}
									</div>
									<div className="text-xs">
										color: {colour}
									</div>
								</div>
								<button
									onClick={() =>
										addtoCart(
											_id
										)
									}
									type="button"
									className="flex hover:bg-gray-900 bg-black border mt-2 justify-center items-center gap-1 w-full py-3"
								>
									<CiShoppingCart className="text-white text-lg" />{" "}
									<div className="text-white">
										Add
									</div>
								</button>
							</div>
						);
					})}
				</div>
			) : (
				<div className="w-4/12 mt-4 mx-auto flex flex-col items-center gap-6 pb-36">
					<div className="font-semibold">
						SAVE YOUR FAVORITE ITEMS
					</div>
					<div className="text-wrap text-sm">
						Want to save the items that you love? Just
						click on the heart symbol beside the item
						and it will show up here.
					</div>
					<button className="bg-black text-white px-3 py-4 font-bold">
						{" "}
						Browser now
					</button>
				</div>
			)}
		</div>
	);
};

export default Favorites;
