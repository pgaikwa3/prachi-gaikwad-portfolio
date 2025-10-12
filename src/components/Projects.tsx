import { ExternalLink, Github } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import projectTrends from "@/assets/project-trends.jpg";
import projectCommunication from "@/assets/project-communication.jpg";
import projectBackup from "@/assets/project-backup.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Identifying Trends in Programming Languages, Frameworks & Technologies",
      description:
        "Developed a comprehensive data analytics platform to identify and visualize trends in programming languages and frameworks. Features interactive dashboards, real-time data processing, and predictive analytics.",
      technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "PostgreSQL"],
      image: projectTrends,
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Multithreaded Communication Application",
      description:
        "Built a robust client-server communication system using Java multi-threading. Implements concurrent request handling, thread pooling, and efficient resource management for high-performance networking.",
      technologies: ["Java", "Multi-threading", "Socket Programming", "Concurrency"],
      image: projectCommunication,
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Backup System Application using Observer Pattern",
      description:
        "Designed and implemented an automated backup system using the Observer design pattern. Features real-time file monitoring, incremental backups, and efficient synchronization with comprehensive logging.",
      technologies: ["Java", "Design Patterns", "Ant", "File I/O"],
      image: projectBackup,
      liveLink: "#",
      githubLink: "#",
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

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
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
