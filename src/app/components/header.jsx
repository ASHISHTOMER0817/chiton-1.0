import Logo from "../../../public/Logo.svg";
import Image from "next/image";
import Link from 'next/link'
import searchIcon from "@/../public/search-icon.svg";
import selectPatientIcon from "@/../public/select-patient-icon.svg";
import favorites from "@/../public/favorites.svg";
import shoppingBag from "@/../public/shopping-bag.svg";

// import Login from '../login/page'

export default function Header() {
	return (
		
			<header className=" bg-gray-200">
				<div className="flex justify-between text-sm">
					<Image priority={true} quality={100} width={150}   className="max-w-40 h-auto" src={Logo} alt="Logo" />
					<nav className="flex items-center">
						<Image src={selectPatientIcon} width={19} className="h-auto" alt="icon" />
						<div className="mr-3"><Link href={'/login'}> login </Link></div>
						<Image src={favorites} width={50} className="h-auto -mr-3"  alt="icon" />
						<div className="mr-3 hover:cursor-pointer" >Favorites</div>
						<Image src={shoppingBag} width={21} className="h-auto" alt="icon" />
						<div className="mr-3"> <Link href={'@/app/shopping'}  >Shopping bag</Link></div>
					</nav>
				</div>
				<div className="flex items-center sm:flex-col">
					<ul className="flex font-semibold text-sm justify-evenly my-3 ml-auto w-1/3   sm:flex sm:flex-col sm:items-center sm:justify-normal sm:mx-auto sm:h-2/4    ">
						<li className="hover:underline underline-offset-1 my-1">Ladies</li>
						<li className="hover:underline underline-offset-1 my-1">Men</li>
						<li className="hover:underline underline-offset-1 my-1">Baby</li>
						<li className="hover:underline underline-offset-1 my-1">Kids</li>
						<li className="hover:underline underline-offset-1 my-1">Sports</li>
					</ul>
					<search className="flex border-b border-b-gray-700 ml-auto h-fit sm:w-1/3 sm:mr-0 ">
						<Image src={searchIcon} alt="icon" className="h-auto" />
						<input className=" text-sm bg-gray-200 focus:outline-none"  placeholder="Search..." />
					</search>
				</div>
				
			</header>
		
	);
}

