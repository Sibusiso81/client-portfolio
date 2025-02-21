import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { BriefcaseIcon } from "lucide-react"

export default function ExperienceSection() {
    const experiance =[
        {
            title:'Business Analyst (Automation) ',
            duration:'Nov 2024 – Present',
            company:'ABSA Group ',
            decription:[
                'Assisting in identifying and analyzing business processes that can benefit from automation.',
                'Supporting the development of automated workflows to reduce manual effort and improve operational efficiency.'

            ],
            badges:[
                'Process Automation',
                'Data Analytics',
                'Power BI'
            ]
            
        },
        {
            title:'Temp Data Entry Clerk ',
            duration:'Feb 2024',
            company:'NetFlorist',
            decription:[
                'Assisting in identifying and analyzing business processes that can benefit from automation.',
                'Helped ensure smooth operations during peak demand periods.'

            ],
            badges:[
                'Process Automation',
                'Data Analytics',
                'Power BI'
            ]
          
        },
        {
            title:'Geo Spartans App (Passion Project) ',
            duration:'Aug 2024',
            company:'Hackathon',
            decription:[
        "The Geo Spartans App is designed to help small-scale farmers network, collaborate, and learn new farming techniques. Recognizing the challenges that many farmers face—such as limited access to information, language barriers, and lack of connectivity with industry experts—this app provides an interactive platform where they can share insights, access agricultural best practices, and stay updated with market trends "
    ],
            badges:[
                'Networking & Collaboration  ',
                'Knowledge Hub ',
                'API-Based Language Translation '
            ]
          
        },
    ]
  return (
    <section className="w-full  max-w-7xl mx-auto px-4 py-16 space-y-8 text-[#eaeaea]  font-interTight
    ">
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl  tracking-tight  font-medium">Work Experience & Projects</h2>
        <p className="">My professional journey in business automation and analytics.</p>
      </div>

      <div className="space-y-8 text-[#eaeaea]">
        {
            experiance && experiance.map((xp,_index)=>(
                <Card className="p-6  transition-colors border-0 bg-transparent text-[#eaeaea]" key={_index}>
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
                    {
                        xp.decription.map((description,_idx)=>(
                            <p className="leading-relaxed" key={_idx}>
                {description}
              </p>
                        ))
                    }
                    
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-fit" >
                    {
                        xp.badges?.map((badge,_idx)=>(
                            <Badge variant="secondary" key={_idx}>{badge}</Badge>
                        ))
                    }
                    
                    </div>
                  </div>
                </div>
              </Card>  
            ))
        }
        {/* Experience Item 1 
        <Card className="p-6 hover:bg-muted/50 transition-colors border-0 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="md:w-1/4">
              <p className="">2022 — Present</p>
            </div>
            <div className="md:w-3/4 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium">Senior Business Automation Analyst</h3>
                  <p className="">TechCorp Solutions</p>
                </div>
                <BriefcaseIcon className="w-5 h-5  shrink-0" />
              </div>
              <p className="leading-relaxed">
                Led the implementation of RPA solutions that reduced manual processing time by 65%. Developed and
                maintained business intelligence dashboards for C-level executives.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Process Automation</Badge>
                <Badge variant="secondary">Data Analytics</Badge>
                <Badge variant="secondary">Power BI</Badge>
              </div>
            </div>
          </div>
        </Card>
*/}
        {/* Experience Item 2 
        <Card className="p-6 hover:bg-muted/50 transition-colors border-0 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="md:w-1/4">
              <p className="">2020 — 2022</p>
            </div>
            <div className="md:w-3/4 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium">Business Intelligence Analyst</h3>
                  <p className="">DataDrive Analytics</p>
                </div>
                <BriefcaseIcon className="w-5 h-5  shrink-0" />
              </div>
              <p className="leading-relaxed">
                Designed and implemented automated reporting systems that saved 20+ hours per week. Collaborated with
                stakeholders to optimize business processes through data-driven insights.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Business Intelligence</Badge>
                <Badge variant="secondary">SQL</Badge>
                <Badge variant="secondary">Python</Badge>
              </div>
            </div>
          </div>
        </Card>
*/}
        {/* Experience Item 3 
        <Card className="p-6 hover:bg-muted/50 transition-colors border-0 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="md:w-1/4">
              <p className="">2018 — 2020</p>
            </div>
            <div className="md:w-3/4 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium">Process Automation Specialist</h3>
                  <p className="">InnovateFlow Systems</p>
                </div>
                <BriefcaseIcon className="w-5 h-5  shrink-0" />
              </div>
              <p className="leading-relaxed">
                Spearheaded the automation of key business processes using RPA tools. Achieved 40% reduction in
                processing times across multiple departments.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">RPA</Badge>
                <Badge variant="secondary">Process Mapping</Badge>
                <Badge variant="secondary">UiPath</Badge>
              </div>
            </div>
          </div>
        </Card>
        */}
      </div>
    </section>
  )
}

