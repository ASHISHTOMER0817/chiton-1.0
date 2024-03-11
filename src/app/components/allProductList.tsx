"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CardLayout from "./cardlayout";
import fetchedData from "./fetchedData";

interface Products {

      results:{
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
	rgbColors: string[];}[]
}

const AllProductList = ({clothProperty}:{clothProperty:string}) => {
      const [data, setData] = useState<Products>();

	const [imageChange, setImageChange] = useState();

      console.log(imageChange)

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
                        setImageChange(Array(data?.results?.length || 0).fill(false))

				console.log(response);

				return;
			} catch (error) {
				console.log(error);
			}
		}
		getData();
	}, [clothProperty]);

	const onMouseEnter = (index: number) => {
		setImageChange((prevState) => prevState.map((state, i) => i === index ? true : state )
		);
	};

	const onMouseLeave = (index: number) => {
            setImageChange((prevState) => prevState.map((state, i) => i === index ? false : state )
		);	};

            console.log(imageChange)

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
							},
							index: number
						) => {
							// const image = images[0]?.baseUrl;
							const actualPrice: string =
								price.formattedValue;
							const alternate =
								images.length > 0
									? images[0]?.baseUrl
									: "";

							const code = articles[0]?.code;
							console.log(rgbColors);
							const defaultImage =
								defaultArticle.normalPicture[0]
									.baseUrl;
							const regularImage =
								images[0].baseUrl;
							const arrOfImages = [
								defaultImage,
								regularImage,
							];

							return (
								<Link
									key={index}
									href={`/productPage/${code}`}
									className="mb-3 mr-3 flex flex-col flex-wrap  text-left text-sm cursor-pointer "
									onMouseEnter={() =>
										onMouseEnter(index)
									}
									onMouseLeave={() =>
										onMouseLeave(index)
									}
								>
									<CardLayout
										index={index}
										image={
											imageChange
												? arrOfImages[1]
												: arrOfImages[0]
										}
										alternate={
											alternate
										}
										name={name}
										price={actualPrice}
										codes={code}
										// favorites={() => {
										// 	favoriteClothes(
										// 		name,
										// 		images[0]
										// 			?.baseUrl,
										// 		actualPrice,

										// 		"1",
										// 		code
										// 	);
										// }}
										clothColor={
											rgbColors
										}
									/>
								</Link>
							);
						}
				  )}
		</div>
	);
};

export default AllProductList;