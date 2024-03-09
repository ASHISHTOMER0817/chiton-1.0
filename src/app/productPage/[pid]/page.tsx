/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from "react";
import fetchedData from "../../components/fetchedData";
import Image from "next/legacy/image";
import arrowDropDown from "@/../public/arrowDropDown.svg";
import axios from "axios";
import store from "@/../public/store.svg";
import { FaHeart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import CardLayout from "@/app/components/cardlayout";
import Link from "next/link";
import { IoStorefrontOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";



export default function Page({ params }: { params: { pid: string } }) {
	const [associatedData, SetassociatedData] = useState<any>();
	const [fit, setFit] = useState("hidden");
	const [material, setMaterial] = useState("hidden");
	const [guide, setGuide] = useState("hidden");
	const [changeProduct, setChangeProduct] = useState(params.pid)

	function changeState(fit: string, material: string, guide: string) {
		setFit(fit);
		setMaterial(material);
		setGuide(guide);
	}

	const [product, setProduct] = useState<any>();
	console.log("abc");
	useEffect(() => {
		async function fetchData() {
			try {
				const data = await fetchedData(
					"products",
					'detail',
					changeProduct,
					"",
					"",
					""
				);

				setProduct(data?.product);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}

		fetchData();
	}, [changeProduct]);

	const productDetails = {
		url: product?.articlesList[0]?.galleryDetails[0]?.baseUrl,
		name: product?.name,
		price:
			product?.articlesList[0]?.whitePrice !== undefined
				? product?.articlesList[0]?.whitePrice.price
				: "",
		quantity:
			product?.articlesList[0]?.netQuantity !== undefined
				? product?.articlesList[0]?.netQuantity
				: "",
		articleCode: product?.articlesList[0]?.code,
	};

	async function sendData() {
		try {
			const context = 'product'
			const response = await axios.post(
				"/api/users/productPage",
				{productDetails, context}
			);
			console.log("page.tsx --", productDetails);
			const message = await response.data.message;
			if (response.data.success !== false) {
				console.log(message);
			} else {
				console.log(message);
			}
		} catch (error: any) {
			console.log("wasnt able to send data", error);
		}
	}

	const allDetails = [
		{
			value: <div><span className="font-semibold">Length: </span> <span>{product?.lengthCollection[0]?.value[0]}</span> </div>,
		},
		{
			value: <div><span className="font-semibold"> Sleeve Length: </span> <span>{product?.lengthCollection[1]?.value[0]}</span></div>,
		},
		{
			value:
				product?.styleCollection[0]?.value[0] !== undefined ? (
					<div>
						{" "}
						<span className="font-semibold">Neck Style:</span>
						{product?.styleCollection[0]?.value[0]}{" "}
					</div>
				) : (
					""
				),
		},
		{
			value:
				product?.fits !== undefined ? (
					<div><span className="font-semibold"> Fit:</span> {product?.fits[0]} </div>
				) : (
					""
				),
		},
		{
			value: (
				<div>
					<span className="font-semibold">Description:</span>{product?.articlesList[0]?.color.text}
					, ${product?.articlesList[0]?.pattern}
				</div>
			),
		},
		{
			value:
				product?.articlesList[0]?.concepts === undefined ? (
					<div>
						<span className="font-semibold">Concept:</span>{" "}
						{
							product?.articlesList[0]
								?.genericDescription
						}{" "}
					</div>
				) : (
					<div>
						<span className="font-semibold">Concept:</span> {product?.articlesList[0]?.concepts}{" "}
					</div>
				), ///////left OFF --------
		},
		{
			value:
				product?.articlesList[0].whitePrice !== undefined ? (
					<div>
						<span className="font-semibold">Price</span>(
						{
							product?.articlesList[0].whitePrice
								.currency
						}
						):{" "}
						{product?.articlesList[0].whitePrice.price}{" "}
						incl. of all taxes{" "}
					</div>
				) : (
					""
				),
		},
		{
			value:
				product?.articlesList[0]?.countryOfProduction !==
				undefined ? (
					<div>
						<span className="font-semibold">Country of Production:</span>{" "}
						{
							product?.articlesList[0]
								?.countryOfProduction
						}
					</div>
				) : (
					<div>
						<span className="font-semibold">Country of Production:</span>
						{
							product?.articlesList[0]
								?.articleCountryOfProduction
						}{" "}
					</div>
				),
		},
		{
			value: product?.genericDescription,
		},
		{
			value:
				product?.articlesList[0]?.netQuantity !== undefined ? (
					<div>
						<span className="font-semibold">Net Quantity:</span>{" "}
						{product?.articlesList[0]?.netQuantity}
					</div>
				) : (
					<div>
						<span className="font-semibold">Visual Description:</span>{" "}
						{
							product?.articlesList[0]
								?.visualDescription
						}
					</div>
				),
		},
		{
			value:
				product?.articlesList[0]?.importedBy !== undefined ? (
					<div>
						<span className="font-semibold">Marketed and imported by:</span>{" "}
						{product?.articlesList[0]?.importedBy}
					</div>
				) : (
					""
				),
		},
		{
			value:
				product?.articlesList[0]?.importedBy !== undefined ? (
					<div>
						<span className="font-semibold">Date of import:</span>{" "}
						{product?.articlesList[0]?.importedDate}
					</div>
				) : (
					""
				),
		},
		{
			value: (
				<div className=" ">
					Customer service: In case of consumer complaint,
					write to H&M Hennes & Mauritz Retail PVT. Ltd, A
					Wing, D3, 2nd Floor,...{" "}
					<span className="underline font-bold">Read more</span>
				</div>
			),
		},
		{
			value: (
				<div className=" ">
					Disclaimer: This information is based on sample of
					the product displayed on website. There may be
					change in the...{" "}
					<span className="underline font-bold">Read more</span>{" "}
				</div>
			),
		},
	];

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

	return (
		<>

			<div className="flex my-6  mx-6">
				<div className="flex justify-around flex-wrap w-[67%]">
					{product?.articlesList[0]?.galleryDetails.map(
						(
							{ baseUrl }: { baseUrl: string },
							index: string
						) => {
							return (
								<>
									<Image
										priority={true}
										quality={50}
										key={index}
										src={baseUrl}
										width={479}
										height={718}
										className="h-auto"
										alt={
											"product-Image"
										}
									/>
								</>
							);
						}
					)}
				</div>

				<section className=" ml-6 w-[28%] ">
					<div className="flex justify-between items-center">
						<h5 className="font-bold">
							{product?.articlesList[0]?.name}
						</h5>
						<FaHeart className="text-gray-300 w-6 h-6 hover:text-red-500" />
					</div>
					<h6 className="text-gray-200 font-bold mt-3">
						MRP inclusive of all taxes
					</h6>
					<div className="flex justify-between items-center mt-2">
						<h4 className="text-red-500">
							
								{product?.articlesList[0]?.redPrice?.currency}{product?.articlesList[0]
									?.redPrice?.price}
							
						</h4>
						<h4 className="line-through mr-auto">{product?.articlesList[0]?.whitePrice?.currency}{product?.articlesList[0]
									?.redPrice?.price}</h4>

						{product?.articlesList[0]
							.percentageDiscount !== undefined ? (
							<div className="text-white  bg-red-500 text-base px-2 py-1">
								{" "}
								{
									product?.articlesList[0]
										.percentageDiscount
								}
							</div>
						) : (
							""
						)}
					</div>
							
					<h6 className="text-gray-400 font-extrabold mt-7 mb-5">
						{product?.articlesList[0].colourDescription}
					</h6>

					<div className="relative flex items-center mb-4">
						<MdChevronLeft
							className="opacity-50 hover:opacity-100 cursor-pointer "
							onClick={slideLeft}
							size={30}
						/>
						                       {/* Dicarded CSS can be helpful --  flex justify-start flex-wrap */}
						<div
							id="slider"
							className="w-full h-full overflow-x-scroll flex whitespace-nowrap scrollbar-hide scroll-smooth"
						>
							                    {/*Try to use Object Fit "cover" on <Image/> tag It can work  */}
							{product?.articlesList.map(
								(
									{
										galleryDetails,
									}: {
										galleryDetails: {
											baseUrl: string;
										}[];
									},
									index: number
								) => {
									const baseUrl =
										galleryDetails[0]
											?.baseUrl;
									return (
										<>
											<img
												key={
													index
												}
												src={
													baseUrl
												}
												className="mr-2 w-[50px]  cursor-pointer hover:scale-110 ease-in-out duration-300 max-w-full min-w-0 flex-shrink-0"
												// width={
												// 	50
												// }
												// height={60}
												// layout="fixed"
												
												alt={
													"image..."
												}
											/>
										</>
									);
								}
							)}
						</div>
						<MdChevronRight
							className="opacity-50 hover:opacity-100 cursor-pointer"
							onClick={slideRight}
							size={30}
						/>
					</div>

					<button
						className="h-11 font-extrabold bg-black text-white w-full my-7"
						onClick={sendData}
					>
						Add{" "}
					</button>

					<div className="flex justify-start items-center">
						
								<IoStorefrontOutline width={10} height={10} />
						{product?.articlesList[0]?.inStore ===
						undefined ? (
							""
						) : product?.articlesList[0]?.inStore !==
						  false ? (
							<div className="text-left">
								Available in stores{" "}
							</div>
						) : (
							<div className="text-left">
								Not available in stores
							</div>
						)}
					</div>
					<div className="flex justify-start items-center">
						
						<IoIosInformationCircleOutline width={10} height={10} />
						<h6 className="font-bold text-gray-600 ">
							Delivery time: 2-7 days
						</h6>
					</div>
					<h6 className="font-extrabold text-center my-5">
						Delivery and Payment
					</h6>
					<div className="text-gray-400 flex justify-start items-center">
						<CiStar className="h-3 w-3 mr-1 hover:text-yellow-600" />
						<CiStar className="h-3 w-3 mr-1 hover:text-yellow-600" />
						<CiStar className="h-3 w-3 mr-1 hover:text-yellow-600" />
						<p>(10 reviews)</p>
					</div>

					<div
						className="h-10 flex justify-between hover:text-red-500 items-center border-t border-gray-600 w-full"
						onClick={() =>
							fit !== "hidden"
								? setFit("hidden")
								: changeState(
										"",
										"hidden",
										"hidden"
								  )
						}
					>
						{" "}
						<div className="font-bold">Description and Fit</div>
						<Image src={arrowDropDown} alt={""} />
					</div>
					<div
						className={`${fit} mb-4  text-left flex flex-col text-sm`}
					>
						<p>
							{
								product?.articlesList[0]
									?.description
							}
						</p>
						{product?.articlesList[0].code !==
						undefined ? (
							<div className="text-[10px]">
								Article Number:{" "}
								{product?.articlesList[0].code}
							</div>
						) : (
							""
						)}
						{product?.numbersOfPieces !== undefined ? (
							<div className="mt-3 font-bold">
								{" "}
								Pieces and pairs:{" "}
								{product?.numbersOfPieces}
							</div>
						) : (
							""
						)}

						<h6 className="mb-3">Size:</h6>
						{allDetails.map(({ value }, index) => {
							return (
								<>
									<div className="text-sm my-2" key={index}>
										{value}
									</div>
								</>
							);
						})}
					</div>

					<div
						className="h-10 flex justify-between hover:text-red-500 items-center border-t border-gray-600 w-full"
						onClick={() => {
							material !== "hidden"
								? setMaterial("hidden")
								: changeState(
										"hidden",
										"",
										"hidden"
								  );
						}}
					>
						<div className="font-bold">Materials</div>
						<Image src={arrowDropDown} alt={""} />
					</div>
					<div
						className={`${material} text-xs text-left flex flex-col`}
					>
						<h4 className="font-bold">Composition</h4>
						<ul className="mt-3">
							{product?.articlesList[0]
								?.compositions === undefined
								? ""
								: product?.articlesList[0]?.compositions[0].materials.map(
										(
											{
												name,
												percentage,
											}: {
												name: string;
												percentage: string;
											},
											index: number
										) => {
											return (
												<li
													className="mb-2"
													key={
														index
													}
												>
													{
														name
													}
													{
														": "
													}
													{
														percentage
													}
												</li>
											);
										}
								  )}{" "}
							{product?.articlesList[0]
								?.compositions[1] === undefined
								? ""
								: product?.articlesList[0]?.compositions[1].materials.map(
										(
											{
												name,
												percentage,
											}: {
												name: string;
												percentage: string;
											},
											index: number
										) => {
											return (
												<li
													className="mb-2"
													key={
														index
													}
												>
													{
														name
													}
													{
														": "
													}
													{
														percentage
													}
												</li>
											);
										}
								  )}
						</ul>

						{product?.articlesList[0]
							?.aggregatedSustainabilityCompositions !==
						undefined ? (
							<>
								<div className="font-bold text-base mt-4 mb-2">
									Additional Material
									information
								</div>
								<div className="text-sm font-bold">
									The total weight of this
									product contains:
								</div>{" "}
								<ul className="">
									{product?.articlesList[0]?.aggregatedSustainabilityCompositions.map(
										(
											{
												sustainabilityName,
												sustainabilityPercentage,
											}: {
												sustainabilityName: string;
												sustainabilityPercentage: string;
											},
											index: number
										) => {
											return (
												<>
													<li
														className="my-2"
														key={
															index
														}
													>
														{
															sustainabilityPercentage
														}{" "}
														{
															sustainabilityName
														}{" "}
													</li>{" "}
												</>
											);
										}
									)}{" "}
								</ul>{" "}
							</>
						) : (
							""
						)}

						<div className="text-wrap text-[10px]">
							We exclude the weight of minor
							components such as, but not
							exclusively: threads, buttons,
							zippers, embellishments and prints.
						</div>

						<div className="text-wrap text-[10px] mt-2">
							The total weight of the product is
							calculated by adding the weight of all
							layers and main components together.
							Based on that, we calculate how much
							of that weight is made out by each
							material. For sets & multipacks all
							pieces are counted together as one
							product in calculations.
						</div>

						{product?.articlesList[0]?.keyFabrics !==
							undefined ? 
							<div className="flex justify-start text-base items-center my-4 ">
								Material:{" "}
								{product?.articlesList[0]?.keyFabrics.map(
									(
										e: string,
										index: number
									) => {
										return (
											<div
												key={
													index
												}
											>
												{e}{" "}
											</div>
										);
									}
								)}
							</div>
						 : ""}

						<h4 className="mt-4 text-base font-bold">
							Materials in this product explained
						</h4>

						{product?.articlesList[0]?.materialDetails.map(
							(
								{
									name,
									description,
								}: {
									name: string;
									description: string;
								},
								index: number
							) => {
								return (
									<>
										<div className="font-bold" key={index}>
											{name}{" "}
										</div>
										<p>
											{description}{" "}
										</p>
										</>
									
								);
							}
						)}
						<button className="h-11 flex justify-center items-center">
							<div className="text-base font-bold bg-slate-400">Supplier Information</div>{" "}
							<GoArrowRight className="w-4 h-4 ml-1" />
						</button>
					</div>

					<div
						className="h-10 flex justify-between hover:text-red-500 items-center border-t border-gray-600 w-full"
						onClick={() => {
							guide !== "hidden"
								? setGuide("hidden")
								: changeState(
										"hidden",
										"hidden",
										""
								  );
						}}
					>
						<div>Care Guide</div>
						<Image src={arrowDropDown} alt={"icon"} />
					</div>
					<div
						className={`${guide} text-left text-xs flex flex-col`}
					>
						<p className="text-wrap mt-3">
							You too can help the environment and
							make fashion more sustainable. Bring
							unwanted clothes or home textiles to
							any H&M store and they will be reworn,
							reused or recycled.
						</p>
						<p className="underline text-[10px]">
							Reab about how you can make your
							clothes last longer !
						</p>
						<div className="text-sm font-bold mb-2">
							Care instructions
						</div>
						<ul>
							{product?.articlesList[0]?.careInstructions.map(
								(e: string, index: number) => {
									return (
										<div
											className="mb-2"
											key={index}
										>
											<li>{e}</li>
										</div>
									);
								}
							)}
						</ul>
					</div>
				</section>
			</div>

			<section className="w-4/5 mx-auto mt-16">
				<h1 className="text-left font-bold" onClick={sendData}>
					Styled with
				</h1>
				{/* <div className="flex items-center relative mt-7">
					<MdChevronLeft
						className="opacity-50 hover:opacity-100 cursor-pointer "
						onClick={slideLeft}
						size={40}
					/>
					<div
						id="slider"
						className="w-full h-full overflow-x-scroll flex whitespace-nowrap scrollbar-hide scroll-smooth"
					>
						{product?.articlesList[0].styleWith.map(
							(
								{ code }: { code: string },
								index: string
							) => {
								useEffect(() => {
									async function styleWithData() {
										SetassociatedData(
											await fetchedData(
												"list",
												code,
												"",
												"",
												"products"
											)
										);
									}
									styleWithData();
								}, []);
								return (
									<Link
										key={index}
										className="mb-3 flex flex-col text-left w-52 text-sm cursor-pointer hover:scale-110 ease-in-out duration-300 max-w-none"
										href={`/productPage/${code}`}
									>
										<Image
											className="relative"
											src={
												associatedData
													?.articlesList[0]
													.galleryDetails[0]
													.baseUrl
											}
											width={300}
											height={450}
											alt="image"
										/>
										<FaHeart className="hover:text-red-500 bottom-[10%] right-[10%] translate-x-[50%] translate-y-[50%] w-3 h-3 absolute focus:text-red-500" />
										<p className="h-auto font-medium text-xs">
											{
												associatedData
													?.articlesList[0]
													.name
											}
										</p>
										<p className="font-medium text-xs line-through">
											{`${associatedData?.articlesList[0].whitePrice.currency}. ${associatedData?.articlesList[0].whitePrice.price}`}
											<div className="float-left">
												{" "}
												{`${
													associatedData
														?.articlesList[0]
														.redPrice
														.currency
												}.${" "}${
													associatedData
														?.articlesList[0]
														.redPrice
														.currency
												} `}
											</div>
										</p>
									</Link>
								);
							}
						)}
					</div>
					<MdChevronRight
						className="opacity-50 hover:opacity-100 cursor-pointer"
						onClick={slideRight}
						size={40}
					/>
				</div> */}
				{/* <CardLayout image={} name={undefined} price={product} alternate={""} codes={""} index={0}/> */}
			</section>
			
		</>
	);
}
// measurements={product?.measurements[0]}
// Concept={allArticle?.Concepts[0]}
// aggregatedSustainabilityCompositions={`${allArticle?.sustainabilityCompositions[1]?.materials[0].name}, ${allArticle?.sustainabilityCompositions[1]?.materials[0]?.percentage}`}
// compositions={allArticle?.compositions[1]?.materials}

// variantSizes={HomePageData?.results?.[indexNo]?.variantSizes}

{
	/* <div className="border ">
							<h5 className={SizeState}>Size:</h5>
							<li className={SizeState}>
								{variantSizes !== undefined
									? variantSizes.map(
											({
												filterCode,
											}, index:number) => {
												return (
													<ul className="  my-3 hover:bg-slate-500" key={index} >
														{
															filterCode
														}
													</ul>
												);
											}
									  )
									: ""}
							</li>
						</div> */
}
