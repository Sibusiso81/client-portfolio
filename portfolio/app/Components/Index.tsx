"use client";
import { AnimatePresence } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";

function Index() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className="relative flex flex-col min-h-screen ">
    <nav className="flex justify-between items-center w-full p-6 lg:p-10 ">
      <div className="rounded-full bg-red-50">
        <Image
          src="https://i.ibb.co/6cRtF4Dr/Screenshot-2025-02-19-105104.png"
          alt="Nav-profile-image"
          width={400}
          height={408}
          className="rounded-full w-12 object-cover"
        />
      </div>
      <div className="flex items-center z-40">
        <Menu className={`cursor-pointer ${isOpen ? "hidden" : ""}`} onClick={() => setIsOpen(true)} />
        <X className={`cursor-pointer ${isOpen ? "stroke-white" : "hidden"}`} onClick={() => setIsOpen(false)} />
      </div>
    </nav>

    <AnimatePresence mode="wait">{isOpen && <Navbar />}</AnimatePresence>

    <main className="flex-grow flex items-center justify-center px-4 py-10">
      <div className="max-w-3xl space-y-6 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium">
          Harnessing the power of technology and data to streamline processes, boost efficiency, and enable smarter
          decision-making.
        </h1>
        <p className="text-muted-foreground">
        Greetings! I&apos;m a Business Automation Analyst based in Johannesburg, passionate about automation, data-driven decision-making, and business process optimization.
        </p>
        <a
          href="mailto:masanzawayne@gmail.com?subject=Let's Connect&body=Hi sanele,I'd like to discuss opportunities/collaboration"
          className="inline-flex items-center space-x-3 text-black hover:text-white bg-white hover:bg-neutral-950 stroke-black hover:stroke-white rounded-full px-4 py-2 transition-colors duration-200"
        >
          <span>masanzawayne@gmail.com</span>
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </main>
  </section>
  );
}

export default Index;
