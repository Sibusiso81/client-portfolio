import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { BriefcaseIcon } from "lucide-react";

export default function ExperienceSection() {
  const experiance = [
    {
      title: "Business Analyst (Automation) ",
      duration: "Nov 2024 – Present",
      company: "ABSA Group ",
      decription: [
        "Assisting in identifying and analyzing business processes that can benefit from automation.",
        "Supporting the development of automated workflows to reduce manual effort and improve operational efficiency.",
      ],
      badges: ["Process Automation", "Data Analytics", "Power BI"],
    },
    {
      title: "Temp Data Entry Clerk ",
      duration: "Feb 2024",
      company: "NetFlorist",
      decription: [
        "Assisting in identifying and analyzing business processes that can benefit from automation.",
        "Helped ensure smooth operations during peak demand periods.",
      ],
      badges: ["Process Automation", "Data Analytics", "Power BI"],
    },
    {
      title: "Geo Spartans App (Passion Project) ",
      duration: "Aug 2024",
      company: "Hackathon",
      decription: [
        "The Geo Spartans App is designed to help small-scale farmers network, collaborate, and learn new farming techniques. Recognizing the challenges that many farmers face—such as limited access to information, language barriers, and lack of connectivity with industry experts—this app provides an interactive platform where they can share insights, access agricultural best practices, and stay updated with market trends ",
      ],
      badges: [
        "Networking & Collaboration  ",
        "Knowledge Hub ",
        "API-Based Language Translation ",
      ],
    },
  ];
  return (
    <section
      className="w-full  max-w-7xl mx-auto px-4 py-16 space-y-8 text-[#eaeaea]  font-interTight
    "
    >
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl  tracking-tight  font-medium">
          Work Experience & Projects
        </h2>
        <p className="">
          My professional journey in business automation and analytics.
        </p>
      </div>

      <div className="space-y-8 text-[#eaeaea]">
        {experiance &&
          experiance.map((xp, _index) => (
            <Card
              className="p-6  transition-colors border-0 bg-transparent text-[#eaeaea]"
              key={_index}
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="md:w-1/4">
                  <p className="">{xp.duration}</p>
                </div>
                <div className="md:w-3/4 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-medium">{xp.title}</h3>
                      <p className="">{xp.company}</p>
                    </div>
                    <BriefcaseIcon className="w-5 h-5  shrink-0" />
                  </div>
                  {xp.decription.map((description, _idx) => (
                    <p className="leading-relaxed" key={_idx}>
                      {description}
                    </p>
                  ))}

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-fit">
                    {xp.badges?.map((badge, _idx) => (
                      <Badge variant="secondary" key={_idx}>
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
      </div>
    </section>
  );
}
