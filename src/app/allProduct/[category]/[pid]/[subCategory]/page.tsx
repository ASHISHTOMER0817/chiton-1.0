"use client";
import {
	Suspense,
	useEffect,
	useRef,
	useState,
} from "react";
import "@/app/filter.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import axios from "axios";
import Image from "next/image";
import bgImage from "@/../public/bg-Image.jpg";
import { GiWoodStick } from "react-icons/gi";
import AllProductList from "@/app/components/allProductList";
import Spinner from "@/app/components/spinner";
import CategoryList from "@/app/components/categoryList";

export default function Page({
	params,
}: {
	params: {
		category: string;
		pid: string;
		subCategory: string;
	};
}) {
	const [subCategory, setSubCategory] = useState(params.subCategory);
	const [clothProperty, setClothProperty] = useState(params.pid);

	// const [favorites, setFavorites] = useState({
	// 	price: "",
	// 	image: "",
	// 	name: "",
	// });
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


	async function favoriteClothes(
		name: string,
		url: string,
		price: string,
		netQuantity: string,
		articleCode: string
	) {
		try {
			const productDetails = {
				url,
				name,
				price,
				netQuantity,
				articleCode,
			};
			const context = "favorites";
			const response = await axios.post("/api/productPage", {
				productDetails,
				context,
			});
			console.log(response);
		} catch (error) {
			console.log("error while posting favorites", error);
		}
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

	
      function changeSubCategory(catname: string, tagcode: string[]) {
		setSubCategory(catname);
		setClothProperty(tagcode[0]);
	}

	return (
		<div className="relative flex">
				<Suspense fallback={<Spinner/>}><CategoryList category={params.category} change_sub_category={changeSubCategory}/></Suspense>

				<section className="mt-10 ml-10 w-full relative">
					<div className="w-auto h-40 relative mr-72 border text-center mb-3">
						<Image
							src={bgImage}
							objectFit="cover"
							className="overflow-hidden object-cover w-full h-full z-1 absolute"
							alt={""}
						/>
						<p className="text-3xl top-[30%] left-[50%] -translate-x-2/4 -translate-y-2/4 absolute z-20 text-red-500 font-bold ">
							Flat 15% off on iconic picks!
						</p>

						<nav className=" z-20 bottom-[0%] left-[50%] -translate-x-2/4 -translate-y-2/4 absolute grid grid-rows-1 grid-flow-col gap-4 justify-center  text-black">
							<button className="bg-white p-[10px] hover:text-gray-600 text-sm font-semibold ">
								Women
							</button>
							<button className="bg-white p-[10px] hover:text-gray-600 text-sm font-semibold ">
								Men
							</button>
							<button className="bg-white p-[10px] hover:text-gray-600 text-sm font-semibold ">
								Kids
							</button>
							<button className="bg-white p-[10px] hover:text-gray-600 text-sm font-semibold ">
								Sports
							</button>
							<button className="bg-white p-[10px] hover:text-gray-600 text-sm font-semibold ">
								Home
							</button>
						</nav>
					</div>
					<div className="font-extrabold text-5xl mb-10 ">
						{subCategory}
					</div>
					<div className="font-semibold text-sm">
						Add all the essential style staples to his
						wardrobe with our baby boys&apos; clothes.
						We have T-Shirts, jeans and shorts in
						various styles
						<br /> for his everyday rotation, while
						comfy dungarees make all-in-one dressing as
						easy as ABC. When smarter looks are called
						for,
						<br /> scroll no further than our baby
						boys&apos; shirts and trousers, before
						adding the finishing touches with our baby
						boys&apos; accessories.
						<br /> Find the perfect gift for little ones
						in our collection or browse for baby
						boys&apos; shoes.
					</div>
						<section className="grid grid-flow-col grid-rows-1 font-semibold mb-8 mt-10 gap-4 focus:text-red-500 justify-start z-10 absolute top-80">
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
									className={` font-normal text-sm w-40 bg-gray-200 focus-visible:visible   ${
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
													className="p-3 flex items-center hover:bg-slate-200 focus:bg-slate-300"
												>
													<div className="float-left mr-6 border w-4 h-4 border-gray-600">
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
							<div className="  transition  active:bg-gray-200 flex flex-col">
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
									className={` font-normal text-sm w-40 bg-gray-200 focus-visible:visible   ${
										colorStt
											? ""
											: "hidden"
									}`}
								>
									{colors.map(
										(e, index) => {
											return (
												<li
													className="p-3 flex items-center hover:bg-slate-200 focus:bg-slate-300 "
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
													style={{backgroundColor: `${e}`}}	className={`bg-${e} mr-7 float-left w-2 h-2`}
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
							<div className="  transition active:bg-gray-200 flex flex-col">
								<div
									className="flex items-center cursor-pointer"
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
									className={` font-normal text-sm w-40 bg-gray-200 focus-visible:visible   ${
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
														className="p-3 flex items-center hover:bg-slate-200 focus:bg-slate-300"
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
														<div className="w-4 mr-7 h-4 float-left">
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
							<div className="  transition  active:bg-gray-200 flex flex-col">
								<div
									className="flex items-center cursor-pointer"
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
									className={` font-normal text-sm w-40 bg-gray-200 focus-visible:visible   ${
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
														className="p-3 flex items-center hover:bg-slate-200 focus:bg-slate-300"
													>
														<div className="float-left mr-7 border w-4 h-4 border-gray-600">
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
							<div className="  transition  active:bg-gray-200 flex flex-col">
								<div
									className="flex items-center cursor-pointer"
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
									className={` font-normal text-sm w-40 bg-gray-200 focus-visible:visible   ${
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
														className="p-3 flex items-center hover:bg-slate-200 focus:bg-slate-300"
													>
														<div className="float-left mr-7 border w-4 h-4 border-gray-600">
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
					
						<Suspense fallback={<Spinner />}>
							<AllProductList clothProperty={clothProperty} />
						</Suspense>
				</section>
			</div>
	);
}
