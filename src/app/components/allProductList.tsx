"use client";
// import Link from "next/link";
import React, { useEffect, useState } from "react";
import CardLayout from "./cardlayout";
import fetchedData from "./fetchedData";

interface Products {
	results: {
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
		defaultArticle: {
			normalPicture: { baseUrl: string }[];
			code: string;
		};
		rgbColors: string[];
		articleColorNames: string[];
	}[];
}

const AllProductList = ({ clothProperty }: { clothProperty: string }) => {
	const [data, setData] = useState<Products>();

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
				return;
			} catch (error) {
				console.log(error);
			}
		}
		getData();
	}, [clothProperty, data?.results?.length]);

	return (
		<div className="grid grid-cols-4 gap-x-5 gap-y-2 mt-20">
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
								rgbColors,
								articleColorNames,
							},
							index: number
						) => {
							return (
								<CardLayout
									key={index}
									defaultImage={
										defaultArticle
											.normalPicture[0]
											.baseUrl
									}
									regularImage={
										images[0].baseUrl
									}
									index={index}
									alternate={
										images.length > 0
											? images[0]
													?.baseUrl
											: ""
									}
									name={name}
									price={
										price.formattedValue
									}
									code={
										articles[0]?.code ||
										defaultArticle?.code
									}
									clothColor={rgbColors}
									colorName={
										articleColorNames[0]
									}
								/>
							);
						}
				  )}
		</div>
	);
};

export default AllProductList;
