import React from "react";
import { BarChart, Cpu, FileSpreadsheet, Shield, Zap } from "lucide-react";



function Skills() {
  const Skills = [
    {
      name: "Robotic Process Automation (RPA) ",
      description:
        "Learning to automate repetitive tasks for better efficiency.",
      icon: Cpu,
    },
    {
      name: "Business Process Optimization ",
      description: "Identifying and improving inefficient workflows.",
      icon: Zap,
    },
    {
      name: "Data Analytics & Power BI ",
      description:
        "Creating visual reports that help businesses make data-driven decisions.",
      icon: BarChart,
    },
    {
      name: "Communication & Presentation Skills ",
      description:
        "Translating technical concepts into clear, actionable insights.",
      icon: FileSpreadsheet,
    },
    {
      name: "Cybersecurity Awareness ",
      description:
        "Understanding how security and automation intersect in the pervalent business environment.",
      icon: Shield,
    },
  ];
  return (
    <section className="w-screen h-fit flex flex-col p-4  md:p-8 lg:p-10 space-y-6 max-w-6xl ">
      <h2 className="text-2xl font-bold font-interTight">
        Skills & Core competencies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-self-center">
        {Skills &&
          Skills.map((Skills,_index) => (
            <div className="flex flex-col space-y-4" key={_index}>
              <div className="flex flex-row space-x-3  items-start">
                <Skills.icon className="bg-neutral-800 p-1 rounded-lg min-w-12 min-h-8" />
                <p className="text-lg">{Skills.name}</p>
              </div>
              <div>
                <p className="text-muted-foreground">{Skills.description}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Skills;
