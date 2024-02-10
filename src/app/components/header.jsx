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
		<>
			<header className=" ">
				<div className="flex justify-between">
					<Image priority={true} quality={80} width={150}   className="max-w-40 h-auto" src={Logo} alt="Logo" />
					<nav className="flex items-center">
						<Image src={selectPatientIcon} width={19} className="h-auto" alt="icon" />
						<div className="mr-3"><Link href={'/login'}> login </Link></div>
						<Image src={favorites} width={50} className="h-auto -mr-3"  alt="icon" />
						<div className="mr-3">Favorites</div>
						<Image src={shoppingBag} width={21} className="h-auto" alt="icon" />
						<div className="mr-3"> <Link href={'@/app/shopping'}  >Shopping bag</Link></div>
					</nav>
				</div>
				<div className="flex">
					<ul className="flex justify-evenly my-3 ml-auto w-4/5">
						<li className="hover:underline-offset-2">Ladies</li>
						<li className="hover:underline-offset-2">Men</li>
						<li className="hover:underline-offset-2">Baby</li>
						<li className="hover:underline-offset-2">Kids</li>
						<li className="hover:text-pink-900">Sports</li>
					</ul>
					<search className="flex justify-end border-b-gray-700 ml-auto w-1/12">
						<Image src={searchIcon} alt="icon" height={25} className="h-auto" />
						<input className="float-right text-sm"  placeholder="Search..." />
					</search>
				</div>
				
			</header>
		</>
	);
}

