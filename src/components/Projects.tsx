import { ExternalLink, Github } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import projectTrends from "@/assets/project-trends.jpg";
import projectCommunication from "@/assets/project-communication.jpg";
import projectBackup from "@/assets/project-backup.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Tableau Dashboard - Airline Review Analysis",
      description:
        "Interactive Tableau dashboard analyzing airline reviews with comprehensive visualizations for customer satisfaction metrics, service quality trends, and operational insights.",
      technologies: ["Tableau", "Data Visualization", "Analytics"],
      image: projectTrends,
      liveLink: "https://public.tableau.com/app/profile/prachi.gaikwad3617/viz/Airline_Review_Dashboard/Dashboard1",
      githubLink: "https://github.com/PrachiGaikwad1/Tableau-Dashboards",
    },
    {
      title: "Power BI Dashboard - Amazon prime shows analysis",
      description:
        "Collection of professional PowerBI dashboards showcasing data analysis and business intelligence capabilities with interactive visualizations and actionable insights.",
      technologies: ["PowerBI", "Business Intelligence", "Data Analysis"],
      image: projectCommunication,
      liveLink: "https://github.com/PrachiGaikwad1/PowerBI-Dashboards/tree/main/power-bi-amazon-shows-dashboard",
      githubLink: "https://github.com/PrachiGaikwad1/PowerBI-Dashboards/tree/main/power-bi-amazon-shows-dashboard",
    },
    {
      title: "Identifying Trends in Programming Languages, Frameworks & Technologies",
      description:
        "Developed a comprehensive data analytics platform to identify and visualize trends in programming languages and frameworks. Features interactive dashboards, real-time data processing, and predictive analytics.",
      technologies: ["Python", "Flask", "JavaScript & SQL"],
      image: projectTrends,
      liveLink: "https://github.com/PrachiGaikwad1/Data-Science-Projects/tree/main/identifying-trends-in-programming-languages-frameworks-and-technologies",
      githubLink: "https://github.com/PrachiGaikwad1/Data-Science-Projects/tree/main/identifying-trends-in-programming-languages-frameworks-and-technologies",
    },
    {
      title: "Multithreaded Communication Application",
      description:
        "Built a robust client-server communication system using Java multi-threading. Implements concurrent request handling, thread pooling, and efficient resource management for high-performance networking.",
      technologies: ["Java", "Multi-threading", "Socket Programming"],
      image: projectCommunication,
      liveLink: "https://github.com/PrachiGaikwad1/Java-Projects/tree/main/multithreaded-communication-application",
      githubLink: "https://github.com/PrachiGaikwad1/Java-Projects/tree/main/multithreaded-communication-application",
    },
    {
      title: "Backup System Application using Observer Pattern",
      description:
        "Designed and implemented an automated backup system using the Observer design pattern. Features real-time file monitoring, incremental backups, and efficient synchronization with comprehensive logging.",
      technologies: ["Java", "Design Patterns", "Ant"],
      image: projectBackup,
      liveLink: "https://github.com/PrachiGaikwad1/Java-Projects/tree/main/correct-backup-system-application-using-observer-pattern",
      githubLink: "https://github.com/PrachiGaikwad1/Java-Projects/tree/main/correct-backup-system-application-using-observer-pattern",
    },
    {
      title: "Tableau Dashboard - Emergency Room Visits",
      description:
        "Interactive Tableau dashboard analyzing emergency room visits with comprehensive visualizations for patient flow, wait times, admission patterns, and resource utilization metrics.",
      technologies: ["Tableau", "Data Visualization", "Healthcare"],
      image: projectTrends,
      liveLink: "https://public.tableau.com/app/profile/prachi.gaikwad3617/viz/ER_Visits_Dashboard/Dashboard1",
      githubLink: "https://public.tableau.com/app/profile/prachi.gaikwad3617/viz/ER_Visits_Dashboard/Dashboard1",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Showcasing technical expertise through real-world applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-soft hover-lift border-0 bg-card animate-fade-in group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Check here
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
