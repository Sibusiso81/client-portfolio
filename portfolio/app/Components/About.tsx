import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function About() {
  return (
    <section className="w-screen md:w-1/2 lg:w-screen h-screen p-4 flex flex-col items-center mx-auto lg:p-10">
      <div className="flex flex-col  w-full max-w-5xl ">
        <div className="flex flex-row  justify-between">
          <h2 className="font-medium text-xl">About</h2>
          <Button variant={'link'}  className="font-bold text-white">More about me</Button>

        </div>
        <div className="flex flex-col lg:flex-row space-y-2 text-muted-foreground w-full justify-center items-center">
          <div className=" lg:w-1/2">
          <Image
            src={"https://i.ibb.co/396h7WsC/IMG-6510.jpg"}
            alt="About-section-image"
            width={400}
            height={400}
            className="rounded-md "
          />
          </div>
          <div className="flex flex-col space-y-3 w-full lg:w-1/2 ">
          <p>Hi, I&apos;m Sanele Wayne Ncube, a Business Analyst exploring the world of Robotic Process Automation (RPA) and Business Process Optimization. My passion lies in leveraging technology and data to create solutions that enhance efficiency and drive smarter decision-making.</p>
<p>With a strong foundation in business intelligence, automation, and analytics, I focus on finding practical ways to improve processes, reduce inefficiencies, and create seamless workflows that help businesses operate at their best.</p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
