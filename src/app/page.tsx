import Header from "./components/header";
import DeliveryStats from "./components/deliveryStats";
import fetchedData from "@/app/components/fetchedData";
import Image from "next/image";
import menHoodie from "@/../public/menHoodie.jpg";
import CardLayout from "./components/cardlayout";
import Link from "next/link";
import Footer from "./components/footer";
// import ProductContext from "./components/productContext";

export default async function Page() {
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

			<div className="">
				<div className="w-2/3 m-auto ">
					<div className="flex justify-around text-xs mb-3 mt-5 sm:flex-col sm:text-nowrap sm:text-center sm:mb-5">
						<DeliveryStats/>
					</div>
					<div
						className="bg-no-repeat bg-center bg-cover relative text-center "
						style={{
							backgroundImage: `url('https://images.pexels.com/photos/1450114/pexels-photo-1450114.jpeg'); height: 750px; width: 75%; margin: auto`,
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
					<h2 className="text-black font-extrabold underline mt-5 mb-3">
						Popular Categories
					</h2>
					<div className="flex justify-around w-full text-sm m-5">
						{categoriesCard.map(
							({ link, Gender, Name }, index) => {
								return (
									<div key={index} className="flex flex-col  w-24 ">
										<Image
										className=" sm:h-36 sm:w-auto"
										// height={144}
										width={94}
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
						className="bg-no-repeat bg-center relative text-center "
						style={{
							backgroundImage: `url('https://images.pexels.com/photos/9853460/pexels-photo-9853460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'); height: 750px; width: 75%; margin: auto `,
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
					<h4 className="text-black font-extrabold underline mt-5 mb-3">New Arrivals</h4>
					<div className="flex flex-wrap justify-between ">
						{data?.results.map(
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
									<div key={index}
										className="flex flex-col text-left w-52 text-sm"
									> <Link  href={`/productPage/${code}`} className="mb-3">
										<CardLayout
											index= {index}
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
			<Footer/>
		</div>
	);
}
