"use client";
import React, { useEffect, useState } from "react";
import Header from "@/app/components/header";
import fetchedData from "../../components/fetchedData";
import Image from "next/legacy/image";
import ProductLayout from "../../components/productLayout";
import axios from "axios";

export default function Page({ params }: { params: { pid: string } }) {
	const [product, setProduct] = useState<any>();
	// const [allArticle, setAllArticle] = useState<any>();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchedData(
					"detail",
					params.pid, 
					"",
					""
				);
				//     const setproduct = data?.product;
				setProduct(data?.product);
				console.log(data?.product)

				//     const allArticle = data?.product?.articlesList[0];
				//     console.log(allArticle);
			} catch (error) {
				// Handle errors if any
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	// const productDetails = {
	// 	url: allArticle?.galleryDetails[0]?.baseUrl,
	// 	name: allArticle?.name,
	// 	price: allArticle?.whi tePrice?.price,
	// 	quantity: allArticle?.netQuantity,
	// 	articleCode: allArticle?.code,
	// }
	//  async function sendData() {

	// 	try{

	// 		const response = await axios.post('/api/users/productPage', productDetails)
	// 		const message = await response.data.message
	// 		if(response.data.success !== false) {
	// 			console.log(message)

	// 		}else{console.log(message)}
	// 	}catch(error: any) {
	// 		console.log('wasnt able to send data', error)
	// 	}
	//  }

	return (
		<>
			<Header />

			<form>{}</form>
			<div className="flex ">
				<div className="flex justify-around flex-wrap w-2/3">
					{product?.articlesList[0]?.galleryDetails.map(
						(
							{ baseUrl }: { baseUrl: string },
							index: number
						) => {
							return (
								<>
									<Image
										placeholder="blur"
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
					<ProductLayout
						name={product?.articlesList[0]?.name}
						price={product?.whitePrice?.price}
						colorDescription={
							product?.articlesList[0].colourDescription
						}
						allArticleImage={product?.articlesList}
						description={
							product?.articlesList[0]?.description
						}
						lengthCollection={
							product?.lengthCollection[0]?.value[0]
						}
						sleeveLength={
							product?.lengthCollection[1]?.value[0]
						}
						fits={product?.fits[0]}
						presentationTypes={
							product?.presentationTypes
						}
						color={product?.articlesList[0]?.color.text}
						pattern={product?.articlesList[0]?.pattern}
						whitePrice={product?.whitePrice.price}
						articleCountryOfProduction={
							product?.articlesList[0]
								?.countryOfProduction
						}
						materialDetails={
							product?.articlesList[0]
								?.materialDetails
						}
						careInstructions={
							product?.articlesList[0]
								?.careInstructions
						}
						productCode={product?.articlesList[0]?.code}
						baseUrl={
							product?.articlesList[0]
								?.galleryDetails[0]?.baseUrl
						}
					/>
				</section>
			</div>
			<div className="w-3/5 mx-auto">
				<h1 className="text-left">Styled with</h1>
			</div>
		</>
	);
}
// measurements={product?.measurements[0]}
// Concept={allArticle?.Concepts[0]}
// aggregatedSustainabilityCompositions={`${allArticle?.sustainabilityCompositions[1]?.materials[0].name}, ${allArticle?.sustainabilityCompositions[1]?.materials[0]?.percentage}`}
// compositions={allArticle?.compositions[1]?.materials}

// variantSizes={HomePageData?.results?.[indexNo]?.variantSizes}
