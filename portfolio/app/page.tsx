import Index from "./Components/Index";
import About from "./Components/About";
import ExperienceSection from "./Components/Experiance";
import Contact from "./Components/Contact";

export default function Home() {
  return (
<main className="bg-[#393E41] overflow-x-hidden h-fit text-[#eaeaea] flex flex-col space-y-6  ">
  <Index/>
  <About/>
  <ExperienceSection/>
  <Contact/>
</main>
  );
}
