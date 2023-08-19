"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Image from "next/image";
import Bookmarking from "@/app/images/illustration-features-tab-1.svg";
import Searching from "@/app/images/illustration-features-tab-2.svg";
import Sharing from "@/app/images/illustration-features-tab-3.svg";

export default function Features() {
  const array = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];

  const [buttonClicked, setButtonClicked] = useState(0);
  return (
    <section id={"features"} className={"w-full mt-[13%] lg:mt-[18%] py-12"}>
      <div className={"container mx-auto"}>
        <div
          className={
            " w-full sm:w-[70%] mx-auto flex flex-col justify-center items-center"
          }
        >
          <h1 className={"text-xl sm:text-2xl py-4 font-bold "}> Features</h1>
          <p
            className={"text-base  sm:w-[80%] text-center text-[#9194A2] py-4 "}
          >
            {" "}
            Our aim is to make it quick and easy for you to access your favorite
            websites.Your bookmarks sync between your devices so you can access
            them on the go.{" "}
          </p>
          <div
            className={cn(
              " w-full md:-auto flex flex-col px-2 justify-between  md:flex-row   sm:border-b-[1px]  sm:border-b-gray-300 border-t-[1px]  border-t-gray-300 md:border-t-0"
            )}
          >
            {array.map((item, index) => (
              <div
                key={index}
                className={
                  "w-full sm:w-auto border-b-[1px]  border-b-gray-300 sm:border-0 sm:border-b-transparent text-center"
                }
              >
                <button
                  onClick={() => {
                    setButtonClicked(index);
                  }}
                  className={cn(
                    buttonClicked == index &&
                      "border-b-2 border-b-[#FA5959] text-black ",
                    " px-4 py-4 hover:text-[#FA5959] text-gray-600 font-medium "
                  )}
                >
                  <p className={"text-base "}>{item}</p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={" relative mt-10 md:mb-[100px]"}>
        <div
          className={
            "container mx-auto flex flex-col sm:flex-row  items-center"
          }
        >
          <div className={"flex-1 flex justify-center items-center z-10"}>
            {buttonClicked === 0 ? (
              <Image
                src={Bookmarking}
                alt={"Bookmarking"}
                className={
                  "w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-[95%] md:h-[95%] "
                }
              />
            ) : buttonClicked == 1 ? (
              <Image
                src={Searching}
                alt={"Searching"}
                className={
                  "w-4/6 h-4/6 sm:w-3/4 sm:h-3/4 md:w-[95%] md:h-[95%]  "
                }
              />
            ) : (
              <Image
                src={Sharing}
                alt={"Sharing"}
                className={
                  "w-4/6 h-4/6 sm:w-3/4 sm:h-3/4 md:w-[95%] md:h-[95%]   "
                }
              />
            )}
          </div>

          <div
            className={
              "flex-1 flex flex-col justify-center  items-center sm:items-start  mt-10 md:mt-0 md:ml-14 lg:ml-20"
            }
          >
            <h1 className={"font-bold text-xl sm:text-2xl"}>
              {" "}
              {buttonClicked == 0
                ? "Bookmark in one click"
                : buttonClicked == 1
                ? "Intelligent Search"
                : "Share your bookmarks"}
            </h1>

            <p
              className={
                "text-center sm:text-start text-[#9194A2] py-4  text-base"
              }
            >
              {" "}
              {buttonClicked === 0
                ? "Organize your bookmarks however you like. our Simple drag and drop intrface gives you complete control over how you manage your favorite sites"
                : buttonClicked === 1
                ? "Our Powerful search feature will help you find saved sites in no time at all.No need to trawl through all of your bookmarks"
                : "Easily share your bookmarks and collections with others.Create a shareable link that you can send at the click of a button"}
            </p>

            <button
              className={
                "px-4 py-2 text-center text-white bg-[#5266DF] rounded-md hidden md:flex  hover:shadow-md  hover:shadow-[#5266DF] hover:text-[#5266DF]  hover:bg-white"
              }
            >
              More Info
            </button>
          </div>

          <div
            className={cn(
              buttonClicked === 0 ? "h-[100%] " : "h-[85%]",
              "absolute hidden md:flex bg-[#5266DF]  w-[40%]  top-[30%] left-0 rounded-r-full "
            )}
          ></div>
        </div>
      </div>
    </section>
  );
}
