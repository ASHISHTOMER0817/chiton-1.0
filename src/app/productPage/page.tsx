import React, { useContext } from "react";
import Header from "@/app/components/header";
import fetchedData from "../components/fetchedData";
// import { UserContext } from "../components/abc";
// import productContext from "../components/productContext";
import ProductLayout, { ProductImages } from "../components/productLayout";

export default async function page({user, indexNo}:{user:string, indexNo:number}) {
	// const { user, indexNo } = productContext();
	// const code = JSON.stringify(user);

	interface HomePage {
		results?: {
			galleryImages: {
				url: string,
				baseUrl: string
			}[];
			allArticleImages: string[];
			variantSizes: {
				filterCode: string
			}[]
		}[];
	}

	const ProductData = await fetchedData("detail", user, "", "");
	const HomePageData: HomePage = await fetchedData("detail", "", "0", "30");

	//  const galleryDetails = HomePageData?.results?[indexNo]?.galleryImages
	const galleryDetails = (
		HomePageData?.results?.[indexNo] as {
			galleryImages: { url: string; baseUrl: string }[]
		}
	)?.galleryImages;
	const allArticleImg =  (
		HomePageData?.results?.[indexNo] as {
			allArticleImages: string[]
		}
	)?.allArticleImages;




	const product = ProductData?.product;
	const allArticle = ProductData?.product?.articlesList;

	return (
		<div>


			{galleryDetails[0]?.url}
			{/* <div>
				<Header />
				{galleryDetails.map(({ baseUrl }) => {
					return (
						<>
							<ProductImages
								galleryDetails={baseUrl}
							/>
						</>
					);
				})}
			</div> */}
			<section>
				<ProductLayout
					name={allArticle[0]?.name}
					price={allArticle[0]?.redPrice?.price}
					colorDescription={allArticle[0]?.colourDescription}
					allArticleImage={allArticleImg}
					description={allArticle[0]?.description}
					measurements={[product?.measurements[1], product?.measurements[1]]}
					lengthCollection={product?.lengthCollection[0]?.value[0]}
					sleeveLength={product?.lengthCollection[1]?.value[0]}
					fits={product?.fits[0]}
					// styleCollection={}
					presentationTypes={product?.presentationTypes}
					color={allArticle[0]?.color.text}
					pattern={allArticle[0]?.pattern}
					Concept={allArticle[0]?.Concepts[0]}
					whitePrice={allArticle[0]?.redPrice.price}
					articleCountryOfProduction={allArticle[0]?.countryOfProduction}
					compositions={allArticle[0]?.compositions[1]?.materials}
					aggregatedSustainabilityCompositions={`${allArticle[0]?.sustainabilityCompositions[1]?.materials[0].name}, ${allArticle[0]?.sustainabilityCompositions[1]?.materials[0]?.percentage}`}
					materialDetails={allArticle[0]?.materialDetails}
					careInstructions={allArticle[0]?.careInstructions} 
					variantSizes={HomePageData?.results?.[indexNo]?.variantSizes}				
					/>
			</section>
		</div>
	);
}
