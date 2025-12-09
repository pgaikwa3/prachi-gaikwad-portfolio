import { GraduationCap, Briefcase, CheckCircle2 } from "lucide-react";
import { Card } from "./ui/card";

const Timeline = () => {
  const EducationIcon1 = GraduationCap;
  const EducationIcon2 = GraduationCap;
  const EducationIcon3 = GraduationCap;
  const WorkIcon1 = Briefcase;
  const WorkIcon2 = Briefcase;

  const educationItems = [
    {
      title: "Master of Science in Computer Science",
      institution: "Binghamton University, NY",
      period: "2022 - 2024",
    },
    {
      title: "Bachelor of Engineering, Computer Engineering",
      institution: "University of Pune",
      period: "2016 - 2019",
    },
    {
      title: "Diploma, Information Technology",
      institution: "Government Polytechnic Pune",
      period: "2013 - 2016",
    },
  ];

  const workItems = [
      {
      title: "Research Development Engineering Intern",
      institution: "Binghamton University, NY",
      period: "Feb 2025 - Nov 2025",
      achievements: [
        "Developed recommendation models using Python to predict department-wise enrollment trends and built interactive dashboards for real-time monitoring, enabling faculty to adjust course capacity and scheduling more efficiently.",
        "Built automated ETL workflows using Dagster to collect, clean, transform, and load daily enrollment and registration datasets, ensuring accurate, up-to-date inputs for the dashboards and reducing manual reporting time by 60%.",
        "Implemented an AI-powered chatbot integrated with the university portal for student support to handle FAQs on class schedules, tests, and assignments, improving accessibility and reducing administrative workload.",
      ],
    },
    {
      title: "Graduate Assistant - Developer",
      institution: "Binghamton University, NY",
      period: "Apr 2023 - Dec 2024",
      achievements: [
        "Developed and maintained the end-to-end web application - University Portal by building optimized ReactJS components and refining backend SQL and REST API workflows, improving data access speed by 25%.",
        "Redesigned the course search feature by implementing server-side filtering and optimizing SQL execution plans using EXPLAIN PLAN, reducing search load time from 3.2s to under 1s and improving student navigation during peak registration periods.",
      ],
    },
    {
      title: "Software Engineer - Data",
      institution: "NETGEAR",
      period: "Aug 2019 - Aug 2022",
      achievements: [
        "Conducted data analysis and created visual dashboards using Python, Tableau, Power BI and SQL, providing insights into system metrics, product order trends, and performance KPIs for management teams.",
        "Improved bulk file upload performance by implementing asynchronous processing, multi-threaded file parsing, and indexed SQL lookups, reducing end-to-end processing time from minutes to seconds.",
        "Collaborated with cross-functional teams to integrate analytical components and ensure data consistency across systems, aligning engineering outputs with business intelligence needs.",
        "Developed and optimized end-to-end Java-based backend solutions using Spring Boot, JavaEE, Oracle DB, and REST APIs, improving integration accuracy and data exchange across enterprise partners such as Amazon, Walmart, and Best Buy.",
        "Modernized legacy systems by migrating from Java 6 to OpenJDK 11 and improving processing performance through code refactoring and CI/CD automation.",
        "Integrated DevOps automation using Jenkins, Git, Docker, and Ansible for build orchestration, containerized deployments, and server configuration management, improving release reliability and deployment efficiency.",
      ],
    },
  ];

  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Education & <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              My academic and professional journey
            </p>
          </div>

          <div className="relative">
            {/* Vertical line - left on mobile, center on desktop */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20" />

            <div className="space-y-8 md:space-y-12">

              {/* Research Intern - Developer */}
              <div className="relative animate-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary ring-4 ring-background z-10" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="hidden md:block"></div>
                  <div className="md:pl-8 pl-16">
                    <Card className="p-4 md:p-6 shadow-soft hover-lift border-0 bg-card">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary flex-shrink-0">
                          <WorkIcon1 className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold mb-1">{workItems[0].title}</h3>
                          <p className="text-base md:text-lg text-primary font-semibold mb-1">
                            {workItems[0].institution}
                          </p>
                          <p className="text-sm text-muted-foreground">{workItems[0].period}</p>
                        </div>
                      </div>
                      <div className="space-y-2 mt-4">
                        {workItems[0].achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Graduate Assistant - Developer */}
              <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary ring-4 ring-background z-10" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="hidden md:block"></div>
                  <div className="md:pl-8 pl-16">
                    <Card className="p-4 md:p-6 shadow-soft hover-lift border-0 bg-card">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary flex-shrink-0">
                          <WorkIcon2 className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold mb-1">{workItems[1].title}</h3>
                          <p className="text-base md:text-lg text-primary font-semibold mb-1">
                            {workItems[1].institution}
                          </p>
                          <p className="text-sm text-muted-foreground">{workItems[1].period}</p>
                        </div>
                      </div>
                      <div className="space-y-2 mt-4">
                        {workItems[1].achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
              
              {/* Masters */}
              <div className="relative animate-fade-in" style={{ animationDelay: '0ms' }}>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary ring-4 ring-background z-10" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="md:text-right md:pr-8 pl-16 md:pl-0">
                    <Card className="p-4 md:p-6 shadow-soft hover-lift border-0 bg-card md:inline-block w-full">
                      <div className="flex md:flex-row-reverse items-start gap-4 mb-4 md:justify-end">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary/80">
                          <EducationIcon1 className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1 md:text-right">
                          <h3 className="text-lg md:text-xl font-bold mb-1">{educationItems[0].title}</h3>
                          <p className="text-base md:text-lg text-primary font-semibold mb-1">
                            {educationItems[0].institution}
                          </p>
                          <p className="text-sm text-muted-foreground">{educationItems[0].period}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="hidden md:block"></div>
                </div>
              </div>

              {/* Software Engineer - Data (NETGEAR) */}
              <div className="relative animate-fade-in" style={{ animationDelay: '250ms' }}>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary ring-4 ring-background z-10" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="hidden md:block"></div>
                  <div className="md:pl-8 pl-16">
                    <Card className="p-4 md:p-6 shadow-soft hover-lift border-0 bg-card">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary flex-shrink-0">
                          <WorkIcon2 className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold mb-1">{workItems[2].title}</h3>
                          <p className="text-base md:text-lg text-primary font-semibold mb-1">
                            {workItems[2].institution}
                          </p>
                          <p className="text-sm text-muted-foreground">{workItems[2].period}</p>
                        </div>
                      </div>

                      <div className="space-y-2 mt-4">
                        {workItems[2].achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Bachelor */}
              <div className="relative animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary ring-4 ring-background z-10" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="md:text-right md:pr-8 pl-16 md:pl-0">
                    <Card className="p-4 md:p-6 shadow-soft hover-lift border-0 bg-card md:inline-block w-full">
                      <div className="flex md:flex-row-reverse items-start gap-4 mb-4 md:justify-end">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary/80">
                          <EducationIcon2 className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1 md:text-right">
                          <h3 className="text-lg md:text-xl font-bold mb-1">{educationItems[1].title}</h3>
                          <p className="text-base md:text-lg text-primary font-semibold mb-1">
                            {educationItems[1].institution}
                          </p>
                          <p className="text-sm text-muted-foreground">{educationItems[1].period}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="hidden md:block"></div>
                </div>
              </div>

              {/* Diploma */}
              <div className="relative animate-fade-in" style={{ animationDelay: '400ms' }}>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary ring-4 ring-background z-10" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="md:text-right md:pr-8 pl-16 md:pl-0">
                    <Card className="p-4 md:p-6 shadow-soft hover-lift border-0 bg-card md:inline-block w-full">
                      <div className="flex md:flex-row-reverse items-start gap-4 mb-4 md:justify-end">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary/80">
                          <EducationIcon3 className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1 md:text-right">
                          <h3 className="text-lg md:text-xl font-bold mb-1">{educationItems[2].title}</h3>
                          <p className="text-base md:text-lg text-primary font-semibold mb-1">
                            {educationItems[2].institution}
                          </p>
                          <p className="text-sm text-muted-foreground">{educationItems[2].period}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
