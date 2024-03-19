import React, { ReactNode } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";

import Link from "next/link";

function Footer() {
	return (
		<div className=" bottom-0 bg-[#E4E4E4] text-center mt-6 pt-3 flex items-center flex-col">
			<div className="grid grid-rows-1 grid-flow-col gap-[12rem] text-sm justify-center w-3/5">

			<ul className=" grid grid-cols-1 grid-flow-row gap-[10px] text-sm justify-center footer_underline">
				<li className="font-semibold text-base no-underline">SHOP</li>
				<li className="cursor-pointer hover:text-gray-600">
					<Link href={""}>Women</Link>
				</li>
				<li className="cursor-pointer hover:text-gray-600">
					{" "}
					<Link href={""}>Divided</Link>
				</li>
				<li className="cursor-pointer hover:text-gray-600">
					<Link href={""}>Men</Link>
				</li>
				<li className="cursor-pointer hover:text-gray-600">
					<Link href={""}>Baby</Link>
				</li>
				<li className="cursor-pointer hover:text-gray-600">
					<Link href={""}>Kids</Link>
				</li>
				<li className="cursor-pointer hover:text-gray-600">
					<Link href={""}>H&M HOME</Link>
				</li>
				<li className="cursor-pointer hover:text-gray-600">
					<Link href={""}>Beauty</Link>{" "}
				</li>
				<li className="cursor-pointer hover:text-gray-600">
					<Link href={""}>Sport</Link>
				</li>
			</ul>

			<ul className="grid grid-cols-1 grid-flow-row gap-[10px] text-sm justify-center footer_underline">
				<li className="font-semibold text-base no-underline ">CORPORATE INFO</li>
				<li>Career at Chiton</li>
				<li>About Chiton group</li>
				<li>Sustainability Chiton group</li>
				<li>Press</li>
				<li>Investor relations</li>
				<li>Corporate Governance</li>
			</ul>
			<ul className="grid grid-cols-1 grid-flow-row gap-[10px] text-sm justify-center footer_underline">
				<li className="font-semibold text-base no-underline">HELP</li>
				<li>Customer Service</li>
				<li>My Chiton</li>
				<li>Find a store</li>
				<li>Legal & Privacy</li>
				<li>Contact</li>
				<li>Report Scam</li>
				<li>Cookie Notice</li>
				<li>Cookie Settings</li>
			</ul>
			</div>

				<button className=" font-serif border border-black inline-block my-7 p-3 duration-500 hover:bg-gradient-to-t from-slate-700 to-black hover:text-white">
					<Link
						href={
							"https://www2.hm.com/en_in/index.html"
						}
					>
						BUY FROM H & M
					</Link>{""}
				</button>
			<div></div>
			<div className="grid grid-rows-1 grid-flow-col gap-5 justify-center mb-4">
				<Link href={"https://www.linkedin.com/in/ashish-tomer-08172004-thatsme/"}>
					<AiFillLinkedin className="hover:text-gray-500" />{" "}
				</Link>
				<Link href={"https://github.com/ASHISHTOMER0817"}>
					{" "}
					<FaGithub className="hover:text-gray-500" />
				</Link>
				<Link href={"/"}>
					{" "}
					<FaHouseChimney className="hover:text-gray-500" />
				</Link>{""}
			</div>
			<h2 className="font-serif mb-1">Chiton</h2>
			<p className="text-xs pb-1">
				The content of this site is not copyright-protected and
				is not the property of H & M Hennes & Mauritz AB{" "}
			</p>
		</div>
	);
}

export default Footer;
