"use client";
import { AnimatePresence } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";

function Index() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className="relative flex flex-col h-fit md:min-h-screen ">
      <nav className="flex justify-between items-center w-full p-6 lg:p-10 ">
        <div className="">
          {/*   <Image
          src="https://i.ibb.co/6cRtF4Dr/Screenshot-2025-02-19-105104.png"
          alt="Nav-profile-image"
          width={400}
          height={408}
          className="rounded-full w-12 object-cover"
        /> */}
          <h1 className="text-lg md:text-2xl font-bold">Sanele Ncube</h1>
        </div>
        <div className="flex items-center z-40">
          <Menu
            className={`cursor-pointer ${isOpen ? "hidden" : ""}`}
            onClick={() => setIsOpen(true)}
          />
          <X
            className={`cursor-pointer ${isOpen ? "stroke-white" : "hidden"}`}
            onClick={() => setIsOpen(false)}
          />
        </div>
      </nav>

      <AnimatePresence mode="wait">{isOpen && <Navbar />}</AnimatePresence>

      <section className=" p-2 md:p-6 space-y-8 lg:space-y-20 flex flex-col items-center tracking-tighter ">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="w-fit flex justify-center">
            <Image
              src={"https://i.ibb.co/6cRtF4Dr/Screenshot-2025-02-19-105104.png"}
              width={400}
              height={400}
              alt="Hero-Self-image"
              className="rounded-full object-cover h-auto max-w-[40%] lg:max-w-[80%] 2xl:max-w-[80%]"
            />
          </div>
          <div className="flex flex-col space-y-4 font-medium lg:p-4 xl:p-8 lg:w-1/2">
            <h2 className="text-[54px] xl:text-[88px] font-interTight text-wrap whitespace-normal tracking-tighter flex flex-col p-0 leading-[0.85] md:hidden">
              <span className="block">Automation</span>
              <span className="block">Business </span>
              <span className="block">Analyst</span>
            </h2>
            <h2 className="text-[44px] xl:text-[79px] font-interTight text-wrap whitespace-normal word-spacing-tight tracking-tighter md:flex flex-col p-0 space-y-0 hidden">
            Automation Business Analyst
            </h2>
            <p className="md:text-md">
              Leveraging automation, data analytics, and business intelligence
              to streamline processes, reduce inefficiencies, and drive smarter
              decision-making. Passionate about transforming complex workflows
              into seamless, scalable solutions that enhance productivity and
              business growth.
            </p>
            <p>
              Exploring the intersection of RPA, business intelligence, and
              cybersecurity to create innovative, secure, and scalable
              solutions.
            </p>
            <a
              href="mailto:masanzawayne@gmail.com?subject=Let's Connect&body=Hi sanele,I'd like to discuss opportunities/collaboration"
              className="text-black stroke-black hover:stroke-white hover:text-white bg-white hover:bg-neutral-950 rounded-full p-3 w-fit items-center flex flex-row space-x-3 text-sm"
            >
              <p>masanzawayne@gmail.com</p>
              <Mail className="" />
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Index;
