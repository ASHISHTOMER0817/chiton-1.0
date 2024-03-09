'use client'

import Logo from "../../../public/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import searchIcon from "@/../public/search-icon.svg";
import selectPatientIcon from "@/../public/select-patient-icon.svg";
import favorites from "@/../public/favorites.svg";
import shoppingBag from "@/../public/shopping-bag.svg";
import { useEffect, useState } from "react";
import fetchedData from "./fetchedData";
import Login from "./login"
import Member from "./member"
import { useRouter } from "next/navigation";

export default function Header() {
	const [variety, setVariety] = useState("");
	const [group, setGroup] = useState();
	const [articles, setArticles] = useState("hidden");
	const [trigger, setTrigger] = useState(false);
	const [render, setRender] = useState(false);
	const [initialRender, setInitialRender] = useState(false)
	const [login, setLogin] = useState(false)
	const[member, setMember] = useState(false)
	const [search, setSearch] = useState('')
	const router =useRouter()
	
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
					"categories",
					"list",
					"",
					"",
					"",""
				);
				for(let i= 0; i< response.length -1;i++ ){
					if (response[i].CatName === variety){
						console.log("the response i is: ", response[i]);
						setGroup(response[i])
						return;
					}
				}
			} catch (error) {
				 console.log("yes this is error", error);
			}
		}
		if(trigger) {

			fetchNewData();
		}
	}, [variety, trigger]);    {/*  variety could be a mistake here*/}
	

	function triggerfetchedData() {
		setTrigger(true)
		setArticles("");
	}

	function triggerWindowCollapse() {
		articles !== "hidden" ? setArticles("hidden") : "";
		setTrigger(false);
	}

	function toggleLogin () {
		setLogin(true)
		
	}
	function toggleMember () {
		setMember(true)
		setLogin(false)
	}
	function LoginWindowDown() {
		setLogin(false)
	}
	function memberwindowDown() {
		setMember(false)
		setLogin(true)
	}
	function memberWindowCollapse() {
		setMember(false)
	}

	function SearchIncludes () {
		for(let i=0; i< navbar.length; i++){
			const category = navbar[i].toLowerCase
			if(search.includes(category)){
				router.push(`/allProduct/Men/men_jeans/Jeans}`)
				
			}
		}
	}

	return (

			<header className={`bg-gray-200 border ${trigger?'border-b-2 border-b-black': ''}`}>
				<Login classList={login} overlay={LoginWindowDown} memberOverlay={toggleMember}/>
				<Member classList={member} overlay={memberWindowCollapse} LoginOverlay={memberwindowDown}/>
				<div className="flex justify-between text-sm">
					<Image
						priority={true}
						quality={100}
						width={150}
						className="max-w-40 h-auto"
						src={Logo}
						alt="Logo"
					/>
					<nav className="flex items-center">
						<Image
							src={selectPatientIcon}
							width={19}
							className="h-auto"
							alt="icon"
						/>
						<div className="mr-3" onClick={toggleLogin}>
							  Login
						</div>
					
						<Image
							src={favorites}
							width={50}
							className="h-auto -mr-3"
							alt="icon"
						/>
						<div className="mr-3 hover:cursor-pointer">
							Favorites
						</div>
						<Image
							src={shoppingBag}
							width={21}
							className="h-auto"
							alt="icon"
						/>
						<div className="mr-3">
							{" "}
							<Link href={"/shoppingCart"}>
								Shopping bag
							</Link>
						</div>
					</nav>
				</div>
				<div className="flex items-center justify-between sm:flex-col">
					<ul className=" font-semibold text-sm  mt-3 ml-[29%] grid grid-rows-1 grid-flow-col gap-11 w-1/3   sm:flex sm:flex-col sm:items-center sm:justify-normal sm:mx-auto sm:h-2/4    ">
						{navbar.map((e, index) => {
							const handleMouseEnter = (category) => {
								setVariety(category);
								triggerfetchedData();
							};
							
							return (
								<>
									<li
										onMouseEnter={()=> { handleMouseEnter(e)}

										}
										onMouseLeave={
											triggerWindowCollapse
										}
										className="hover:underline underline-offset-4 "
										key={index}
									>
										{e}
									</li>
								</>
							);
						})}
					</ul>
					<search className="flex border-b border-b-gray-700 ml-auto h-fit sm:w-1/3 sm:mr-0 ">
						<Image
							onClick={SearchIncludes}
							src={searchIcon}
							alt="icon"
							className="h-auto"
						/>
						<input
							value={search}
							className=" text-sm bg-gray-200 focus:outline-none"
							placeholder="Search..."
							onChange={(e)=> {
								setSearch(e.target.value)
								
							}}
						/>
					</search>
				</div>
				<section
					onMouseEnter={() => {
						setArticles("");
					}}
					onMouseLeave={()=> {
						setArticles('hidden')
					}}
					className={`w-full mx-auto    border-t-0 ${articles} flex justify-around items-start  text-nowrap text-sm  `}
				>
					{ group !== undefined || null ? group.CategoriesArray.map(
						({ CategoryValue, CategoriesArray }, index) => {

							const category = group.CatName
							return (
								
									<table key={index} className="mr-14 w-3/5">
										<thead>
											<tr className="mb-10 pt-10 font-semibold">
												{CategoryValue}
											</tr>
										</thead>
										<tbody>
											{CategoriesArray ? CategoriesArray.map(
												(
													{
														CategoryValue, tagCodes,CatName
													},
													index
												) => {
													return (
														<>
															<tr
																key={
																	index
																}
																className="mb-10 hover:underline underline-offset-4 "
																
															>
																<Link href={`/allProduct/${category}/${tagCodes[0]}/${CatName}`}>{
																	CategoryValue
																}</Link>
															</tr>
														</>
													);
												}
											): ''}
										</tbody>
									</table>
								
							);
						}
					): ''}
				</section>
			</header>
	);
}
