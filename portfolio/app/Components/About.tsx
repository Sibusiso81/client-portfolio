"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Briefcase,
  GraduationCap,
  Code,
  Shield,
  CastleIcon as ChessKnight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Robotic Process Automation (RPA)", icon: Code },
  { name: "Business Process Optimization", icon: Briefcase },
  { name: "Data Analytics & Power BI", icon: ChevronRight },
  { name: "Communication & Presentation Skills", icon: ChevronRight },
  { name: "Cybersecurity Awareness", icon: Shield },
];

const academicBackground = [
  {
    name: "BCom (Honours) in Information Management – University of Johannesburg (2024)",
    icon: GraduationCap,
  },
  {
    name: "BA in Public Management & Governance – University of Johannesburg (2021-2023)",
    icon: GraduationCap,
  },
  { name: "4IR Certificate (University of Johannesburg)", icon: GraduationCap },
  {
    name: "Introduction to Data Analytics with Python (Alison.com)",
    icon: GraduationCap,
  },
  { name: "Cyber Pre-Security (TryHackMe)", icon: GraduationCap },
];

export default function ProfileView() {
  const [activeView, setActiveView] = useState("overview");

  return (
    <section className="w-screen  max-w-7xl h-fit md:h-screen flex flex-col p-4 lg:p-10  justify-center space-y-4 mt-32 mx-auto">
      <div className="grid grid-cols-2 md:text-lg lg:text-2xl gap-6">
        {/* About header/ image / title text */}
        <div className="space-y-4 col-span-2 lg:col-span-1">
          <h1 className="text-3xl font-bold">Sanele Wayne Ncube</h1>
          <h2 className="text-xl text-[#eaeaea]/80">
            Business Automation Analyst | CyberSecurity Enthusiast{" "}
          </h2>
        </div>

        {/* About text */}
        <div className="col-span-2 lg:col-span-1 lg:p-6 text-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8 md:w-fit h-fit"
          >
            {/* Toggle Group */}
            <div className="bg-[#ececec] p-2 rounded-lg flex flex-col md:flex-row space-x-2  md:w-fit">
              <Button
                onClick={() => setActiveView("overview")}
                className={cn(
                  "rounded-md transition-colors duration-200  shadow-none",
                  activeView === "overview"
                    ? "bg-[#393E41] text-[#eaeaea]"
                    : "bg-[#ececec] text-black",
                  "hover:bg-[#393E41] hover:text-[#eaeaea]"
                )}
              >
                Overview
              </Button>
              <Button
                onClick={() => setActiveView("skills")}
                className={cn(
                  "rounded-md transition-colors duration-200 shadow-none",
                  activeView === "skills"
                    ? "bg-[#393E41] text-[#eaeaea]"
                    : "bg-[#ececec] text-black",
                  "hover:bg-[#393E41] hover:text-[#eaeaea]"
                )}
              >
                Skills
              </Button>
              <Button
                onClick={() => setActiveView("academic")}
                className={cn(
                  "rounded-md transition-colors duration-200 shadow-none",
                  activeView === "academic"
                    ? "bg-[#393E41] text-[#eaeaea]"
                    : "bg-[#ececec] text-black",
                  "hover:bg-[#393E41] hover:text-[#eaeaea]"
                )}
              >
                Academic
              </Button>
              <Button
                onClick={() => setActiveView("interests")}
                className={cn(
                  "rounded-md transition-colors duration-200 shadow-none",
                  activeView === "interests"
                    ? "bg-[#393E41] text-[#eaeaea]"
                    : "bg-[#ececec] text-black",
                  "hover:bg-[#393E41] hover:text-[#eaeaea]"
                )}
              >
                Interests
              </Button>
            </div>

            {/* Content based on active view */}
            <AnimatePresence mode="wait">
              {activeView === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <p className="text-lg leading-relaxed text-[#eaeaea]/90">
                    I&apos;m a Automation Business Analyst exploring the world
                    of Robotic Process Automation (RPA) and Business Process
                    Optimization. My passion lies in leveraging technology and
                    data to create solutions that enhance efficiency and drive
                    smarter decision-making. With a strong foundation in
                    business intelligence, automation, and analytics, I focus on
                    finding practical ways to improve processes, reduce
                    inefficiencies, and create seamless workflows that help
                    businesses operate at their best.
                  </p>
                </motion.div>
              )}

              {activeView === "skills" && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-sm font-medium uppercase tracking-wider text-[#eaeaea]/70">
                    Core Competencies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-[#eaeaea]/10 bg-[#393E41] text-[#eaeaea] hover:bg-[#eaeaea]/20"
                      >
                        <skill.icon className="h-3.5 w-3.5" />
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeView === "academic" && (
                <motion.div
                  key="academic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-sm font-medium uppercase tracking-wider text-[#eaeaea]/70">
                    Academic Background
                  </h3>
                  <ul className="grid gap-3 text-sm text-[#eaeaea]/90">
                    {academicBackground.map((item, index) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <item.icon className="h-4 w-4" />
                        {item.name}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {activeView === "interests" && (
                <motion.div
                  key="interests"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-sm font-medium uppercase tracking-wider text-[#eaeaea]/70">
                    Beyond Work: The Strategic & Cyber Mindset
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <ChessKnight className="h-5 w-5 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">
                          Chess & Strategic Thinking
                        </h4>
                        <p className="text-sm text-[#eaeaea]/80">
                          Playing competitive chess since 2015, applying
                          strategic thinking to business challenges.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Shield className="h-5 w-5 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">
                          Cybersecurity Enthusiast
                        </h4>
                        <p className="text-sm text-[#eaeaea]/80">
                          Exploring ethical hacking and automation security,
                          participating in platforms like TryHackMe.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
    /* 
   

    */
  );
}
