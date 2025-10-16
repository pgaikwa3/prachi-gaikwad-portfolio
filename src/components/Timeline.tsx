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
      institution: "Binghamton University",
      period: "2022 - 2024",
    },
    {
      title: "Bachelor of Engineering, Computer Engineering",
      institution: "Savitribai Phule Pune University",
      period: "2016 - 2019",
    },
    {
      title: "Diploma, Information Technology",
      institution: "Maharashtra State Board of Technical Education",
      period: "2013 - 2016",
    },
  ];

  const workItems = [
    {
      title: "Graduate Student Assistant",
      institution: "Binghamton University",
      period: "Apr 2023 - Dec 2024",
      achievements: [
        "Optimized 15+ SQL queries, reducing response times from 30 to 6 seconds and boosting data access speed by 80%",
        "Implemented a secure API authentication system using JWT tokens to restrict unauthorized access",
        "Developed backend solutions using Python and Node.js to streamline workflows, improving efficiency by 25%",
        "Migrated legacy applications to AWS, enhancing system reliability and scalability while reducing deployment time by 40%",
      ],
    },
    {
      title: "Software Engineer",
      institution: "NETGEAR",
      period: "Aug 2019 - Aug 2022",
      achievements: [
        "Built 20+ responsive web pages using React.js, HTML, CSS, and JavaScript, leading to a 15% increase in user engagement",
        "Integrated REST APIs to dynamically fetch and display data, improving application functionality and user experience",
        "Conducted unit testing with Jest and JUnit, reducing post-release bugs by 30% and ensuring code quality",
        "Implemented CI/CD pipelines using Jenkins, cutting deployment time by 50% and streamlining release cycles",
        "Collaborated in Agile teams, participating in sprint planning and code reviews to deliver high-quality software on time",
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

              {/* Graduate Student Assistant */}
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
                            <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
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

              {/* Software Engineer */}
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
                            <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
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
