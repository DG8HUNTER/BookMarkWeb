import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Questions() {
  return (
    <section className={"w-full py-6"}>
      <div className={"container mx-auto"}>
        <div className={"flex flex-col justify-center items-center"}>
          <h1 className={"font-bold text-xl sm:text-2xl py-4"}>
            {" "}
            Frequently Asked Questions
          </h1>

          <p
            className={
              "w-full sm:w-[50%] text-base text-[#9194A2] py-4  text-center"
            }
          >
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>

          <Accordion type="single" collapsible className="w-full sm:w-[50%] ">
            <AccordionItem value="item-1">
              <AccordionTrigger className={"hover:text-[#FA5959] font-medium text-sm   sm:text-base"}>What is Bookmark</AccordionTrigger>
              <AccordionContent className={"text-gray-600"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi perspiciatis itaque ab similique error velit rem
                provident dolore ullam culpa.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className={"hover:text-[#FA5959] font-medium text-sm   sm:text-base"}>
                How can i request a new browser ?
              </AccordionTrigger>
              <AccordionContent className={"text-gray-600"}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate sint odio, praesentium tenetur id ullam non placeat
                fugit tempore, quaerat, labore ab ipsum. Quibusdam debitis quis
                consequuntur obcaecati saepe quo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" >
              <AccordionTrigger className={"hover:text-[#FA5959] font-medium text-sm   sm:text-base"}>Is there a mobile app</AccordionTrigger>
              <AccordionContent className={"text-gray-600"}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
                corrupti.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" >
              <AccordionTrigger className={"hover:text-[#FA5959] font-medium text-sm   sm:text-base"}>
             What about other Chromium browser ?
              </AccordionTrigger>
              <AccordionContent className={"text-gray-600"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                consectetur sequi? Animi eos iusto ipsam, placeat nam voluptas
                reprehenderit? Delectus ex atque cum, aut aliquid ut fugit iure
                eligendi iste dolores sed eum et sequi beatae quibusdam
                repellendus assumenda accusantium.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <button  className={"px-4 py-2 mt-6 text-center text-white bg-[#5266DF] rounded-md   hover:shadow-md  hover:shadow-[#5266DF] hover:text-[#5266DF]  hover:bg-white"}>More Info</button>
        </div>
      </div>
    </section>
  );
}
