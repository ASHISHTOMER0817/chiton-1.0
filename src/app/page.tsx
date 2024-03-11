'use client'
import DeliveryStats from "./components/deliveryStats";
import fetchedData from "@/app/components/fetchedData";
import Image from "next/image";
import menHoodie from "@/../public/menHoodie.jpg";
import CardLayout from "./components/cardlayout";
import Link from "next/link";
import AndreaImage from "@/../public/AndreaImage.jpg";
import coat from "@/../public/coat.jpeg";
import { Suspense, useEffect, useState } from "react";
import "./filter.css";
import trousers from "@/../public/trousers.jpg";
import sweatshirt from "@/../public/sweatshirt.webp";
import cardigan from "@/../public/cardigan.jpg";
import coatWmen from "@/../public/coatWmen.jpg";
import coatMen from "@/../public/coatMen.jpeg";
import jeans from "@/../public/jeans.webp";
import shirts from "@/../public/shirts.jpg";
import cargoPants from "@/../public/cargoPants.jpg";
import home from "@/../public/home.jpg";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import HomePageCarousel from "./components/homePageCarousel";
import Spinner from "./components/spinner";

export default function Page() {
	const [data, setData] = useState();

	{
		/* Carousel Function Below */
	}
	const slideLeft = () => {
		let slider = document.getElementById("slider");
		slider!.scrollLeft = slider!.scrollLeft - 500;
	};
	const slideRight = () => {
		let slider = document.getElementById("slider");
		slider!.scrollLeft = slider!.scrollLeft + 500;
	};

	const categoriesCard = [
		{
			link: sweatshirt,
			Gender: "Men",
			Name: "Hoodies & Sweatshirts",
		},
		{
			link: trousers,
			Gender: "Ladies",
			Name: "Trousers",
		},
		{
			link: cardigan,
			Gender: "Ladies",
			Name: "Sweaters & Cardigans",
		},
		{
			link: coatWmen,
			Gender: "Ladies",
			Name: "Jackets & Coats",
		},
		{
			link: coatMen,
			Gender: "Men",
			Name: "Jackets & Coats",
		},
		{
			link: jeans,
			Gender: "Men",
			Name: "Jeans",
		},
		{
			link: shirts,
			Gender: "Men",
			Name: "Shirts",
		},
	];

	const preference = [
		"Ladies",
		"Men",
		"Divided",
		"Baby",
		"Kids",
		"H&M HOME",
		"Sport",
	];

	useEffect(() => {
		async function getData() {
			try {
				const response = await fetchedData(
					"products",
					"list",
					null,
					"0",
					"30",
					null
				);
				console.log("products with carousel", response);
				setData(response);
			} catch (error: any) {
				return console.log(
					"there is a problem in home --page.jsx",
					error
				);
			}
		}
		getData();
	}, []);

	return (
		<div className="relative">
			<div className="">
				<div className="w-7/12 m-auto ">
					<div className="flex justify-around text-xs mb-3 mt-5 sm:flex-col sm:text-nowrap sm:text-center sm:mb-5">
						<DeliveryStats />
					</div>
					<div className="w-full border text-center mb-3 bg-pink-300 bg-gradient-to-r from-yellow-100 to-pink-100">
						<p className="text-sm font-bold mt-5 mb-2">
							Transit into the new season
						</p>
						<p className="text-[10px]">
							Dive into the treasure trove, starting
							Rs.799
						</p>
						<nav className="grid grid-rows-1 grid-flow-col gap-4 justify-center my-4 text-white">
							<button className="bg-black p-2 text-sm font-semibold ">
								Women
							</button>
							<button className="bg-black p-2 text-sm font-semibold ">
								Men
							</button>
							<button className="bg-black p-2 text-sm font-semibold ">
								Kids
							</button>
							<button className="bg-black p-2 text-sm font-semibold ">
								Sports
							</button>
							<button className="bg-black p-2 text-sm font-semibold ">
								Home
							</button>
						</nav>
					</div>
					<div className="relative mx-auto h-[620px] border border-black">
						<Image
							src={coat}
							className="absolute overflow-hidden"
							quality={40}
							fill={true}
							priority={true}
							objectFit="cover"
							alt={"image"}
						/>
						<div className="   text-center text-white absolute top-[80%] left-2/4 transform -translate-x-1/2 -translate-y-1/2">
							<h4 className="text mb-3">
								TIMELESS STYLES
							</h4>
							<h1 className="  pb-4 text-4xl font-extrabold">
								New arrivals
							</h1>
							<h5 className=" text-base font-bold">
								A modern update on lace,
								embroidery and tailoring.
							</h5>
							<button className=" bg-white text-black font-extrabold p-2  mt-2">
								Look here
							</button>
						</div>
					</div>
					<div className="relative mx-auto h-[620px] border  mt-6">
						<Image
							src={cargoPants}
							className="absolute overflow-hidden"
							quality={100}
							fill={true}
							priority={true}
							objectFit="cover"
							alt={"image"}
						/>
						<div className="   text-center absolute top-[80%] left-2/4 transform -translate-x-1/2 -translate-y-1/2">
							<h1 className=" text-white pb-4 text-3xl font-extrabold">
								Street Approved Apparel
							</h1>
							<h5 className=" text-white text-base font-bold">
								Cargos with unmatched comfort
							</h5>
							<button className=" bg-white text-black font-extrabold p-2  mt-2">
								Shop Now
							</button>
						</div>
					</div>
					<div
						className={`w-full h-32 border relative text-center  my-5  bg-center`}
					>
						<Image
							src={home}
							className="absolute w-full h-full z-0 object-cover"
							objectFit="cover"
							alt={"home Decore"}
						/>
						<div className="top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 text-white ">
							<p className="text-sm font-bold mt-5 mb-2 z-10 text-nowrap">
								H&M HOME: New timeless pieces
							</p>
							<p className="text-[10px] z-10 text-nowrap">
								Exclusive offer await! New to
								shopping home? Check My account
								page
							</p>
							<nav className="  grid grid-rows-1 grid-flow-col gap-4 justify-center mt-4 z-10">
								<button className="bg-white p-2 text-sm font-bold text-black ">
									Shop now
								</button>
								<button className="bg-white p-2 text-sm font-bold text-black ">
									My account
								</button>
							</nav>
						</div>
					</div>

					<h2 className="text-black font-extrabold underline mt-5 mb-3">
						Popular Categories
					</h2>
					<div className="flex justify-around w-full text-sm m-5">
						{categoriesCard.map(
							({ link, Gender, Name }, index) => {
								return (
									<div
										key={index}
										className="flex flex-col  w-24 "
									>
										<Image
											className=" sm:h-36 sm:w-auto"
											// height={144}
											width={94}
											src={link}
											alt=""
										/>
										<div className="text-gray-500 text-xs font-bold">
											{Gender}
										</div>
										<div className="text-wrap text-sm font-medium">
											{Name}
										</div>
									</div>
								);
							}
						)}
					</div>
					<div className="bg-no-repeat bg-center relative mx-auto h-[620px] border border-black">
						{" "}
						<Image
							src={AndreaImage}
							className="absolute overflow-hidden"
							quality={100}
							fill={true}
							priority={true}
							objectFit="cover"
							alt={"image"}
						/>
						<div className=" text-center text-white absolute top-[80%] left-2/4 transform -translate-x-1/2 -translate-y-1/2">
							<h1 className="mb-2 font-extrabold">
								New Seasonal faves
							</h1>
							<h4 className=" mb-3  font-bold">
								Cute styles & smart classics for
								your lil ones!
							</h4>

							<button className=" bg-white text-black font-extrabold p-2  mt-3">
								Look here
							</button>
						</div>
					</div>
					<h4 className="text-black font-extrabold underline mt-5 mb-3">
						New Arrivals
					</h4>

					<div className="w-full grid-rows-1 grid-flow-col mt-3 text-center grid gap-2 justify-start">
						{preference.map((e, index) => {
							return (
								<>
									<div
										key={index}
										className="px-3 py-2 rounded-[30px] border hover:bg-[#FF0000] text-sm"
									>
										{e}
									</div>
								</>
							);
						})}
					</div>

					{/* BELOW IS THE CAROUSEL FUNCTION */}
					<div className="relative flex items-center mt-7">
						<MdChevronLeft
							className="opacity-50 hover:opacity-100 cursor-pointer "
							onClick={slideLeft}
							size={40}
						/>
						{/* <div
							id="slider"
							className="w-full h-full overflow-scroll overflow-x-scroll flex whitespace-nowrap scrollbar-hide scroll-smooth"
						>
							{data?.results === undefined
								? ""
								: data?.results.map(
										(
											{
												name,
												images,
												price,
												articles,
												rgbColors,
											}: {
												name: String;
												images: {
													url: string;
													baseUrl: string;
												}[];
												price: {
													formattedValue: String;
												};
												articles: {
													code: string;
												}[];
												rgbColors: string[];
											},
											index: number
										) => {
											const image =
												images.length >
												0
													? images[0]
															?.url
													: "";
											const actualPrice: String =
												price.formattedValue;
											const alternate =
												images.length >
												0
													? images[0]
															?.baseUrl
													: "";

											const code =
												articles[0]
													?.code;

											return (
												<div
													key={
														index
													}
												>
													<Link
														href={`/productPage/${code}`}
														className="mb-3 flex flex-col ml-2 text-left w-52 text-sm cursor-pointer hover:scale-110 ease-in-out duration-300 max-w-none"
													>
														<CardLayout
															index={
																index
															}
															image={
																image
															}
															alternate={
																alternate
															}
															name={
																name
															}
															price={
																actualPrice
															}
															codes={
																code
															}
															clothColor={
																rgbColors
															}
														/>
													</Link>
												</div>
											);
										}
								  )}
						</div> */}
						{data !== undefined ? <Suspense fallback={<Spinner/>}><HomePageCarousel data={data}/></Suspense>  : 'There was an error Plz reload the page'}
						<MdChevronRight
							className="opacity-50 hover:opacity-100 cursor-pointer"
							onClick={slideRight}
							size={40}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

{
	/* <div className="flex flex-wrap justify-between ">
							{data?.results === undefined ? '' : data?.results.map(
								(
									{
										name,
										images,
										price,
										articles,
									}: {
										name: String;
										images: {
											url: string;
											baseUrl: string;
										}[];
										price: {
											formattedValue: String;
										};
										articles: {
											code: string;
										}[];
									},
									index: number
								) => {
									const image =
										images.length > 0
											? images[0]
													?.url
											: "";
									const actualPrice: String =
										price.formattedValue;
									const alternate =
										images.length > 0
											? images[0]
													?.baseUrl
											: "";

									const code =
										articles[0]?.code;

									return (
										<div
											key={index}
											className="flex flex-col text-left w-52 text-sm"
										>
											{" "}
											<Link
												href={`/productPage/${code}`}
												className="mb-3"
											>
												<CardLayout
													index={
														index
													}
													image={
														image
													}
													alternate={
														alternate
													}
													name={
														name
													}
													price={
														actualPrice
													}
													codes={
														code
													}
												/>
											</Link>
										</div>
									);
								}
							)}
						</div> */
}

{
	/* <div className="relative flex items-center">
				<MdChevronLeft
					className="opacity-50 hover:opacity-100 cursor-pointer "
					onClick={slideLeft}
					size={40}
				/>
				<div
					id="slider"
					className="w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth"
				>
					{data?.products.map(
						(
							{
								name,
								images,
								price,
								articles,
							}: {
								name: String;
								images: {
									url: string;
									baseUrl: string;
								}[];
								price: {
									formattedValue: String;
								};
								articles: { code: string }[];
							},
							index: number
						) => {
							const image =
								images.length > 0
									? images[0]?.url
									: "";
							const actualPrice: String =
								price.formattedValue;
							const alternate =
								images.length > 0
									? images[0]?.baseUrl
									: "";

							const code = articles[0]?.code;

							return (
								<div key={index}>
									<Link
										href={`/productPage/${code}`}
										className="mb-3 flex flex-col text-left w-52 text-sm cursor-pointer hover:scale-110 ease-in-out duration-300 max-w-none"
									>
										<CardLayout
											index={index}
											image={image}
											alternate={
												alternate
											}
											name={name}
											price={
												actualPrice
											}
											codes={code}
										/>
									</Link>
								</div>
							);
						}
					)}
				</div>
				<MdChevronRight
					className="opacity-50 hover:opacity-100 cursor-pointer"
					onClick={slideRight}
					size={40}
				/>
						</div> */
}

{
	/* <div className="relative flex items-center ">
				<MdChevronLeft
					className="opacity-50 hover:opacity-100 cursor-pointer "
					onClick={slideLeft}
					size={40}
				/>
				<div
					id="slider"
					className="w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth"
				>
					{newArrivals.map((e, index) => {
						return (
							<>
								<Image
									key={index}
									className=" w-36 mr-3 mb-10 inline-block cursor-pointer hover:scale-110 ease-in-out duration-300 max-w-none"
									src={e}
									alt={"alternate"}
								/>
							</>
						);
					})}
				</div>
				<MdChevronRight
					className="opacity-50 hover:opacity-100 cursor-pointer"
					onClick={slideRight}
					size={40}
				/>
						</div> */
}
