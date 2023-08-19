import React from "react";
import Image from "next/image";
import Logo from "@/app/images/logo-bookmark.svg";
import Link from "next/link";

import Facebook from "@/app/images/icon-facebook.svg";
import Twitter from "@/app/images/icon-twitter.svg";

export default function Footer() {
  return (
    <footer className={"w-full px-4}"}>
      <div className={"w-full bg-[#5266DF] "}>
        <div
          className={
            "container mx-auto flex flex-col justify-center items-center py-4"
          }
        >
          <p className={"uppercase text-white font-Poppins"}>
            {" "}
            35,000+ already joined
          </p>

          <p
            className={
              "text-2xl md:text-3xl lg:text-4xl font-bold text-white w-full sm:w-[50%] text-cente py-4 text-center"
            }
          >{`Stay up-to-date with what we're doing`}</p>

          <div
            className={
              " w-full flex flex-col md:flex-row  justify-center items-center gap-6 mb-0 sm:mb-6"
            }
          >
            <input
              type="email"
              placeholder="Enter your Email"
              className={" w-full sm:w-auto px-4 py-2 rounded-md"}
            />

            <button
              className={
                "w-full sm:w-auto py-2 px-4  bg-white rounded-md text-[#5267Df] font-medium"
              }
            >
              Contact US
            </button>
          </div>
        </div>
      </div>

      <div className={"w-full bg-[#242946] py-2"}>
        <div
          className={
            "container mx-auto flex flex-col sm:flex-row items-center py-4 gap-6 "
          }
        >
          <div
            className={"flex flex-col md:flex-row items-center gap-4 flex-1"}
          >
            <Image
              src={Logo}
              alt={"logo"}
              className={"bg-white rounded-md px-2 py-2"}
            />

            <ul
              className={
                "flex flex-col md:flex-row  text-gray-300 items-center gap-6 text-sm font-Poppins "
              }
            >
              <Link
                href={"#features"}
                className={"uppercase cursor-pointer hover:text-[#FA5959] "}
              >
                features
              </Link>
              <Link
                href={""}
                className={"uppercase cursor-pointer hover:text-[#FA5959] "}
              >
                pricing
              </Link>
              <Link
                href={""}
                className={"uppercase cursor-pointer hover:text-[#FA5959]"}
              >
                contact
              </Link>
            </ul>
          </div>
          <div className={"flex gap-10"}>
            <Image src={Facebook} alt={"Facebook"} />
            <Image src={Twitter} alt={"Twitter"} />
          </div>
        </div>
      </div>
    </footer>
  );
}
