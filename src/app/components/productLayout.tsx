"use client";
import Image from "next/image";
import heart from "@/../public/heart.svg";
import { useState } from "react";

export function ProductImages({ galleryDetails }: { galleryDetails: string }) {
	return (
		<>
			<Image src={galleryDetails} alt={"image..."} />
		</>
	);
}

interface productLayoutTypes {
	name: string;
	price: string;
	colorDescription: string;
	allArticleImage: string[];
	variantSizes: { filterCode: string }[] | undefined;
	description: string;
	measurements: string[];
	lengthCollection: string;
	sleeveLength: string;
	fits: string;
	// styleCollection: string;
	presentationTypes: string;
	color: string;
	pattern: string;
	Concept: string;
	whitePrice: string;
	articleCountryOfProduction: string;

	compositions: { name: string; percentage: string }[];
	aggregatedSustainabilityCompositions: string;
	materialDetails: { name: string; description: string }[];

	careInstructions: string[];
}

const ProductLayout: React.FC<productLayoutTypes> = ({
	name,
	price,
	colorDescription,
	allArticleImage,
	variantSizes,
	description,
	measurements,
	lengthCollection,
	sleeveLength,
	fits,
	// styleCollection,
	presentationTypes,
	color,
	pattern,
	Concept,
	whitePrice,
	articleCountryOfProduction,
	compositions,
	aggregatedSustainabilityCompositions,
	materialDetails,
	careInstructions,
}) => {
	const allDetails = [
		{
			heading: "size:",
			value: `${measurements[0]}, ${measurements[1]}`,
		},
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
		// {
		// 	heading: "Neckline:",
		// 	value: styleCollection,
		// },
		{
			heading: "Description:",
			value: `${color}, ${pattern}`,
		},
		{
			heading: "Concept:",
			value: Concept,
		},
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
	const [SizeState, setSizeState] = useState("hidden");

	function changeState(fit: string, material: string, guide: string) {
		setFit(fit);
		setMaterial(material);
		setGuide(guide);
	}
	function showSizes() {
		setSizeState("");
	}

	return (
		<>
			<div>
				<div>
					<h4>{name}</h4>
					<Image src={heart} alt={"icon"} />
				</div>
				<p>MRP inclusive of all taxes</p>
				<h3>{price}</h3>
				<div>{colorDescription}</div>
				{allArticleImage.map((img) => {
					return (
						<>
							<Image src={img} alt={"image..."} />
						</>
					);
				})}
				<div>
					{/* <Image src={""} alt={""} />{" "} */}
					<p>Delivery time: 2-7 days</p>
					<button onClick={() => showSizes}>
						Add{" "}
						<div className="border ">
							<h5 className={SizeState}>Size:</h5>
							<li className={SizeState}>
								{variantSizes !== undefined
									? variantSizes.map(
											({
												filterCode,
											}) => {
												return (
													<ul className="  my-3 hover:bg-slate-500">
														{
															filterCode
														}
													</ul>
												);
											}
									  )
									: ""}
							</li>
						</div>
					</button>
				</div>
				<p>Delivery and Payment</p>

				{/* <Image src={""} alt={""} /> */}
				<p>(10) reviews</p>
				<button
					className="border border-gray-600 border-l-0 border-r-0"
					onClick={() =>
						changeState("", "hidden", "hidden")
					}
				>
					Description and Fit
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
				</button>

				<button
					className="border border-gray-600 border-l-0 border-r-0"
					onClick={() =>
						changeState("hidden", "", "hidden")
					}
				>
					Materials
					<div
						className={`${material} text-left flex flex-col`}
					>
						<h4>Composition</h4>
						<ul>
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
						</ul>
						<span className="font-medium">
							{" "}
							Material:{" "}
						</span>
						<p>
							{aggregatedSustainabilityCompositions}
						</p>
						<h4>Materials in this product explained</h4>

						{materialDetails.map(
							({ name, description }) => {
								return (
									<>
										<h6>{name} </h6>
										<p>
											{description}{" "}
										</p>
									</>
								);
							}
						)}
					</div>
				</button>

				<button
					className="border border-gray-600 border-l-0 border-r-0"
					onClick={() =>
						changeState("hidden", "hidden", "")
					}
				>
					Care Guide
					<div
						className={`${guide} text-left flex flex-col`}
					>
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
				</button>
			</div>
		</>
	);
};

export default ProductLayout;
