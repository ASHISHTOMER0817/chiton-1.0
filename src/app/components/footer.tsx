import React from "react";
import Image from "next/image";
import icons8 from "@/../public/icons8-instagram.svg"
import pinterest from "@/../public/icons8-pinterest.svg"
import tik from "@/../public/icons8-tik-tok.svg"
import youtube from "@/../public/icons8-youtube-12.svg"
import facebook from "@/../public/icons8-facebook.svg"



function Footer() {


      const icons = [icons8, pinterest, tik, youtube, facebook]
	return (
		<div className=" bottom-0 bg-gradient-to-b from-white to-gray-400 text-center mt-6 pt-3 border-t-gray-700">

			<ul className=" grid grid-rows-1 grid-flow-col gap-8 justify-center ">
                      
                        <li className="cursor-pointer hover:text-gray-600">Women</li>
                        <li className="cursor-pointer hover:text-gray-600">Divided</li>
                        <li className="cursor-pointer hover:text-gray-600">Men</li>
                        <li className="cursor-pointer hover:text-gray-600">Baby</li>
                        <li className="cursor-pointer hover:text-gray-600">Kids</li>
                        <li className="cursor-pointer hover:text-gray-600">H&M HOME</li>
                        <li className="cursor-pointer hover:text-gray-600">Beauty </li>
                        <li className="cursor-pointer hover:text-gray-600">Sport</li>
                  </ul>
			<ul>
                        <li  className=" font-serif border border-black inline-block my-7 p-3 duration-500 hover:bg-gradient-to-t from-slate-700 to-black hover:text-white">BUY FROM H & M </li>
                  </ul>
                  <div></div>
			<div className="grid grid-rows-1 grid-flow-col gap-5 justify-center mb-4">
                       { icons.map((e, index)=> {
                              return(

                                    <Image src={e} key={index} className="w-6" alt={"icon"}/>
                              )
                        })}
                        
                  </div>
			<h2 className="font-serif mb-1">Chiton</h2>
                  <p className="text-xs pb-1">The content of this site is not copyright-protected and is not the property of H & M Hennes & Mauritz AB </p>
		</div>
	);
}

export default Footer;
