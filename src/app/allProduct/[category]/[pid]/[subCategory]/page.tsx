"use client";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import fetchedData from "../../../../components/fetchedData";
import Header from "../../../../components/header";
import Login from "@/app/login/page";
import "@/app/filter.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import CardLayout from "@/app/components/cardlayout";
import axios from "axios";
import Image from "next/image";
import bgImage from "@/../public/bg-Image.jpg";
import { GiWoodStick } from "react-icons/gi";

export default function page({
	params,
}: {
	params: {
		category: string;
		pid: string;
		subCategory: string;
	};
}) {
	const [child, setChild] = useState("hidden");
	const [parent, setParent] = useState("");
	const [flow, setFlow] = useState("");
	const [overlay, setOverlay] = useState(false);
	const [subCategory, setSubCategory] = useState(params.subCategory);
	const [list, setList] = useState<[groupType]>();
	const [clothProperty, setClothProperty] = useState(params.pid);
	const [data, setData] = useState<DataState>();
	const [imageChange, setImageChange] = useState(false);
	const [favorites, setFavorites] = useState({
		price: "",
		image: "",
		name: "",
	});
	const [sortStt, setSortStt] = useState(false);
	const [colorStt, setColorStt] = useState(false);
	const [sizeStt, setSizeStt] = useState(false);
	const [styleStt, setStyleStt] = useState(false);
	const [fitStt, setFitStt] = useState(false);
	const sortRef = useRef<HTMLDivElement>(null);
	const sortListRef = useRef<HTMLUListElement>(null);
	const colorRef = useRef<HTMLDivElement>(null);
	const colorListRef = useRef<HTMLUListElement>(null);
	const sizeRef = useRef<HTMLDivElement>(null);
	const sizeListRef = useRef<HTMLUListElement>(null);
	const styletRef = useRef<HTMLDivElement>(null);
	const styleListRef = useRef<HTMLUListElement>(null);
	const fitRef = useRef<HTMLDivElement>(null);
	const fitListRef = useRef<HTMLUListElement>(null);

	interface groupType {
		CatName: string;
		CategoriesArray: {
			CatName: string;
			tagCodes: string[];
		}[];
	}

	interface Product {
		name: string;
		images: {
			url: string;
			baseUrl: string;
		}[];
		price: {
			formattedValue: string;
		};
		articles: {
			code: string;
		}[];
		defaultArticle: { normalPicture: { baseUrl: string }[] };
	}

	interface DataState {
		results?: Product[];
	}

	if (typeof window !== "undefined") {
		window.addEventListener("click", (e) => {
			if (
				e.target !== sortListRef.current &&
				e.target !== sortRef.current
			) {
				setSortStt(false);
			}
		});
	}
	if (typeof window !== "undefined") {
		window.addEventListener("click", (e) => {
			if (
				e.target !== colorListRef.current &&
				e.target !== colorRef.current
			) {
				setColorStt(false);
			}
		});
	}
	if (typeof window !== "undefined") {
		window.addEventListener("click", (e) => {
			if (
				e.target !== sizeListRef.current &&
				e.target !== sizeRef.current
			) {
				setSizeStt(false);
			}
		});
	}
	if (typeof window !== "undefined") {
		window.addEventListener("click", (e) => {
			if (
				e.target !== styleListRef.current &&
				e.target !== styletRef.current
			) {
				setStyleStt(false);
			}
		});
	}
	if (typeof window !== "undefined") {
		window.addEventListener("click", (e) => {
			if (
				e.target !== fitListRef.current &&
				e.target !== fitRef.current
			) {
				setFitStt(false);
			}
		});
	}

	useEffect(() => {
		async function getData() {
			try {
				const response = await fetchedData(
					"products",
					"list",
					"",
					"0",
					"30",
					clothProperty
				);
				setData(response);
				console.log(response);

				{/*const productList = await fetchedData(
					"categories",
					"list",
					"",
					"",
					"",
					""
				);
				productList.forEach(
					({
						CatName,
						CategoriesArray,
					}: {
						CatName: string;
						CategoriesArray: [groupType];
					}) => {
						if (CatName === params.category) {
							return setList(CategoriesArray);
						} else {
							console.log(
								"there is no tagcode inside"
							);
						}
					}
				); */}

				return;
			} catch (error) {
				console.log(error);
			}
		}
		getData();
	}, []);

	async function favoriteClothes(name: string, url: string, price: string) {
		try {
			const favorites = { name, url, price };
			const response = await axios.post(
				"/api/favorites",
				favorites
			);
			console.log(response);
		} catch (error) {
			console.log("error while posting favorites", error);
		}
	}

	function change() {
		if (overlay) {
			setParent("parent");
			setChild("child");
			setFlow("overflow-hidden");
			setOverlay(false);
		} else if (overlay === false) {
			setParent("");
			setChild("hidden");
			setFlow("");
		}
	}

	function changeSubCategory(catname: string, tagcode: string[]) {
		setSubCategory(catname);
		setClothProperty(tagcode[0]);
	}

	const size = ["SX", "S", "M", "L", "XL", "XXL"];
	const sort = ["recommended", "Newest", "Lowest Price", "highest"];

	const style = [
		"hoodie",
		"joggers",
		"polo shirt",
		"sweatpants",
		"sweatshirt",
	];
	const fit = [
		"loose fit",
		"oversized",
		"regular fit",
		"relaxed fit",
		"slim fit",
	];

	const colors = [
		"black",
		"blue",
		"amber",
		"green",
		"orange",
		"purple",
		"red",
		"white",
		"pink",
	];

	return (
		<div className={flow}>
			<div className={parent}>
				<Header
					overlay={async () => {
						setOverlay(true), change();
					}}
				/>
				<Login className={child} overlay={change} />
				<div className="flex">
					{/* <section className="sticky ml-10">
						{list !== undefined
							? list?.map(
									(
										{
											CatName,
											CategoriesArray,
										}: {
											CatName: string;
											CategoriesArray: {
												CatName: string;
												tagCodes: string[];
											}[];
										},
										index: number
									) => {
										return (
											<div
												key={
													index
												}
												className=" "
											>
												<div className="font-bold mt-10 text-[15px] ">
													{
														CatName
													}
												</div>

												{CategoriesArray
													? CategoriesArray.map(
															(
																{
																	CatName,
																	tagCodes,
																}: {
																	CatName: string;
																	tagCodes: string[];
																},
																index: number
															) => {
																return (
																	<div
																		key={
																			index
																		}
																		className="my-4 ml-4 font-semibold text-sm hover:underline underline-offset-4 hover:text-red-500 cursor-pointer"
																		onClick={() =>
																			changeSubCategory(
																				CatName,
																				tagCodes
																			)
																		}
																	>
																		{
																			CatName
																		}
																	</div>
																);
															}
													  )
													: ""}
											</div>
										);
									}
							  )
							: ""}
					</section> */}
					<section className="mt-10 ml-10">
						{/* <div className="w-auto h-48 relative border text-center mb-3">
							<Image
								src={bgImage}
								objectFit="cover"
								className="overflow-hidden z-1 absolute"
								alt={""}
							/>
							<p className="text-3xl top-[30%] left-[50%] -translate-x-2/4 -translate-y-2/4 absolute z-20 text-red-500 font-bold mt-5 mb-2">
								Flat 15% off on iconic picks!
							</p>

							<nav className=" z-20 bottom-[5%] left-[50%] -translate-x-2/4 -translate-y-2/4 absolute grid grid-rows-1 grid-flow-col gap-4 justify-center my-4 text-black">
								<button className="bg-white p-3 text-sm font-semibold ">
									Women
								</button>
								<button className="bg-white p-3 text-sm font-semibold ">
									Men
								</button>
								<button className="bg-white p-3 text-sm font-semibold ">
									Kids
								</button>
								<button className="bg-white p-3 text-sm font-semibold ">
									Sports
								</button>
								<button className="bg-white p-3 text-sm font-semibold ">
									Home
								</button>
							</nav>
						</div>
						<div className="font-extrabold text-5xl mb-10 ">
							{subCategory}
						</div>
						<div className="font-semibold text-sm">
							Add all the essential style staples to
							his wardrobe with our baby boys'
							clothes. We have T-Shirts, jeans and
							shorts in various styles
							<br /> for his everyday rotation,
							while comfy dungarees make all-in-one
							dressing as easy as ABC. When smarter
							looks are called for,
							<br /> scroll no further than our baby
							boys' shirts and trousers, before
							adding the finishing touches with our
							baby boys' accessories.
							<br /> Find the perfect gift for
							little ones in our collection or
							browse for baby boys' shoes.
						</div>
						<nav>
							<section className="grid grid-flow-col grid-rows-1 font-semibold mb-8 mt-10 gap-4 focus:text-red-500 justify-start">
								<div className="transition  active:bg-gray-200 flex flex-col  ">
									<div
										ref={sortRef}
										onClick={() => {
											setSortStt(
												!sortStt
													? true
													: false
											);
										}}
										className="flex items-center cursor-pointer"
									>
										{" "}
										SORT BY{" "}
										<RiArrowDropDownLine className="ml-1 focus:rotate-180 h-9 w-9  text-gray-600" />
									</div>
									<ul
										ref={sortListRef}
										className={` font-normal text-sm w-40 focus-visible:visible   ${
											sortStt
												? ""
												: "hidden"
										}`}
									>
										{sort.map(
											(
												e: string,
												index: number
											) => {
												return (
													<li
														onClick={() => {
															setSortStt(
																!sortStt
															);
														}}
														key={
															index
														}
														className="p-3 flex items-center hover:bg-slate-200"
													>
														<div className="float-left mr-7 border w-4 h-4 border-gray-600">
															{" "}
															<GiWoodStick className=" hidden focus:block" />
														</div>

														<div className="text-nowrap">
															{
																e
															}{" "}
														</div>
													</li>
												);
											}
										)}
									</ul>
								</div>
								<div className="  transition  active:bg-gray-200 flex ">
									<div
										className="flex items-center cursor-pointer"
										ref={colorRef}
										onClick={() =>
											setColorStt(
												!colorStt
													? true
													: false
											)
										}
									>
										COLOR
										<RiArrowDropDownLine className="ml-1 focus:rotate-180 h-9 w-9 text-gray-600" />
									</div>
									<ul
										ref={colorListRef}
										className={` font-normal text-sm w-40 focus-visible:visible   ${
											colorStt
												? ""
												: "hidden"
										}`}
									>
										{colors.map(
											(
												e,
												index
											) => {
												return (
													<li
														className="p-3 hover:bg-slate-200 focus:bg-slate-300 "
														onClick={() => {
															setColorStt(
																!sortStt
															);
														}}
														key={
															index
														}
													>
														<div
															className={`bg-${e} mr-7 float-left w-2 h-2`}
														></div>
														{
															e
														}
													</li>
												);
											}
										)}
									</ul>
								</div>
								<div className="  transition active:bg-gray-200 flex ">
									<div
										className="flex items-center"
										ref={sizeRef}
										onClick={() =>
											setSizeStt(
												!sizeStt
													? true
													: false
											)
										}
									>
										SIZE
										<RiArrowDropDownLine className="ml-1 focus:rotate-180 h-9 w-9 text-gray-600" />
									</div>
									<ul
										ref={sizeListRef}
										className={` font-normal text-sm w-40 focus-visible:visible   ${
											sizeStt
												? ""
												: "hidden"
										}`}
									>
										{size.map(
											(
												e: string,
												index: number
											) => {
												return (
													<>
														<li
															className="w-40 p-3 hover:bg-slate-200"
															onClick={() => {
																setSizeStt(
																	!sizeStt
																);
															}}
															key={
																index
															}
														>
															{" "}
															<div className="w-2 mr-7 h-2 float-left">
																<GiWoodStick className=" hidden focus:block" />
															</div>
															{
																e
															}{" "}
														</li>
													</>
												);
											}
										)}
									</ul>
								</div>
								<div className="  transition  active:bg-gray-200 flex ">
									<div
										className="flex items-center"
										ref={styletRef}
										onClick={() =>
											setStyleStt(
												!styleStt
													? true
													: false
											)
										}
									>
										STYLE
										<RiArrowDropDownLine className="ml-1 focus:rotate-180 h-9 w-9 text-gray-600" />
									</div>
									<ul
										ref={styleListRef}
										className={` font-normal text-sm w-40 focus-visible:visible   ${
											styleStt
												? ""
												: "hidden"
										}`}
									>
										{style.map(
											(
												e: string,
												index: number
											) => {
												return (
													<>
														<li
															onClick={() => {
																setStyleStt(
																	!styleStt
																);
															}}
															key={
																index
															}
															className="p-3 hover:bg-slate-200"
														>
															<div className="float-left mr-7 border w-2 h-2 border-gray-600">
																{" "}
																<GiWoodStick className=" hidden focus:block" />
															</div>
															{
																e
															}
														</li>
													</>
												);
											}
										)}
									</ul>
								</div>
								<div className="  transition  active:bg-gray-200 flex items-center">
									<div
										className="flex items-center"
										ref={fitRef}
										onClick={() =>
											setFitStt(
												!fitStt
													? true
													: false
											)
										}
									>
										FIT
										<RiArrowDropDownLine className="ml-1 focus:rotate-180 h-9 w-9 text-gray-600" />
									</div>
									<ul
										ref={fitListRef}
										className={` font-normal text-sm w-40 focus-visible:visible   ${
											fitStt
												? ""
												: "hidden"
										}`}
									>
										{fit.map(
											(
												e: string,
												index: number
											) => {
												return (
													<>
														<li
															onClick={() => {
																setFitStt(
																	!fitStt
																);
															}}
															key={
																index
															}
															className="p-3 hover:bg-slate-200"
														>
															<div className="float-left mr-7 border w-2 h-2 border-gray-600">
																{" "}
																<GiWoodStick className=" hidden focus:block" />
															</div>
															{
																e
															}
														</li>
													</>
												);
											}
										)}
									</ul>
								</div>
							</section>
						</nav> */}
						<div className="grid grid-cols-4 gap-x-5 gap-y-2">
							{data?.results === undefined
								? ""
								: data?.results.map(
										(
											{
												name,
												images,
												price,
												articles,
												defaultArticle,
											},
											index: number
										) => {
											const image =
												defaultArticle
													.normalPicture[0]
													.baseUrl &&
												!imageChange
													? defaultArticle
															.normalPicture[0]
															.baseUrl
													: imageChange
													? images[0]
															.baseUrl
													: "";
											const actualPrice: string =
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
												
													<Link
													key={
														index
													}
														href={`/productPage/${code}`}
														className="mb-3 mr-3 flex flex-wrap  text-left text-sm cursor-pointer "
														onMouseEnter={() =>
															setImageChange(
																true
															)
														}
														onMouseLeave={() =>
															setImageChange(
																false
															)
														}
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
															favorites={() => {
																favoriteClothes(
																	name,
																	images[0]
																		?.baseUrl,
																	actualPrice
																);
															}}
														/>
													</Link>
												
											);
										}
								  )}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
