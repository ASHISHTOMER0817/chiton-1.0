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
					<Image priority={true} quality={50} width={150} height={100} className="max-w-40" src={Logo} alt="Logo" />
					<nav className="flex items-center">
						<Image src={selectPatientIcon} width={19} height={19} alt="icon" />
						<div className="mr-3"><Link href={'/login'}> login </Link></div>
						<Image src={favorites} width={40} className="h-auto"  alt="icon" />
						<div className="mr-3">Favorites</div>
						<Image src={shoppingBag} width={21} height={21} alt="icon" />
						<div className="mr-3"> <Link href={'@/app/shopping'}  >Shopping bag</Link></div>
					</nav>
				</div>
				<div>
					<ul className="flex justify-evenly ">
						<li>Ladies</li>
						<li>Men</li>
						<li>Baby</li>
						<li>Kids</li>
						<li>Sports</li>
					</ul>
					<search className="flex justify-end">
						<Image src={searchIcon} alt="icon" height={15} width={15} />
						<input className="float-right" placeholder="Search..." />
					</search>
				</div>
				
			</header>
		</>
	);
}

