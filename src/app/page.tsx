"use client";
import DeliveryStats from "./components/deliveryStats";
import Image from "next/image";
import AndreaImage from "@/../public/AndreaImage.jpg";
import coat from "@/../public/coat.jpeg";
import { Suspense, useState } from "react";
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
import HomePageCarousel from "./components/homePageCarousel";
import Spinner from "./components/spinner";
import Link from "next/link";

export default function Page() {
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
	const [categories, setCategories] = useState("men_all");

	const preference = [
		{ category: "Ladies", code: "ladies_all" },
		{ category: "Men", code: "men_all" },
		{ category: "Divided", code: "ladies_divided" },
		{ category: "Baby", code: "kids_newbornbaby_viewall" },
		{ category: "Kids", code: "kids_all" },
		{ category: "H&M HOME", code: "home_all" },
		{ category: "Sport", code: "sportswear" },
	];

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
							<button className="bg-black p-2 text-sm hover:text-gray-600 font-semibold ">
								<Link
									href={
										"./allProduct/Women/ladies_blazerswaistcoats/Blazers%20&%20Vests"
									}
								>
									Women
								</Link>
							</button>
							<button className="bg-black p-2 text-sm hover:text-gray-600 font-semibold ">
								<Link
									href={
										"./allProduct/Men/men_hoodiessweatshirts/Hoodies%20&%20Sweatshirts"
									}
								>
									Men
								</Link>
							</button>
							<button className="bg-black p-2 text-sm hover:text-gray-600 font-semibold ">
								<Link
									href={
										"./allProduct/Kids/kids_boys_shoes/Shoes"
									}
								>
									Kids
								</Link>
							</button>
							<button className="bg-black p-2 text-sm hover:text-gray-600 font-semibold ">
								<Link
									href={
										"./allProduct/Sport/sportswear_kids_accessories/Sports%20Accessories"
									}
								>
									Sports
								</Link>
							</button>
							<button className="bg-black p-2 text-sm hover:text-gray-600 font-semibold ">
								<Link
									href={
										"./allProduct/H&M%20HOME/home_furnitures/Furniture"
									}
								>
									Home
								</Link>
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
							<button className=" bg-white hover:text-gray-600 text-black font-extrabold p-2  mt-2">
									<Link href={'/allProduct/Men/men_blazerssuits/Blazers%20&%20Suits'}></Link> Look here
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
							<button className=" bg-white hover:text-gray-600 text-black font-extrabold p-2  mt-2">
							<Link href={'/allProduct/Men/men_casual_lookbook/Casual%20Looks'}></Link>	Shop Now
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
								<button className="bg-white p-2 text-sm font-bold hover:text-gray-600 text-black ">
									Shop now
								</button>
								<button className="bg-white p-2 text-sm font-bold hover:text-gray-600 text-black ">
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

							<button className=" bg-white text-black font-extrabold p-2 hover:text-gray-600 mt-3">
								Look here
							</button>
						</div>
					</div>
					<h4 className="text-black font-extrabold underline mt-5 mb-3">
						New Arrivals
					</h4>

					<div className="w-full grid-rows-1 grid-flow-col mt-3 text-center grid gap-2 justify-start">
						{preference.map(
							({ category, code }, index) => {
								return (
									<>
										<div
											key={index}
											className="px-3 py-2 rounded-[30px] hover:text-gray-600 border hover:bg-[#FF0000] text-sm cursor-pointer"
											onClick={() =>
												setCategories(
													code
												)
											}
										>
											{category}
										</div>
									</>
								);
							}
						)}
					</div>
					{
						// <Suspense fallback={<Spinner />}>
						// 	<HomePageCarousel categories={categories} />
						// </Suspense>
					}
				</div>
			</div>
		</div>
	);
}
