import React from 'react'
import Image from "next/image"
import Chrome from "@/app/images/logo-chrome.svg"
import FireFox  from "@/app/images/logo-firefox.svg"
import Opera from "@/app/images/logo-opera.svg"

import Dots from "@/app/images/bg-dots.svg"
import { cn } from '@/lib/utils'


interface extensionCardProps {
  name:string,


}

export default function ExtensionCard({name }:extensionCardProps) {

  
  return (
    <div className={cn(name==="FireFox"?"mt-6 sm:mt-[5%]":name==="Opera"? "mt-6 sm:mt-[10%]":"","w-full lg:w-[25%] md:w-[30%] h-[330px] flex flex-col justify-center items-center px-2 py-2 shadow-md rounded-lg hover:shadow-lg hover:scale-105 duration-300")}>


{
    name==="Chrome"?
 <Image src={Chrome} alt={""} />
 : name==="FireFox"?
 <Image src={FireFox} alt={""} />
 :
 <Image src={Opera} alt={""} />
 

}

<h1 className={"font-bold  text-lg sm:text-xl pt-4"}>Add to {name}</h1>
<p className={"text-[#9194A2] text-base pt-2 pb-4"}>Minimum version {name=="Chrome" ? "62" : name="Firefox"?"55":"46"}</p>
<Image src={Dots} alt={""}className={"mt-4"}/>

<button className={"  btn-purple my-4  py-3 px-3 rounded-md hover:shadow-md hover:shadow-[#5266DF] hover:bg-white hover:text-[#5266DF]"}>Add & Install Extension</button>






       


    
    </div>
  )
}
