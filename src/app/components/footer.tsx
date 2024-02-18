import React from "react";
import Image from "next/image";
import icons8 from "@/../public/icons8-instagram.svg"
import pinterest from "@/../public/icons8-pinterest.svg"
import tik from "@/../public/icons8-tik-tok.svg"
import youtube from "@/../public/icons8-youtube-12.svg"
import facebook from "@/../public/icons8-facebook.svg"



function footer() {


      const icons = [icons8, pinterest, tik, youtube, facebook]
	return (
		<div className="bg-gradient-to-b from-white to-gray-400 text-center mt-6 pt-3 border-t-gray-700">

			<ul className=" grid grid-rows-1 grid-flow-col gap-8 justify-center ">
                      
                        <li>Women</li>
                        <li>Divided</li>
                        <li>Men</li>
                        <li>Baby</li>
                        <li>Kids</li>
                        <li>H&M HOME</li>
                        <li>Beauty </li>
                        <li>Sport</li>
                  </ul>
			<ul>
                        <li  className=" font-serif border border-black inline-block my-7 p-3">BUY FROM H & M </li>
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

export default footer;
