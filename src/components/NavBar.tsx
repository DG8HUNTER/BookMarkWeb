import React from 'react'
import Image from "next/image"
import Link from  "next/link"

import logo from "@/app/images/logo-bookmark.svg"

import { Bars3Icon } from '@heroicons/react/20/solid'

export default function NavBar() {
  return (
    <header className={"w-full"}>
        <nav className={"container flex items-center py-4"}>
            <div>
                <Image src={logo} alt={""}/>
            </div>
            <ul className={"hidden sm:flex flex-1 items-center justify-end gap-12 text-sm font-Poppins"}>
                <Link href={"#features"} className={"uppercase cursor-pointer hover:text-[#FA5959] "}>features</Link>
                <Link href={""} className={"uppercase cursor-pointer hover:text-[#FA5959] "}>pricing</Link>
                <Link href={""} className={"uppercase cursor-pointer hover:text-[#FA5959]"}>contact</Link>
                <button  type="button" className={"uppercase px-6 py-3  bg-[#FA5959] text-white rounded-md hover:shadow-sm hover:shadow-[#FA5959]"}>login</button>
            </ul>

            <div className={"flex flex-1 justify-end items-center sm:hidden"}>

     <Bars3Icon width={25} height={25}/>

            </div>

        </nav>
    </header>

  )
}
