import { Briefcase, CheckCircle2 } from "lucide-react";
import { Card } from "./ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Graduate Student Assistant",
      company: "Binghamton University",
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
      company: "NETGEAR",
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
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Building scalable solutions and driving technical excellence
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-8 shadow-soft hover-lift border-0 bg-card animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary">
                    <Briefcase className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-lg text-primary font-semibold mb-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
