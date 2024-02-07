import React, { useContext } from "react";
import Header from "@/app/components/header";
import fetchedData from "../../components/fetchedData";
import Image from "next/image";
import ProductLayout from "../../components/productLayout";
import axios from "axios";

export default async function page({ params }: { params: { pid: string } }) {


	const ProductData = await fetchedData("detail", params.pid, "", "");

	const product = ProductData?.product;
	const allArticle = ProductData?.product?.articlesList[0]
	console.log(allArticle)



	

	const productDetails = {
		url: allArticle?.galleryDetails[0]?.baseUrl,
		name: allArticle?.name,
		price: allArticle?.whitePrice?.price,
		quantity: allArticle?.netQuantity,
		articleCode: allArticle?.code,
	}
 async function sendData() {
	'use server'
	try{

		const response = await axios.post('/api/users/productPage', productDetails)
		const message = await response.data.message
		if(response.data.success !== false) {
			console.log(message)
			
		}else{console.log(message)}
	}catch(error: any) {
		console.log('wasnt able to send data', error)
	}
 }

       


	return (
		<>
		<Header/>
		<div className="flex ">
			<div className="flex justify-around flex-wrap w-2/3">
				{allArticle.galleryDetails.map(({baseUrl}: {baseUrl:string})=> {


					return (
						<>
						<Image src={baseUrl} width={479} height={718} alt={"product-Image"}/>
						</>
					)
				})}

			</div>
			<section className="w-1/3 m-4">
				<ProductLayout
						name={allArticle?.name}
						price={product?.whitePrice?.price}
						colorDescription={allArticle?.colourDescription}
						allArticleImage={product?.articlesList}
						description={allArticle?.description}
						lengthCollection={product?.lengthCollection[0]?.value[0]}
						sleeveLength={product?.lengthCollection[1]?.value[0]}
						fits={product?.fits[0]}
						presentationTypes={product?.presentationTypes}
						color={allArticle?.color.text}
						pattern={allArticle?.pattern}
						whitePrice={product?.whitePrice.price}
						articleCountryOfProduction={allArticle?.countryOfProduction}
						materialDetails={allArticle?.materialDetails}
						careInstructions={allArticle?.careInstructions} sendData={sendData}					/>
			</section>
		</div>
		<div className="w-3/5 mx-auto">
			<h1 className="text-left">
				Styled with
			</h1>
			
		</div>
		</>
	);
}
// measurements={product?.measurements[0]}
// Concept={allArticle?.Concepts[0]}
// aggregatedSustainabilityCompositions={`${allArticle?.sustainabilityCompositions[1]?.materials[0].name}, ${allArticle?.sustainabilityCompositions[1]?.materials[0]?.percentage}`}
// compositions={allArticle?.compositions[1]?.materials}

// variantSizes={HomePageData?.results?.[indexNo]?.variantSizes}				

