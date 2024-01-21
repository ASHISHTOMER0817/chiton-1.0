// 'use client'

// import React, { useEffect, useState } from "react";
import Header from "./components/header";
import fetchedData from "@/app/components/fetchedData";
import Image from "next/image";
import homePage from "@/../public/homePage.jpg";
import menHoodie from "@/../public/menHoodie.jpg";
import CardLayout from "./components/cardlayout";
import { useRouter } from "next/router";
import Link from "next/link";
import ProductPage from "./productPage/page";



export default async function Home() {
	const categoriesCard = [
		{
			link: menHoodie,
			Gender: "Men",
			Name: "Hoodies & Sweatshirts",
		},
		{
			link: menHoodie,
			Gender: "Ladies",
			Name: "Trousers",
		},
		{
			link: menHoodie,
			Gender: "Ladies",
			Name: "Sweaters & Cardigans",
		},
		{
			link: menHoodie,
			Gender: "Ladies",
			Name: "Clothes",
		},
		{
			link: menHoodie,
			Gender: "Ladies",
			Name: "Trousers",
		},
		{
			link: menHoodie,
			Gender: "Men",
			Name: "Jackets & Coats",
		},
	];

{/*	const router = useRouter();
	const page = () => {
		router.push("/productPage");
	};
	const [data, setData] = useState([]);

	useEffect(() => {
		const serverData = async () => {
			const dataRcvd = await fetchedData("list","0");
			return setData(dataRcvd);
		};
		serverData();
	}, []);  */}


		const data = await fetchedData('list', '0', '0839915011')

		

	return (
		<div className=" ">
			<Header />

			<div className="flex flex-col items-center">
				<div className="w-3/4 flex flex-col items-center ">
					<div className="flex justify-between">
						<span>
							Estimated delivery time: 2-7 days
						</span>
						<span>
							Members get free shipping upto Rs.
							1999
						</span>
						<span>
							Free and flexible 15 days return
						</span>
					</div>
					<div
						className="bg-no-repeat bg-center bg-cover relative text-center"
						style={{
							backgroundImage: `url('https://images.pexels.com/photos/1450114/pexels-photo-1450114.jpeg'); height: 750px; width: 1140px`,
						}}
					>
						<div className=" mt-96 border border-purple-200 text-center inline-block">
							<h1 className=" text-white">
								Attention set on fancy joggers
							</h1>
							<h5 className=" text-white">
								keep it coordinated, comfy and
								casual
							</h5>
							<button className=" bg-white text-black font-extrabold">
								Look here
							</button>
						</div>
					</div>
					<div className="text-black font-extrabold underline">
						Popular Categories
					</div>
					<div className="flex justify-between w-full">
						{categoriesCard.map(
							({ link, Gender, Name }) => {
								return (
									<div className="flex flex-col  w-24">
										<Image
											src={link}
											alt=""
										/>
										<div className="text-gray-500">
											{Gender}
										</div>
										<div className="text-wrap">
											{Name}
										</div>
									</div>
								);
							}
						)}
					</div>
					<div
						className="bg-no-repeat bg-center relative text-center"
						style={{
							backgroundImage: `url('https://images.pexels.com/photos/9853460/pexels-photo-9853460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'); height: 750px; width: 1140px `,
						}}
					>
						<div className=" mt-96  text-center inline-block">
							<h1 className=" text-white">
								Attention set on fancy joggers
							</h1>
							<h5 className=" text-white">
								keep it coordinated, comfy and
								casual
							</h5>
							<button className=" bg-white text-black font-extrabold">
								Look here
							</button>
						</div>
					</div>
					<h4 className="w-full text-left">New Arrivals</h4>
					<div className="flex flex-wrap justify-between ">
						{data.results.map(
							({	name,
								allArticleImages,
								price,
								allArticleCodes
							}: {name: String, allArticleImages: String, price: {formattedValue: String}, allArticleCodes: String[]}) => {
								const image = allArticleImages.length > 0 ? allArticleImages[0]: '';
								const actualPrice: String = price.formattedValue;
								const alternate = allArticleImages.length > 0 ? allArticleImages[1]: '';
								const code = allArticleCodes[0]
								return (
									<div
										className="flex flex-col text-left w-52 text-sm"
									> <Link  href={"/productPage"}>
										<CardLayout
											image={image}
											alternate={alternate}
											name={name}
											price={actualPrice}
											codes={code}
											/>
											</Link>
									</div>
								);
							}
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
