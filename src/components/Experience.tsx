import { Briefcase, CheckCircle2 } from "lucide-react";
import { Card } from "./ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Graduate Student Assistant - Developer",
      company: "Binghamton University, New York",
      period: "Apr 2023 - Dec 2024",
      achievements: [
        "Developed and maintained end-to-end web application - University Portal using HTML, CSS, ReactJS, JavaScript, and SQL, improving data access speed by 25%.",
        "Created data dashboards and visual reports using Tableau and SQL to analyze student engagement, course registration, and support ticket metrics, enabling data-driven decision-making.",
        "Implemented an AI-powered chatbot integrated with the university portal for student support to handle FAQs on class schedules, tests, and assignments, improving accessibility and reducing administrative workload.",
      ],
    },
    {
      title: "Software Engineer",
      company: "NETGEAR",
      period: "Aug 2019 - Aug 2022",
      achievements: [
        "Conducted data analysis and created visual dashboards using Python, Tableau, Power BI and SQL, providing insights into system metrics, order trends, and performance KPIs for management teams.",
        "Performed SQL query tuning and database optimization using EXPLAIN PLAN to enhance report generation speed and backend data performance by 25%.",
        "Built data pipelines and automated ETL workflows using Apache Airflow, enabling efficient data extraction, transformation, and loading for analytics and reporting.",
        "Collaborated with cross-functional teams to integrate analytical components and ensure data consistency across systems, aligning engineering outputs with business intelligence needs.",
        "Developed and optimized end-to-end Java-based backend solutions using Spring Boot, JavaEE, Oracle DB, and REST APIs, improving integration accuracy and data exchange across enterprise partners such as Amazon, Walmart, and Best Buy.",
        "Modernized legacy systems by migrating from Java 6 to OpenJDK 11 and improving processing performance through code refactoring and CI/CD automation.",
        "Implemented DevOps automation using Jenkins, Docker, and Ansible for build orchestration, containerized deployments, and server configuration management, improving release reliability and deployment efficiency.",
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
