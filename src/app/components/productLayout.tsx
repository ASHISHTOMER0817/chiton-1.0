"use client";
import Image from "next/image";
import heart from "@/../public/heart.svg";
import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from "react";
import information from "@/../public/information.svg";
import arrowDropDown from "@/../public/arrowDropDown.svg";
// import axios from "axios";

// export function ProductImages({ galleryDetails }: { galleryDetails: string }) {
// 	return (
// 		<>
// 			<Image src={galleryDetails} alt={"image..."} />
// 		</>
// 	);
// }

interface productLayoutTypes {
	name: string;
	price: string;
	colorDescription: string;
	allArticleImage: { galleryDetails: { baseUrl: string }[] }[];
	// variantSizes: { filterCode: string }[] | undefined;
	sendData: React.MouseEventHandler<HTMLButtonElement> ;
	description: string;
	// measurements: string;
	lengthCollection: string;
	sleeveLength: string;
	fits: string;
	presentationTypes: string;
	color: string;
	pattern: string;
	// Concept: string;
	whitePrice: string;
	articleCountryOfProduction: string;

	// compositions: { name: string; percentage: string }[];
	// aggregatedSustainabilityCompositions: string;
	materialDetails: { name: string; description: string }[];

	careInstructions: string[];
}

const ProductLayout: React.FC<productLayoutTypes> = ({
	name,
	price,
	colorDescription,
	allArticleImage,
	sendData,
	// variantSizes,
	description,
	// measurements,
	lengthCollection,
	sleeveLength,
	fits,
	presentationTypes,
	color,
	pattern,
	// Concept,
	whitePrice,
	articleCountryOfProduction,
	// compositions,
	// aggregatedSustainabilityCompositions,
	materialDetails,
	careInstructions,
}) => {
	const allDetails = [
		// {
		// 	heading: "size:",
		// 	value: measurements,
		// },
		{
			heading: "Length:",
			value: lengthCollection,
		},
		{
			heading: "Sleeve Length:",
			value: sleeveLength,
		},
		{
			heading: "fit:",
			value: fits,
		},
		{
			heading: "Description:",
			value: `${color}, ${pattern}`,
		},
		// {
		// 	heading: "Concept:",
		// 	value: Concept,
		// },
		{
			heading: "Price (MRP):",
			value: `${whitePrice} incl. of all taxes`,
		},
		{
			heading: "Country of production:",
			value: articleCountryOfProduction,
		},
		{
			heading: "Common generic name:",
			value: presentationTypes,
		},
		{
			heading: "Price (MRP):",
			value: whitePrice,
		},
		{
			heading: "Price (MRP):",
			value: whitePrice,
		},
	];

	const [fit, setFit] = useState("hidden");
	const [material, setMaterial] = useState("hidden");
	const [guide, setGuide] = useState("hidden");
	// const [SizeState, setSizeState] = useState("hidden");

	function changeState(fit: string, material: string, guide: string) {
		setFit(fit);
		setMaterial(material);
		setGuide(guide);
	}
	function showSizes() {
		// setSizeState("");

	}


// async function productCart () {
// 	try{
// 		const response = await axios.post('/api/users/productCart', productCode)
// 		console.log(`${productCode} has been posted`)
// 	}
// 	catch(error:any){
// 		console.log('productCart function not working', error.message)
// 	}
// }


	return (
		<>
			<div className="flex justify-between items-center">
				<h5 className="font-bold">{name}</h5>
				<Image src={heart} alt={"icon"} />
			</div>
			<h6 className="text-gray-600 font-extrabold">
				MRP inclusive of all taxes
			</h6>
			<h3>{price}</h3>
			<h6 className="text-gray-600 font-extrabold">{colorDescription}</h6>
			<div className="flex justify-start flex-wrap">
				{allArticleImage.map(({ galleryDetails }, index) => {
					const baseUrl = galleryDetails[0]?.baseUrl;
					return (
						<>
							<Image
							key={index}
								src={baseUrl}
								className="mr-2"
								width={50}
								height={70}
								alt={"image..."}
							/>
						</>
					);
				})}
			</div>
			<button
				className="h-11 font-extrabold bg-black text-white w-full my-7"
				onClick={sendData}
			>
				Add{" "}
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
			</button>
			<div className="flex justify-start">
				<Image
					src={information}
					alt={"icon"}
					className="mr-2"
				/>{" "}
				<h6 className="font-bold text-gray-600 ">
					Delivery time: 2-7 days
				</h6>
			</div>
			<h6 className="font-extrabold text-center my-5">
				Delivery and Payment
			</h6>

			{/* <Image src={""} alt={""} /> */}
			<p>(10 reviews)</p>
			
				<div className="h-10 flex justify-between items-center border-t border-gray-600 w-full" 
				onClick={() => fit !== 'hidden'? setFit('hidden'): changeState("", "hidden", "hidden")}>
					{" "}
					<div>Description and Fit</div>
					<Image src={arrowDropDown} alt={""} />
				</div>
				<div className={`${fit} text-left flex flex-col`}>
					<p>{description}</p>

					<h6>Size:</h6>
					{allDetails.map(({ heading, value }) => {
						return (
							<>
								<span className="font-medium">
									{heading}
								</span>
								<p>{value}</p>
							</>
						);
					})}
				</div>
			

			
				<div className="h-10 flex justify-between items-center border-t border-gray-600 w-full" onClick={() =>{ material !== 'hidden' ? setMaterial('hidden'): changeState("hidden", "", "hidden")}}>
					<div>Materials</div>
					<Image src={arrowDropDown} alt={""} />
				</div>
				<div className={`${material} text-left flex flex-col`}>
					<h4>Composition</h4>
					{/* <ul>
							{compositions.map(
								({ name, percentage }) => {
									return (
										<li>
											{name}
											{": "}
											{percentage}
										</li>
									);
								}
							)}{" "}
						</ul> */}
					<span className="font-medium"> Material: </span>
					{/* <p>
							{aggregatedSustainabilityCompositions}
						</p> */}
					<h4>Materials in this product explained</h4>

					{materialDetails.map(({ name, description }) => {
						return (
							<>
								<h6>{name} </h6>
								<p>{description} </p>
							</>
						);
					})}
				</div>
			

			
				<div className="h-10 flex justify-between items-center border-t border-gray-600 w-full" onClick={() => { guide !== 'hidden'? setGuide('hidden'): changeState("hidden", "hidden", "")}}>
					<div>Care Guide</div>
					<Image src={arrowDropDown} alt={"icon"} />
				</div>
				<div className={`${guide} text-left flex flex-col`}>
					<h4>Care instructions</h4>
					<ul>
						{careInstructions.map((e) => {
							return (
								<>
									<li>{e}</li>
								</>
							);
						})}
					</ul>
				</div>
			
		</>
	);
};

export default ProductLayout;
