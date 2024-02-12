"use client";
import React, { useEffect, useState } from "react";
import Header from "@/app/components/header";
import fetchedData from "../../components/fetchedData";
import Image from "next/legacy/image";
import arrowDropDown from "@/../public/arrowDropDown.svg";
import information from "@/../public/information.svg";
import heart from "@/../public/heart.svg";
import axios from "axios";
import Footer from "@/app/components/footer";

export default function Page({ params }: { params: { pid: string } }) {

	const [fit, setFit] = useState("hidden");
	const [material, setMaterial] = useState("hidden");
	const [guide, setGuide] = useState("hidden");

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
					"detail",
					params.pid,
					"",
					""
				);
				
				setProduct(data?.product);

				
				
			} catch (error) {
				
				console.error("Error fetching data:", error);
			}
		}

		fetchData();
	}, [params.pid]);




	const productDetails = {
		url: product?.articlesList[0]?.galleryDetails[0]?.baseUrl,
		name: product?.name,
		price: product?.articlesList[0]?.whitePrice !== undefined ? product?.articlesList[0]?.whitePrice.price: '',
		quantity: product?.articlesList[0]?.netQuantity !== undefined ? product?.articlesList[0]?.netQuantity: '',
		articleCode: product?.articlesList[0]?.code,
	}


	 async function sendData() {

		try{
			const response = await axios.post('/api/users/productPage', productDetails)
			 console.log( 'page.tsx --',productDetails)
			const message = await response.data.message
			if(response.data.success !== false) {
				console.log(message)

			}else{console.log(message)}
		}catch(error: any) {
			console.log('wasnt able to send data', error)
		}
	 }

	
	const allDetails = [
		{
			heading: "Length:",
			value: product?.lengthCollection[0]?.value[0],
		},
		{
			heading: "Sleeve Length:",
			value: product?.lengthCollection[1]?.value[0],
		},
		{
			heading: "fit:",
			value: product?.fits !== undefined? product?.fits[0]: '',
		},
		{
			heading: "Description:",
			value: `${product?.articlesList[0]?.color.text}, ${product?.articlesList[0]?.pattern}`,
		},
		{
			heading: "Price (MRP):",
			value: `${product?.whitePrice.price} incl. of all taxes`,
		},
		{
			heading: "Country of production:",
			value: product?.articlesList[0]?.countryOfProduction !== undefined ? product?.articlesList[0]?.countryOfProduction: product?.articlesList[0]?.articleCountryOfProduction,
		},
		{
			heading: "Common generic name:",
			value: product?.genericDescription,
		},
	];

	return(
		<>
			<Header />




			<div className="flex ">
				<div className="flex justify-around flex-wrap w-2/3">
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
										className="h-auto w-2/3 max-w-full"
										alt={
											"product-Image"
										}
									/>
								</>
							);
						}
					)}
				</div>

				<section className="w-1/3 m-4">
					
					<div className="flex justify-between items-center">
						<h5 className="font-bold">
							{product?.articlesList[0]?.name}
						</h5>
						<Image
							src={heart}
							alt={"icon"}
							
						/>
					</div>
					<h6 className="text-gray-600 font-extrabold">
						MRP inclusive of all taxes
					</h6>
					<h3>
						{
							product?.articlesList[0]?.whitePrice
								?.price
						}
					</h3>
					<h6 className="text-gray-600 font-extrabold">
						{product?.articlesList[0].colourDescription}
					</h6>
					<div className="flex justify-start flex-wrap">
						{product?.articlesList.map(
							({
								galleryDetails,
							}: {
								galleryDetails: {
									baseUrl: string;
								}[];
							}, index:number) => {
								const baseUrl =
									galleryDetails[0]
										?.baseUrl;
								return (
									<>
										<Image
										key={index}
											src={baseUrl}
											className="mr-2 h-auto"
											width={50}
											height={70}
											alt={
												"image..."
											}
										/>
									</>
								);
							}
						)}
					</div>
					<button
						className="h-11 font-extrabold bg-black text-white w-full my-7"
						onClick={sendData}
					>
						Add{" "}
						
					</button>
					<div className="flex justify-start">
						<Image
							src={information}
							alt={"icon"}
							className="mr-2"
							height={10}
							width={10}
						/>{" "}
						<h6 className="font-bold text-gray-600 ">
							Delivery time: 2-7 days
						</h6>
					</div>
					<h6 className="font-extrabold text-center my-5">
						Delivery and Payment
					</h6>

					
					<p>(10 reviews)</p>

					<div
						className="h-10 flex justify-between items-center border-t border-gray-600 w-full"
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
						<div>Description and Fit</div>
						<Image
							src={arrowDropDown}
							alt={""}
							
						/>
					</div>
					<div className={`${fit} text-left flex flex-col`}>
						<p>
							{
								product?.articlesList[0]
									?.description
							}
						</p>

						<h6>Size:</h6>
						{allDetails.map(
							({ heading, value }, index) => {
								return (
									<div key={index}>
										<span className="font-medium">
											{heading}
										</span>
										<p>{value}</p>
									</div>
								);
							}
						)}
					</div>

					<div
						className="h-10 flex justify-between items-center border-t border-gray-600 w-full"
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
						<div>Materials</div>
						<Image
							src={arrowDropDown}
							alt={""}
							
						/>
					</div>
					<div
						className={`${material} text-left flex flex-col`}
					>
						<h4>Composition</h4>
						<ul> 
							{ product?.articlesList[0]?.compositions === undefined ? '': product?.articlesList[0]?.compositions[0].materials.map(
								({ name, percentage }:{ name:string, percentage:string}, index: number) => {
									return (
										<li key={index}>
											{name}
											{": "}
											{percentage}
										</li>
									);
								}
							)}{" "}
						</ul>
						<span className="font-medium">
							{" "}
							Material:{" "}
						</span>
						<p>
							{product?.articlesList[0]?.aggregatedSustainabilityCompositions !== undefined ?  ` ${product?.articlesList[0]?.aggregatedSustainabilityCompositions[0]?.sustainabilityName}-- ${product?.articlesList[0]?.aggregatedSustainabilityCompositions[0]?.sustainabilityPercentage}`: ''  }
						</p>
						<h4>Materials in this product explained</h4>

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
									<div key={index}>
										<h6 key={index}>
											{name}{" "}
										</h6>
										<p>
											{description}{" "}
										</p>
									</div>
								);
							}
						)}
					</div>

					<div
						className="h-10 flex justify-between items-center border-t border-gray-600 w-full"
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
						<Image
							src={arrowDropDown}
							alt={"icon"}
							
						/>
					</div>
					<div
						className={`${guide} text-left flex flex-col`}
					>
						<h4>Care instructions</h4>
						<ul>
							{product?.articlesList[0]?.careInstructions.map(
								(e: string, index: number) => {
									return (
										<div key={index}>
											<li>{e}</li>
										</div>
									);
								}
							)}
						</ul>
					</div>
				</section>
			</div>

			<section className="w-3/5 mx-auto">
				<h1 className="text-left" onClick={sendData}>Styled with</h1>
			</section>
			<Footer/>
		</>
	);
}
// measurements={product?.measurements[0]}
// Concept={allArticle?.Concepts[0]}
// aggregatedSustainabilityCompositions={`${allArticle?.sustainabilityCompositions[1]?.materials[0].name}, ${allArticle?.sustainabilityCompositions[1]?.materials[0]?.percentage}`}
// compositions={allArticle?.compositions[1]?.materials}

// variantSizes={HomePageData?.results?.[indexNo]?.variantSizes}



{/* <div className="border ">
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
						</div> */}
