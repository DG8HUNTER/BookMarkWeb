import React from "react";
import ExtensionCard from "@/components/ExtensionCard";

export default function Extensions() {
  return (
    <section className={"py-4"}>
      <div className={"container mx-auto "}>
        <div className={"w-full flex flex-col justify-center items-center"}>
          <h1 className={"font-bold text-xl sm:text-2xl py-4"}>
            Download the extension
          </h1>
          <p
            className={
              " w-full sm:w-[50%] text-base text-[#9194A2] py-4  text-center"
            }
          >
            {` We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like us to prioritize`}
          </p>
        </div>
        <div className={"flex flex-col sm:flex-row justify-around py-10"}>
          <ExtensionCard name={"Chrome"} />
          <ExtensionCard name={"FireFox"} />
          <ExtensionCard name={"Opera"} />
        </div>
      </div>
    </section>
  );
}
