"use client";
import Logo from "../../../public/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import searchIcon from "@/../public/search-icon.svg";
import selectPatientIcon from "@/../public/select-patient-icon.svg";
import favorites from "@/../public/favorites.svg";
import shoppingBag from "@/../public/shopping-bag.svg";
import { useEffect, useState } from "react";
import fetchedData from "./fetchedData";

// import Login from '../login/page'

export default function Header() {
	const [variety, setVariety] = useState("");
	const [group, setGroup] = useState();
	const [articles, setArticles] = useState("hidden");
	const [trigger, setTrigger] = useState(false);
	const [render, setRender] = useState(false);
	const [initialRender, setInitialRender] = useState(false)
	const navbar = [
		"Women",
		"Divided",
		"Men",
		"Baby",
		"Kids",
		"H&M HOME",
		"Beauty",
		"Sport",
	];

	useEffect(() => {
		async function fetchNewData() {
			try {
				const response = await fetchedData(
					"list",
					"",
					"",
					"",
					"categories"
				);
				 
				setGroup(response)
				// setRender(true);
				// setArticles("hidden");
			} catch (error) {
				return console.error("yes this is error", error);
			}
		}
		fetchNewData();
	}, []);
	
	function proposition () {
		for (let i= 0; i<group.length-2; i++) {
			if(group[i]?.CatName === 'Sport') {
				return setGroup(data[i])
			}
		}
		setInitialRender(true)
	}



	// function triggerfetchedData() {
	// 	setTrigger((prevTrigger) => !prevTrigger);
	// 	setArticles("");
	// }

	// function triggerWindowCollapse() {
	// 	articles !== "hidden" ? setArticles("hidden") : "";
	// }



	return (
		<div>
			<button onClick={proposition}>trigger</button>
			<div>{ initialRender == true? '' : group?.CategoriesArray !== undefined ? group?.CategoriesArray[0]?.CategoryValue : '' }</div>

			{/* <section
				onMouseEnter={() => {
					setArticles("");
				}}
				className={`w-2/4 mx-auto border-t-4 ${articles} border-t-black`}
			>
				{group.CategoriesArray.map(
					({ CategoryValue }, index) => {
						console.log(group.CategoriesArray[index])
						return (
							<>
								<tr
									key={index}
									className="my-8"
								>
									{CategoryValue}
								</tr>
							</>
						);
					}
				)}
			</section> */}
		</div>

























		// 	<header className=" bg-gray-200 ">
		// 		<div className="flex justify-between text-sm">
		// 			<Image
		// 				priority={true}
		// 				quality={100}
		// 				width={150}
		// 				className="max-w-40 h-auto"
		// 				src={Logo}
		// 				alt="Logo"
		// 			/>
		// 			<nav className="flex items-center">
		// 				<Image
		// 					src={selectPatientIcon}
		// 					width={19}
		// 					className="h-auto"
		// 					alt="icon"
		// 				/>
		// 				<div className="mr-3">
		// 					<Link href={"/login"}> login </Link>
		// 				</div>
		// 				<Image
		// 					src={favorites}
		// 					width={50}
		// 					className="h-auto -mr-3"
		// 					alt="icon"
		// 				/>
		// 				<div className="mr-3 hover:cursor-pointer">
		// 					Favorites
		// 				</div>
		// 				<Image
		// 					src={shoppingBag}
		// 					width={21}
		// 					className="h-auto"
		// 					alt="icon"
		// 				/>
		// 				<div className="mr-3">
		// 					{" "}
		// 					<Link href={"@/app/shopping"}>
		// 						Shopping bag
		// 					</Link>
		// 				</div>
		// 			</nav>
		// 		</div>
		// 		<div className="flex items-center sm:flex-col">
		// 			<ul className="flex font-semibold text-sm justify-evenly my-3 ml-auto w-1/3   sm:flex sm:flex-col sm:items-center sm:justify-normal sm:mx-auto sm:h-2/4    ">
		// 				{navbar.map((e, index) => {
		// 					const handleMouseEnter = (category) => {
		// 						setVariety(category);
		// 						triggerfetchedData();
		// 					};
		// 					// setVariety(e);
		// 					return (
		// 						<>
		// 							<li
		// 								onMouseEnter={()=> {triggerfetchedData(), handleMouseEnter(e)}

		// 								}
		// 								onMouseLeave={
		// 									triggerWindowCollapse
		// 								}
		// 								className="hover:underline underline-offset-4 my-1"
		// 								key={index}
		// 							>
		// 								{e}
		// 							</li>
		// 						</>
		// 					);
		// 				})}
		// 			</ul>
		// 			<search className="flex border-b border-b-gray-700 ml-auto h-fit sm:w-1/3 sm:mr-0 ">
		// 				<Image
		// 					src={searchIcon}
		// 					alt="icon"
		// 					className="h-auto"
		// 				/>
		// 				<input
		// 					className=" text-sm bg-gray-200 focus:outline-none"
		// 					placeholder="Search..."
		// 				/>
		// 			</search>
		// 		</div>
		// 		<section
		// 			onMouseEnter={() => {
		// 				setArticles("");
		// 			}}
		// 			className={`w-2/4 mx-auto border-t-4 ${articles} border-t-black`}
		// 		>
		// 			{group.CategoriesArray.map(
		// 				({ CategoryValue, CategoriesArray }, index) => {
		// 					return (
		// 						<>
		// 							<table key={index}>
		// 								<thead>
		// 									<tr className="my-8">
		// 										{" "}
		// 										{
		// 											CategoryValue
		// 										}{" "}
		// 									</tr>
		// 								</thead>
		// 								<tbody>
		// 									{CategoriesArray.map(
		// 										(
		// 											{
		// 												CategoryValue,
		// 											},
		// 											index
		// 										) => {
		// 											return (
		// 												<>
		// 													<tr
		// 														key={
		// 															index
		// 														}
		// 														className="my-5 hover:underline underline-offset-4"
		// 													>
		// 														{
		// 															CategoryValue
		// 														}
		// 													</tr>
		// 												</>
		// 											);
		// 										}
		// 									)}
		// 								</tbody>
		// 							</table>
		// 						</>
		// 					);
		// 				}
		// 			)}
		// 		</section>
		// 	</header>
	);
}
