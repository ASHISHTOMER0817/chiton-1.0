import React, { ReactNode } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";

import Link from "next/link";

function Footer() {
	return (
		<div className=" bottom-0 bg-gradient-to-b from-white to-gray-400 text-center mt-6 pt-3 border-t-gray-700">
			<ul className=" grid grid-rows-1 grid-flow-col gap-8 justify-center ">
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
			<ul>
				<li className=" font-serif border border-black inline-block my-7 p-3 duration-500 hover:bg-gradient-to-t from-slate-700 to-black hover:text-white">
					<Link
						href={
							"https://www2.hm.com/en_in/index.html"
						}
					>
						BUY FROM H & M
					</Link>{""}
				</li>
			</ul>
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
