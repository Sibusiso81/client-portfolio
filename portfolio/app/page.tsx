import Image from "next/image";
import Index from "./Components/Index";
import About from "./Components/About";
import Skills from "./Components/Skills";

export default function Home() {
  return (
<main className="bg-neutral-950 overflow-x-hidden text-[#eaeaea] flex flex-col ">
  <Index/>
  <About/>
  <Skills/>
</main>
  );
}
