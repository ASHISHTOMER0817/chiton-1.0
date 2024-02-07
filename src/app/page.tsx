import Header from "./components/header";
import DeliveryStats from "./components/deliveryStats";
import fetchedData from "@/app/components/fetchedData";
import Image from "next/image";
import menHoodie from "@/../public/menHoodie.jpg";
import CardLayout from "./components/cardlayout";
import Link from "next/link";
// import ProductContext from "./components/productContext";

export default async function Home() {
	const categoriesCard = [
		{
			link: menHoodie,
			Gender: "Men",
			Name: "Hoodies & Sweatshirts",
		},
		{
			link: menHoodie,
			Gender: "Ladies",
			Name: "Trousers",
		},
		{
			link: menHoodie,
			Gender: "Ladies",
			Name: "Sweaters & Cardigans",
		},
		{
			link: menHoodie,
			Gender: "Ladies",
			Name: "Clothes",
		},
		{
			link: menHoodie,
			Gender: "Ladies",
			Name: "Trousers",
		},
		{
			link: menHoodie,
			Gender: "Men",
			Name: "Jackets & Coats",
		},
	];
	const data = await fetchedData('list', '', '0', '30')

	return (
		<div className=" ">
			<Header />

			<div className="flex flex-col items-center">
				<div className="w-3/4 flex flex-col items-center ">
					<div className="flex justify-between">
						<DeliveryStats/>
					</div>
					<div
						className="bg-no-repeat bg-center bg-cover relative text-center"
						style={{
							backgroundImage: `url('https://images.pexels.com/photos/1450114/pexels-photo-1450114.jpeg'); height: 750px; width: 1140px`,
						}}
					>
						<div className=" mt-96 border border-purple-200 text-center inline-block">
							<h1 className=" text-white">
								Attention set on fancy joggers
							</h1>
							<h5 className=" text-white">
								keep it coordinated, comfy and
								casual
							</h5>
							<button className=" bg-white text-black font-extrabold">
								Look here
							</button>
						</div>
					</div>
					<div className="text-black font-extrabold underline">
						Popular Categories
					</div>
					<div className="flex justify-between w-full">
						{categoriesCard.map(
							({ link, Gender, Name }) => {
								return (
									<div className="flex flex-col  w-24">
										<Image
											src={link}
											alt=""
										/>
										<div className="text-gray-500">
											{Gender}
										</div>
										<div className="text-wrap">
											{Name}
										</div>
									</div>
								);
							}
						)}
					</div>
					<div
						className="bg-no-repeat bg-center relative text-center"
						style={{
							backgroundImage: `url('https://images.pexels.com/photos/9853460/pexels-photo-9853460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'); height: 750px; width: 1140px `,
						}}
					>
						<div className=" mt-96  text-center inline-block">
							<h1 className=" text-white">
								Attention set on fancy joggers
							</h1>
							<h5 className=" text-white">
								keep it coordinated, comfy and
								casual
							</h5>
							<button className=" bg-white text-black font-extrabold">
								Look here
							</button>
						</div>
					</div>
					<h4 className="w-full text-left">New Arrivals</h4>
					<div className="flex flex-wrap justify-between ">
						{data.results.map(
							({	name,
								images,
								price,
								articles
							}: {name: String, images:{url: string, baseUrl: string}[], price: {formattedValue: String}, articles:{code: string}[] }, index: number) => {
								const image = images.length > 0 ? images[0]?.url: '';
								const actualPrice: String = price.formattedValue;
								const alternate = images.length > 0 ? images[0]?.baseUrl: '';

								const code = articles[0]?.code
								

								return (
									<div
										className="flex flex-col text-left w-52 text-sm"
									> <Link  href={`/productPage/${code}`}>
										<CardLayout
											index= {index}
											key={index}
											image={image}
											alternate={alternate}
											name={name}
											price={actualPrice}
											codes={code}
											/>
											</Link>
									</div>
								);
							}
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
