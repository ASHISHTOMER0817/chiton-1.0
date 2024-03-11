'use client'
import React, { useEffect, useState } from "react";
import CardLayout from "./cardlayout";
import Link from "next/link";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import fetchedData from "./fetchedData";

interface dataType {
	results: {
		name: string;
		images: { url: string; baseUrl: string }[];
		price: { formattedValue: string };
		articles: { code: string }[];
		rgbColors: string[];
	}[];
}

const slideLeft = () => {
	let slider = document.getElementById("slider");
	slider!.scrollLeft = slider!.scrollLeft - 500;
};
const slideRight = () => {
	let slider = document.getElementById("slider");
	slider!.scrollLeft = slider!.scrollLeft + 500;
};

const HomePageCarousel = () => {
      const [data, setData] = useState<dataType>();


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
		<>
			<div className="relative flex items-center mt-7">
				<MdChevronLeft
					className="opacity-50 hover:opacity-100 cursor-pointer "
					onClick={slideLeft}
					size={40}
				/>
				<div
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
										rgbColors: string[];
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
										<div key={index}>
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
				</div>
				<MdChevronRight
					className="opacity-50 hover:opacity-100 cursor-pointer"
					onClick={slideRight}
					size={40}
				/>
			</div>
		</>
	);
};

export default HomePageCarousel;
