'use client'
import React, { useEffect, useState } from "react";
import fetchedData from "./fetchedData";

interface listType {
	CatName: string;
	CategoriesArray: {
		CatName: string;
		tagCodes: string[];
	}[];
}

const CategoryList = ({category, change_sub_category}:{category:string, change_sub_category:(CatName:string,
      tagCodes:string[])=>void}) => {
	const [list, setList] = useState<[listType]>();
     

	useEffect(() => {
		async function getData() {
			try {
				const productList = await fetchedData(
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
						CategoriesArray: [listType];
					}) => {
						if (CatName === category) {
							return setList(CategoriesArray);
						} else {
							console.log(
								"there is no tagcode inside"
							);
						}
					}
				);

				return;
			} catch (error) {
				console.log(error);
			}
		}
		getData();
	}, [category]);


	return (
		<>
			<section className="sticky ml-10">
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
										key={index}
										className=" "
									>
										<div className="font-bold mt-10 text-[15px] ">
											{CatName}
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
																	change_sub_category(
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
			</section>
		</>
	);
};

export default CategoryList;
