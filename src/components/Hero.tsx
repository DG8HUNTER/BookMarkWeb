import { cn } from '@/lib/utils'
import React from 'react'
import Image from "next/image"
import bookmark from "@/app/images/illustration-hero.svg"
import { Button } from './ui/button'
import { Bars3Icon , ArrowDownTrayIcon } from '@heroicons/react/20/solid'

export default function Hero() {
  return (
    <section className={"relative "}>
        <div className={" container flex  flex-col-reverse  sm:flex-row mt-20 "}>
        <div className={"flex flex-1 flex-col justify-center items-start"}>

            <h1 className={" text-[#242A45] text-xl md:text-3xl lg:text-5xl text-center sm:text-left font-bold w-full"}>
                A Simple Bookmark Manager

            </h1>

            <p className={"text-center sm:text-left  text-md text-[#9194A2] py-4"}>
                A clean and simple interface to organize your favorite websites.open a new browser tab and see your sites load instantly. Try it for free.
            </p>

            <div className={"flex flex-row  w-full   items-center justify-center sm:justify-start gap-6 text-md "}>
                <Button className={" btn btn-purple rounded-md whitespace-normal hover:bg-white hover:text-[#5267DF] hover:shadow-[#5267DF] "}>
                <div className={"flex items-center gap-2"}>
                  <p className={"hidden md:flex"}>Get it from Chrome </p>  
                  <ArrowDownTrayIcon width={20} height={20} className={"flex sm:hidden"}/>
                    <p className={"flex sm:hidden"}>Chrome</p> 
</div>
                     </Button>
                <Button className={" btn btn-white py-2 px-2 rounded-md text-black whitespace-normal hover:bg-black hover:text-white hover:shadow-black"}>
                    <div className={"flex items-center gap-2"}>
                    <p className={"hidden md:flex"}>Get it from FireFox</p> 
                    <ArrowDownTrayIcon width={20} height={20} className={"flex sm:hidden"}/>
                    <p className={"flex sm:hidden"}>FireFox</p> 

                    <p></p>

                    </div>
                
                   
                    </Button>


            </div>

         </div>

<div className={" flex flex-1 justify-center items-center z-10"}>
    <Image src={bookmark} alt={""} className={"w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full  "}/>

</div>
<div className={"absolute hidden md:flex bg-[#5266DF]  h-[85%]  w-1/3  top-[25%] right-0 rounded-l-full "}>

</div>



        </div>

       



    </section>
  )
}
